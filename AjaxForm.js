document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const messageBox = document.getElementById("formMessage");

    if (!form || !submitBtn || !messageBox) return;

    const emailCorrections = {
        "gamil.com": "gmail.com",
        "gmial.com": "gmail.com",
        "gmail.con": "gmail.com",
        "gmai.com": "gmail.com",
        "hotnail.com": "hotmail.com",
        "hotmial.com": "hotmail.com",
        "yaho.com": "yahoo.com",
        "yahho.com": "yahoo.com",
        "outllok.com": "outlook.com",
        "outlok.com": "outlook.com"
    };

    // List of valid top-level domains for stricter email validation
    const validTLDs = ['com', 'org', 'net', 'edu', 'gov', 'mil', 'info', 'co'];

    // Improved email regex for better validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function showMessage(message, type = "success") {
        messageBox.textContent = message;
        messageBox.className = `form-message ${type}`;
        messageBox.style.display = "block";
        messageBox.setAttribute("aria-live", "polite");

        if (type === "success") {
            setTimeout(() => {
                messageBox.style.display = "none";
            }, 6000);
        }
    }

    function clearMessage() {
        messageBox.textContent = "";
        messageBox.style.display = "none";
    }

    function getFeedbackElement(field) {
        const next = field.nextElementSibling;
        return next && next.classList.contains("input-feedback") ? next : null;
    }

    function setFieldState(field, message, status) {
        const feedback = getFeedbackElement(field);

        field.classList.remove("valid", "invalid");
        if (status === "valid") {
            field.classList.add("valid");
        }
        if (status === "error") {
            field.classList.add("invalid");
        }

        if (feedback) {
            feedback.textContent = message;
            feedback.classList.remove("valid", "error", "loading");
            feedback.classList.add(status);
        }
    }

    function clearFieldState(field) {
        const feedback = getFeedbackElement(field);
        field.classList.remove("valid", "invalid");
        if (feedback) {
            feedback.textContent = "";
            feedback.classList.remove("valid", "error", "loading");
        }
    }

    function validateField(field) {
        const value = field.value.trim();
        const id = field.id;

        if (id === "name") {
            if (!value) {
                setFieldState(field, "Name is required.", "error");
                return false;
            } else if (value.length < 2) {
                setFieldState(field, "Name must be at least 2 characters.", "error");
                return false;
            } else {
                setFieldState(field, "Looks good!", "valid");
                return true;
            }
        }

        if (id === "email") {
            if (!value) {
                setFieldState(field, "Email is required.", "error");
                return false;
            } else if (!isValidEmail(value)) {
                const corrected = getCorrectedEmail(value);
                if (corrected && isValidEmail(corrected)) {
                    setFieldState(field, `Did you mean ${corrected}?`, "loading");
                } else {
                    setFieldState(field, "Please enter a valid email address.", "error");
                }
                return false;
            } else {
                setFieldState(field, "Valid email address.", "valid");
                return true;
            }
        }

        if (id === "subject") {
            if (!value) {
                setFieldState(field, "Subject is required.", "error");
                return false;
            } else if (value.length < 3) {
                setFieldState(field, "Subject must be at least 3 characters.", "error");
                return false;
            } else {
                setFieldState(field, "Looks good!", "valid");
                return true;
            }
        }

        if (id === "message") {
            if (!value) {
                setFieldState(field, "Message is required.", "error");
                return false;
            } else if (value.length < 5) {
                setFieldState(field, "Message must be at least 5 characters.", "error");
                return false;
            } else {
                setFieldState(field, "Looks good!", "valid");
                return true;
            }
        }

        return true;
    }

    function getCorrectedEmail(email) {
        const value = email.trim().toLowerCase();
        const parts = value.split("@");

        if (parts.length !== 2) {
            return null;
        }

        const [localPart, domain] = parts;
        const correctedDomain = emailCorrections[domain];

        if (correctedDomain) {
            return `${localPart}@${correctedDomain}`;
        }

        return null;
    }

    function isKnownTypoDomain(domain) {
        return emailCorrections.hasOwnProperty(domain.toLowerCase());
    }

    function isValidEmail(email) {
        const trimmed = email.trim();
        if (!emailRegex.test(trimmed)) return false;
        const domain = trimmed.split('@')[1];
        if (!domain) return false;
        if (isKnownTypoDomain(domain)) return false;
        const tld = domain.split('.').pop().toLowerCase();
        return validTLDs.includes(tld);
    }

    function isFilled(value, minLength = 1) {
        return value && value.trim().length >= minLength;
    }

    function validateAllFields() {
        let isValid = true;

        const nameField = form.name;
        const emailField = form.email;
        const subjectField = form.subject;
        const messageField = form.message;

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const subject = subjectField.value.trim();
        const message = messageField.value.trim();

        if (!isFilled(name, 2)) {
            setFieldState(nameField, "Enter your name (at least 2 characters).", "error");
            isValid = false;
        } else {
            setFieldState(nameField, "Looks good!", "valid");
        }

        if (!isFilled(email)) {
            setFieldState(emailField, "Enter your email address.", "error");
            isValid = false;
        } else if (!isValidEmail(email)) {
            const corrected = getCorrectedEmail(email);
            if (corrected && isValidEmail(corrected)) {
                setFieldState(emailField, `Did you mean ${corrected}?`, "loading");
            } else {
                setFieldState(emailField, "Email is not valid.", "error");
            }
            isValid = false;
        } else {
            setFieldState(emailField, "Valid email address.", "valid");
        }

        if (!isFilled(subject, 3)) {
            setFieldState(subjectField, "Enter a subject (at least 3 characters).", "error");
            isValid = false;
        } else {
            setFieldState(subjectField, "Looks good!", "valid");
        }

        if (!isFilled(message, 5)) {
            setFieldState(messageField, "Enter a message (at least 5 characters).", "error");
            isValid = false;
        } else {
            setFieldState(messageField, "Looks good!", "valid");
        }

        return isValid;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        clearMessage();

        // Don't clear field states here, let real-time handle them

        const honeypot = form.website ? form.website.value.trim() : "";
        if (honeypot) {
            return;
        }

        if (!validateAllFields()) {
            showMessage("Please fill the highlighted fields before sending.", "error");
            return;
        }

        const emailField = form.email;
        if (!isValidEmail(emailField.value)) {
            showMessage("Email is not valid. Please enter a correct address.", "error");
            setFieldState(emailField, "Email is not valid.", "error");
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        showMessage("Sending message...", "loading");

        try {
            const response = await fetch("AjaxForm.php", {
                method: "POST",
                body: new FormData(form)
            });

            const result = await response.json();

            if (result.success) {
                showMessage(result.message || "Your message has been sent successfully.", "success");
                form.reset();
                form.querySelectorAll("input, textarea").forEach(clearFieldState);
            } else {
                showMessage(result.message || "Unable to send your message. Please try again.", "error");
            }
        } catch (error) {
            console.error(error);
            showMessage("Something went wrong. Please try again later.", "error");
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        }
    });

    // Real-time validation on input
    form.querySelectorAll("input, textarea").forEach((input) => {
        input.addEventListener("input", () => {
            clearMessage();
            validateField(input);
        });
    });
});