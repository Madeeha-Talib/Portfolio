// Project Data - All case study information
const projectsData = {
    'safe-click': {
        title: 'Safe Click - Hybrid Phishing URL Detection',
        description: 'A comprehensive cybersecurity solution combining web platform and browser extension for real-time phishing protection using six deep learning models.',
        timeline: 'Fall 2025',
        teamSize: '3 Members',
        role: 'Full Stack Developer',
        projectType: 'Final Year Project',
        techStack: [
            { icon: 'fab fa-python', name: 'Python' },
            { icon: 'fas fa-brain', name: 'TensorFlow/Keras' },
            { icon: 'fab fa-js', name: 'JavaScript' },
            { icon: 'fab fa-php', name: 'PHP' },
            { icon: 'fas fa-database', name: 'MySQL' },
            { icon: 'fab fa-html5', name: 'HTML/CSS' },
            { icon: 'fab fa-git', name: 'Git' },
            { icon: 'fas fa-code', name: 'VS Code' }
        ],
        teamMembers: [
            { name: 'Madeeha Talib', id: '02-235221-010', role: 'Full Stack & ML Development' },
            { name: 'Arjan Kumar', id: '', role: 'Backend & Model Training' },
            { name: 'Ayesha Channa', id: '', role: 'Frontend & Extension' }
        ],
        features: [
            'Real-time Detection: Browser extension analyzes URLs as users browse',
            'On-demand Scanning: Web platform for manual URL checks',
            'Multi-model Ensemble: Six DL models for robust classification',
            'Three-Layer Detection: Feature analysis, content examination, and DL classification',
            'User History: Track all scanned URLs with results',
            'Dashboard Analytics: Statistics on detection rates and threats',
            'Cross-platform: Compatible with Chrome and Chromium browsers'
        ],
        results: [
            'Dataset: 599,984 URLs (balanced across categories)',
            'Accuracy: Up to 93% with BiLSTM and GRU models',
            'Precision: Maximum 92% for phishing detection',
            'Recall: 93% for identifying actual phishing sites',
            'Response Time: 1-3 seconds for web detection',
            'Extension Performance: 500-800ms for real-time blocking'
        ],
        details: [
            'Developed as a final year project at Bahria University',
            'Combines web interface and browser extension for maximum coverage',
            'Uses six deep learning models (LSTM, BiLSTM, RNN, GRU, Transformer, EGSO-CNN)',
            'Three-layer detection system for comprehensive analysis',
            'Trained on balanced dataset of nearly 600,000 URLs',
            'Achieved state-of-the-art performance in phishing detection'
        ]
    },
    'dyslexia-aid': {
        title: 'Dyslexia Aid Software',
        description: 'Educational software for dyslexic children with alphabet tracing, quizzes, progress monitoring, and assistive technologies.',
        timeline: '2023',
        teamSize: '7 Members',
        role: 'Software Developer',
        projectType: 'Software Engineering Project',
        techStack: [
            { icon: 'fab fa-java', name: 'Java' },
            { icon: 'fas fa-database', name: 'Oracle SQL' },
            { icon: 'fas fa-code', name: 'NetBeans' },
            { icon: 'fas fa-book', name: 'Education Tech' },
            { icon: 'fas fa-universal-access', name: 'Accessibility' },
            { icon: 'fas fa-volume-up', name: 'TTS/STT' }
        ],
        teamMembers: [
            { name: 'Madeeha Talib', id: '02-235221-010', role: 'Software Development' },
            { name: 'Sara Tariq', id: '', role: 'UI/UX Design' },
            { name: 'Minahil Shaikh', id: '', role: 'Content Development' },
            { name: 'Rida Alam', id: '', role: 'Testing & QA' },
            { name: 'Irma Kaleem', id: '', role: 'Database Design' },
            { name: 'Asim Khan', id: '', role: 'Backend Development' },
            { name: 'Wajahat Rasool', id: '', role: 'Project Management' }
        ],
        features: [
            'Alphabet Tracing: Interactive tracing with audio guidance',
            'Quizzes & Assessments: Multiple choice, true/false, and short answer questions',
            'Progress Monitoring: Tools for parents, teachers, and doctors',
            'Text-to-Speech: Converts written text to audible speech',
            'Speech-to-Text: Assists with writing tasks through voice input',
            'Course Structure: Organized lessons and learning paths',
            'User-Friendly Design: High contrast, dyslexia-friendly fonts'
        ],
        results: [
            'Comprehensive SRS documentation created',
            'Functional prototype with all core features',
            'User testing with target audience',
            'Positive feedback from educators and parents',
            'Accessibility compliance achieved'
        ],
        details: [
            'Developed as part of Software Engineering course',
            'Focus on accessibility and inclusive design',
            'Collaborative environment for multiple stakeholders',
            'Comprehensive progress tracking system',
            'Designed specifically for dyslexic learning patterns',
            'Integration of assistive technologies'
        ]
    },
    'road-rangers': {
        title: 'Road Rangers Cab Service',
        description: 'DBMS project for cab service management with passenger and captain interfaces, fare calculation, and ride tracking.',
        timeline: '2024',
        teamSize: '3 Members',
        role: 'Database Developer',
        projectType: 'Database Management System Project',
        techStack: [
            { icon: 'fab fa-java', name: 'Java' },
            { icon: 'fas fa-database', name: 'Oracle SQL Plus' },
            { icon: 'fas fa-code', name: 'NetBeans' },
            { icon: 'fas fa-car', name: 'Transportation' },
            { icon: 'fas fa-calculator', name: 'Fare Calculation' },
            { icon: 'fas fa-map-marker-alt', name: 'Ride Tracking' }
        ],
        teamMembers: [
            { name: 'Madeeha Talib', id: '02-235221-010', role: 'Database Design & Development' },
            { name: 'Sara Tariq', id: '', role: 'Frontend GUI Development' },
            { name: 'Irma Kaleem', id: '', role: 'Backend Logic & Testing' }
        ],
        features: [
            'Passenger Interface: Book rides, select options, track progress',
            'Captain Interface: Accept/reject rides, update status',
            'Fare Calculation: Based on distance and ride type',
            'Ride Management: Complete ride lifecycle tracking',
            'Analytics Dashboard: Track rides, profits, and performance',
            'Multiple Ride Options: Bikes, rickshaws, AC rides, premium cars',
            'Admin Panel: Monitor system, manage users, view reports'
        ],
        results: [
            'Complete DBMS implementation with Oracle',
            'Functional GUI with NetBeans platform',
            'Accurate fare calculation system',
            'Comprehensive ride tracking',
            'Detailed analytics and reporting'
        ],
        details: [
            'Developed as DBMS course project',
            'Focus on efficient data management',
            'Real-world cab service simulation',
            'Comprehensive ER diagram and schema design',
            'Secure user authentication system',
            'Scalable database architecture'
        ]
    },
    'elder-care': {
        title: 'Elderly Care Home Management System',
        description: 'A comprehensive database-driven platform designed to automate and streamline the essential functions of elder care facilities, incorporating advanced Database Administration (DBA) concepts for optimized performance and data accuracy.',
        timeline: 'June 2025',
        teamSize: '3 Members',
        role: 'Database Developer & Backend Engineer',
        projectType: 'Database Administration & Management Project',
        techStack: [
            { icon: 'fab fa-php', name: 'PHP 8+' },
            { icon: 'fas fa-database', name: 'MySQL 5.7/8.0' },
            { icon: 'fab fa-html5', name: 'HTML5/CSS3' },
            { icon: 'fas fa-layer-group', name: 'Bootstrap 5' },
            { icon: 'fas fa-server', name: 'XAMPP' },
            { icon: 'fas fa-code', name: 'VS Code' },
            { icon: 'fas fa-exchange-alt', name: 'ETL Processing' },
            { icon: 'fas fa-table', name: 'Materialized Views' }
        ],
        teamMembers: [
            { name: 'Madeeha Talib', id: '02-235221-010', role: 'Database Design & Implementation' },
            { name: 'Arjan Kumar', id: '', role: 'Backend Development' },
            { name: 'Hussnain Khalid', id: '', role: 'Frontend & UI Design' }
        ],
        features: [
            'Resident Management: Complete CRUD operations for resident profiles with detailed medical and personal information',
            'Smart Room Allocation: Floor-wise room assignment using horizontal partitioning for efficient space management',
            'Medical Records Tracking: Comprehensive medication history, doctor visits, and medical alerts system',
            'Visitor Management: Scheduling system for family/friend visits with automated logging',
            'Advanced DBA Utilities: Admin dashboard with CSV import/export, stored procedures, and materialized views',
            'Real-time Status Monitoring: Live occupancy tracking and room availability updates',
            'Data Summarization: Automated resident statistics using materialized views and aggregate queries',
            'ETL Processing: CSV-based data loading/unloading for easy data migration and backups'
        ],
        results: [
            'Advanced DBA Implementation: Successfully implemented ETL, horizontal fragmentation, stored procedures, and materialized views',
            'Performance Optimization: Horizontal partitioning improved query performance by 40% for floor-based operations',
            'Data Integrity: Relational database design with proper normalization (up to 3NF)',
            'Scalable Architecture: Modular design allowing easy addition of new features',
            'User-Friendly Interface: Intuitive web interface with Bootstrap 5 for responsive design',
            'Efficient Data Handling: CSV import/export reduced data entry time by 60%'
        ],
        details: [
            'Course: Database Administration & Management (ITC-424)',
            'Submission Date: 03 June 2025',
            'Implemented ETL (Extract, Transform, Load) for CSV data processing',
            'Horizontal fragmentation for room data by floor (rooms_floor1, rooms_floor2)',
            'Stored Procedures: Created RefreshResidentSummary() for automated data updates',
            'Materialized Views: Precomputed summary tables for resident statistics',
            'Relational Set Operations: Used UNION ALL to combine room data from multiple floors',
            'Simulated Partitioning: Implemented partitioned tables for efficient room management'
        ]
    },
    'smoke-detection': {
        title: 'IoT Fire Prevention System',
        description: 'IoT-based solution for early smoke detection and automated fire prevention using sensors and mobile notifications.',
        timeline: 'Spring 2023',
        teamSize: '2 Members',
        role: 'Network Engineer',
        projectType: 'Data Communication & Networking Project',
        techStack: [
            { icon: 'fas fa-network-wired', name: 'Cisco Packet Tracer' },
            { icon: 'fas fa-wifi', name: 'Wi-Fi Module' },
            { icon: 'fas fa-smoking', name: 'Smoke Sensors' },
            { icon: 'fas fa-fire-extinguisher', name: 'Fire Sprinklers' },
            { icon: 'fas fa-bell', name: 'Siren System' },
            { icon: 'fas fa-home', name: 'Home Gateway' },
            { icon: 'fas fa-mobile-alt', name: 'Mobile App' }
        ],
        teamMembers: [
            { name: 'Madeeha Talib', id: '02-235221-010', role: 'Network Design & Configuration' },
            { name: 'Irma Kaleem', id: '', role: 'IoT Integration & Testing' }
        ],
        features: [
            'Smoke Detection: Early detection using specialized sensors',
            'Temperature Monitoring: Real-time temperature tracking',
            'Automated Response: Automatic activation of sprinklers',
            'Mobile Alerts: Instant notifications to smartphone',
            'Siren Activation: Audible alerts for immediate attention',
            'Remote Monitoring: Control via mobile application',
            'Network Integration: VLANs for efficient communication'
        ],
        results: [
            'Complete network topology designed',
            'Successful simulation in Cisco Packet Tracer',
            'Real-time alert system implemented',
            'Automated response mechanisms tested',
            'Mobile integration achieved'
        ],
        details: [
            'Developed for Data Communication & Networking course',
            'Focus on IoT and smart home automation',
            'Network security considerations implemented',
            'Real-time monitoring capabilities',
            'Scalable for larger deployments',
            'Cost-effective solution for home safety'
        ]
    },
    'daewoo-bus': {
        title: 'Daewoo Bus Services System',
        description: 'Complex computing solution for bus seat booking, route management, and cargo optimization using data structures.',
        timeline: 'Spring 2023',
        teamSize: '1 Member',
        role: 'Solo Developer',
        projectType: 'Data Structures & Algorithms Project',
        techStack: [
            { icon: 'fas fa-copyright', name: 'C++' },
            { icon: 'fas fa-project-diagram', name: 'Data Structures' },
            { icon: 'fas fa-sort-amount-down', name: 'Algorithms' },
            { icon: 'fas fa-route', name: 'Route Optimization' },
            { icon: 'fas fa-box', name: 'Cargo Management' },
            { icon: 'fas fa-chair', name: 'Seat Booking' }
        ],
        teamMembers: [
            { name: 'Madeeha Talib', id: '02-235221-010', role: 'Full Development & Implementation' }
        ],
        features: [
            'Bus Search: Find buses by route, date, and availability',
            'Seat Booking: Real-time seat selection and reservation',
            'Standby Management: Priority-based standby list handling',
            'Route Mapping: Detailed route maps with terminals and cities',
            'Cargo Optimization: Profit-based cargo selection algorithm',
            'Admin Module: Comprehensive system management',
            'Efficient Algorithms: Bubble sort and selection sort implementations'
        ],
        results: [
            'Complex problem-solving implementation',
            'Efficient data structure utilization',
            'Optimized algorithms for cargo selection',
            'Comprehensive seat management system',
            'Standby list priority handling'
        ],
        details: [
            'Individual project for DSA course',
            'Focus on algorithm efficiency and optimization',
            'Real-world bus service simulation',
            'Complex computing problem solving',
            'Data structure selection based on requirements',
            'Time complexity analysis for all operations'
        ]
    },
    'library-management': {
        title: 'Library Management System',
        description: 'Database system for managing book records, student information, and library operations with automated tracking.',
        timeline: '2023',
        teamSize: '3 Members',
        role: 'Database Designer',
        projectType: 'ICT Project',
        techStack: [
            { icon: 'fas fa-database', name: 'Microsoft Access' },
            { icon: 'fas fa-code', name: 'SQL' },
            { icon: 'fas fa-book', name: 'Library Management' },
            { icon: 'fas fa-user-graduate', name: 'Student Tracking' },
            { icon: 'fas fa-calculator', name: 'Fine Calculation' },
            { icon: 'fas fa-search', name: 'Book Search' }
        ],
        teamMembers: [
            { name: 'Madeeha Talib', id: '02-235221-010', role: 'Database Design & Development' },
            { name: 'Hamza Naeem', id: '', role: 'System Analysis' },
            { name: 'Syed Hamza Hussain Shah', id: '', role: 'Documentation & Testing' }
        ],
        features: [
            'Book Management: Add, update, and track book inventory',
            'Student Management: Register and manage student information',
            'Issue/Return System: Automated book issuance and return tracking',
            'Fine Calculation: Automatic fine calculation for late returns',
            'Search Functionality: Easy search for books and students',
            'Report Generation: Various reports for library operations',
            'User-Friendly Interface: Simple and intuitive design'
        ],
        results: [
            'Complete database system implemented',
            'Automated fine calculation system',
            'Efficient book tracking mechanism',
            'Comprehensive reporting capabilities',
            'User-friendly interface design'
        ],
        details: [
            'Developed for ICT course project',
            'Focus on database management principles',
            'Real-world library operations simulation',
            'Automated processes to reduce manual work',
            'Scalable design for different library sizes',
            'Comprehensive data validation and integrity'
        ]
    }
};

// Certificate data mapping
const certificateImages = {
    'network-engineer-intern': 'Internship-Certificate.jpg',
    'ethical-hacking': 'Ethical-Hacking-Certification.jpg',
    'ui-ux': 'UX-UI-Designing.jpg',
    'project-management': 'project-management-certificate.jpg',
    'mern': 'Mern-stack.jpeg',
    'ai': 'Generative-AI.jpg',
    'digital-marketing': 'digital-markiting.jpeg'
};

const certificateTitles = {
    'network-engineer-intern': 'Network Engineer Internship Certificate - Great Learning Academy',
    'ethical-hacking': 'Ethical Hacking Certificate - Great Learning Academy',
    'ui-ux': 'UX/UI Designing Certificate - Great Learning Academy',
    'project-management': 'Project Management Certificate - Great Learning Academy',
    'mern': 'Intro to MERN Stack Certificate - BUCIS',
    'ai': 'Generative AI & Prompt Engineering Certificate - ACM & SSUIT',
    'digital-marketing': 'Digital Marketing Certificate - Circle Tech Karo'
};

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const caseStudyPopup = document.querySelector('.case-study-popup-overlay');
const caseStudyTitle = document.getElementById('caseStudyTitle');
const caseStudyContent = document.getElementById('caseStudyContent');
const caseStudyClose = document.querySelector('.case-study-popup-close');
const viewCaseStudyBtns = document.querySelectorAll('.view-case-study');
const certPopup = document.querySelector('.cert-popup-overlay');
const certPopupTitle = document.getElementById('certPopupTitle');
const certPopupImage = document.querySelector('.cert-popup-image');
const certPopupLoading = document.querySelector('.cert-popup-loading');
const certPopupClose = document.querySelector('.cert-popup-close');
const certButtons = document.querySelectorAll('.cert-image-btn');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');
const fadeElements = document.querySelectorAll('.fade-in');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll animations
const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for fade elements
fadeElements.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 25, 47, 0.95)';
        header.style.padding = '12px 0';
    } else {
        header.style.background = 'rgba(10, 25, 47, 0.95)';
        header.style.padding = '15px 0';
    }
});

// Case Study Popup Functions
function openCaseStudyPopup(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Set title
    caseStudyTitle.textContent = project.title;

    // Generate content
    let contentHTML = `
        <div class="case-study-section">
            <h4>Project Overview</h4>
            <p>${project.description}</p>
            
            <div class="popup-project-meta">
                <div class="popup-meta-item">
                    <i class="fas fa-calendar"></i>
                    <span><strong>Timeline:</strong> ${project.timeline}</span>
                </div>
                <div class="popup-meta-item">
                    <i class="fas fa-users"></i>
                    <span><strong>Team Size:</strong> ${project.teamSize}</span>
                </div>
                <div class="popup-meta-item">
                    <i class="fas fa-user-tie"></i>
                    <span><strong>My Role:</strong> ${project.role}</span>
                </div>
                <div class="popup-meta-item">
                    <i class="fas fa-graduation-cap"></i>
                    <span><strong>Project Type:</strong> ${project.projectType}</span>
                </div>
            </div>
        </div>

        <div class="case-study-section">
            <h4>Technical Stack</h4>
            <div class="popup-tech-stack">
    `;

    // Add tech stack items
    project.techStack.forEach(tech => {
        contentHTML += `
            <div class="popup-tech-item">
                <i class="${tech.icon}"></i>
                <span>${tech.name}</span>
            </div>
        `;
    });

    contentHTML += `
            </div>
        </div>

        <div class="case-study-section">
            <h4>Team Members</h4>
            <div class="popup-team-grid">
    `;

    // Add team members
    project.teamMembers.forEach(member => {
        contentHTML += `
            <div class="popup-team-member">
                <div style="width: 50px; height: 50px; background: rgba(100, 255, 218, 0.1); border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--accent);">
                    ${member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h5>${member.name}</h5>
                ${member.id ? `<p style="color: var(--accent); font-size: 0.7rem; margin: 2px 0;">${member.id}</p>` : ''}
                <p>${member.role}</p>
            </div>
        `;
    });

    contentHTML += `
            </div>
        </div>

        <div class="case-study-section">
            <h4>Key Features</h4>
            <ul class="popup-feature-list">
    `;

    // Add features
    project.features.forEach(feature => {
        contentHTML += `<li>${feature}</li>`;
    });

    contentHTML += `
            </ul>
        </div>

        <div class="case-study-section">
            <h4>Results & Outcomes</h4>
            <ul class="popup-feature-list">
    `;

    // Add results
    project.results.forEach(result => {
        contentHTML += `<li>${result}</li>`;
    });

    contentHTML += `
            </ul>
        </div>

        <div class="case-study-section">
            <h4>Project Details</h4>
            <ul class="popup-feature-list">
    `;

    // Add details
    project.details.forEach(detail => {
        contentHTML += `<li>${detail}</li>`;
    });

    contentHTML += `</ul></div>`;

    // Insert content
    caseStudyContent.innerHTML = contentHTML;

    // Open popup
    caseStudyPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCaseStudyPopup() {
    caseStudyPopup.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Certificate Popup Functions
function openCertificatePopup(certId) {
    const certImage = certificateImages[certId];
    const certTitle = certificateTitles[certId];
    
    if (!certImage) {
        alert('Certificate image not available');
        return;
    }
    
    // Set title
    certPopupTitle.textContent = certTitle;
    
    // Show loading
    certPopupLoading.style.display = 'block';
    certPopupImage.style.display = 'none';
    
    // Open popup
    certPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Load image
    const img = new Image();
    img.onload = function() {
        certPopupImage.src = certImage;
        certPopupImage.alt = certTitle;
        certPopupLoading.style.display = 'none';
        certPopupImage.style.display = 'block';
    };
    
    img.onerror = function() {
        certPopupLoading.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <p>Failed to load certificate image</p>
            <p style="font-size: 0.9rem; margin-top: 10px;">File: ${certImage}</p>
        `;
    };
    
    img.src = certImage;
}

function closeCertificatePopup() {
    certPopup.classList.remove('active');
    document.body.style.overflow = 'auto';
    certPopupImage.src = '';
}

// Event Listeners
viewCaseStudyBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = button.getAttribute('data-project');
        if (projectId) {
            openCaseStudyPopup(projectId);
        }
    });
});

caseStudyClose.addEventListener('click', closeCaseStudyPopup);
caseStudyPopup.addEventListener('click', (e) => {
    if (e.target === caseStudyPopup) {
        closeCaseStudyPopup();
    }
});

certButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const certId = button.getAttribute('data-cert');
        if (certId) {
            openCertificatePopup(certId);
        }
    });
});

certPopupClose.addEventListener('click', closeCertificatePopup);
certPopup.addEventListener('click', (e) => {
    if (e.target === certPopup) {
        closeCertificatePopup();
    }
});

// Close popups with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (caseStudyPopup.classList.contains('active')) {
            closeCaseStudyPopup();
        }
        if (certPopup.classList.contains('active')) {
            closeCertificatePopup();
        }
    }
});

// Contact Form Functionality
function showFormMessage(message, type = 'success') {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    showFormMessage('Sending message...', 'loading');
    
    try {
        // Simulate API call (replace with actual backend integration)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success simulation
        contactForm.reset();
        showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
    } catch (error) {
        console.error('Error sending email:', error);
        showFormMessage('Failed to send message. Please try again later or email me directly at madihatalib92@gmail.com', 'error');
    } finally {
        // Reset loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

contactForm.addEventListener('submit', handleFormSubmit);

// Form input validation
const formInputs = contactForm.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (formMessage.style.display === 'block') {
            formMessage.style.display = 'none';
        }
    });
});

// Background Animation
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');
const wordWallpaper = document.getElementById('wordWallpaper');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Words related to skills
const skillWords = [
    'JavaScript', 'React', 'Java', 'Python', 'HTML', 'CSS', 
    'UI/UX Design', 'Cybersecurity', 'Testing', 'QA', 'SQL',
    'Figma', 'Git', 'Jira', 'Project Management', 'Networking',
    'Android', 'IoT', 'Machine Learning', 'Deep Learning', 'Prompt Engineering'
];

// Create floating words
function createFloatingWords() {
    wordWallpaper.innerHTML = '';
    
    for (let i = 0; i < 15; i++) {
        const word = document.createElement('div');
        word.className = 'floating-word';
        word.textContent = skillWords[Math.floor(Math.random() * skillWords.length)];
        
        // Generate random movement values
        const x1 = Math.random() * 100 - 50;
        const y1 = Math.random() * 100 - 50;
        const x2 = Math.random() * 100 - 50;
        const y2 = Math.random() * 100 - 50;
        const x3 = Math.random() * 100 - 50;
        const y3 = Math.random() * 100 - 50;
        
        // Set CSS custom properties for animation
        word.style.setProperty('--x-move-1', `${x1}px`);
        word.style.setProperty('--y-move-1', `${y1}px`);
        word.style.setProperty('--x-move-2', `${x2}px`);
        word.style.setProperty('--y-move-2', `${y2}px`);
        word.style.setProperty('--x-move-3', `${x3}px`);
        word.style.setProperty('--y-move-3', `${y3}px`);
        
        // Random position and animation
        word.style.left = `${Math.random() * 100}%`;
        word.style.top = `${Math.random() * 100}%`;
        word.style.fontSize = `${Math.random() * 0.8 + 0.6}rem`;
        word.style.opacity = `${Math.random() * 0.3 + 0.1}`;
        word.style.animation = `floatWord ${Math.random() * 20 + 10}s linear infinite`;
        
        wordWallpaper.appendChild(word);
    }
}

// Circuit nodes for background
const nodes = [];
const nodeCount = 20;

class Node {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.color = `rgba(100, 255, 218, ${Math.random() * 0.2 + 0.1})`;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create nodes
for (let i = 0; i < nodeCount; i++) {
    nodes.push(new Node());
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(10, 25, 47, 0.9)');
    gradient.addColorStop(1, 'rgba(17, 34, 64, 0.7)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw nodes
    nodes.forEach(node => {
        node.update();
        node.draw();
    });
    
    // Draw connecting lines between nodes (circuit effect)
    ctx.strokeStyle = 'rgba(100, 255, 218, 0.08)';
    ctx.lineWidth = 0.8;
    
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();
            }
        }
    }
    
    requestAnimationFrame(animate);
}

// Initialize animations
createFloatingWords();
animate();

// Recreate floating words on window resize
window.addEventListener('resize', createFloatingWords);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animate stats counter
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = finalValue / 50;
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                stat.textContent = finalValue + (stat.textContent.includes('%') ? '%' : '+');
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(currentValue) + (stat.textContent.includes('%') ? '%' : '+');
            }
        }, 50);
    });
});