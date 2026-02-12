// Portfolio Website JavaScript

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Load and display data from JSON
async function loadData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        // Populate hero section
        document.getElementById('hero-name').textContent = data.profile.name;
        document.getElementById('hero-title').textContent = data.profile.title;
        document.getElementById('hero-tagline').textContent = data.profile.tagline;
        
        // Populate about section
        document.getElementById('about-description').textContent = data.profile.about;
        
        // Populate skills
        populateSkills(data.skills);
        
        // Populate experience
        populateExperience(data.experience);
        
        // Populate certifications
        populateCertifications(data.certifications);
        
        // Populate education
        populateEducation(data.education);
        
        // Populate publications
        populatePublications(data.publications);
        
        // Populate contact
        populateContact(data.contact);
        
        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
    } catch (error) {
        console.error('Error loading data:', error);
        showErrorMessage();
    }
}

function populateSkills(skills) {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';
    
    skills.forEach(category => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-category fade-in';
        
        const skillList = category.items.map(skill => `<li>${skill}</li>`).join('');
        
        skillCard.innerHTML = `
            <h3>${category.category}</h3>
            <ul>${skillList}</ul>
        `;
        
        container.appendChild(skillCard);
    });
}

function populateExperience(experiences) {
    const container = document.getElementById('experience-container');
    container.innerHTML = '';
    
    experiences.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'timeline-item fade-in';
        
        const responsibilities = exp.responsibilities 
            ? `<ul>${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>`
            : '';
        
        expItem.innerHTML = `
            <h3>${exp.position}</h3>
            <div class="company">${exp.company}</div>
            <div class="period">${exp.period}</div>
            ${responsibilities}
        `;
        
        container.appendChild(expItem);
    });
}

function populateCertifications(certifications) {
    const container = document.getElementById('certifications-container');
    container.innerHTML = '';
    
    certifications.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'certification-card fade-in';
        
        certCard.innerHTML = `
            <h3>${cert.name}</h3>
            <div class="issuer">${cert.issuer}</div>
            <div class="date">${cert.date}</div>
        `;
        
        container.appendChild(certCard);
    });
}

function populateEducation(education) {
    const container = document.getElementById('education-container');
    container.innerHTML = '';
    
    education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item fade-in';
        
        eduItem.innerHTML = `
            <h3>${edu.degree}</h3>
            <div class="institution">${edu.institution}</div>
            <div class="period">${edu.period}</div>
        `;
        
        container.appendChild(eduItem);
    });
}

function populatePublications(publications) {
    const container = document.getElementById('publications-container');
    container.innerHTML = '';
    
    publications.forEach(pub => {
        const pubItem = document.createElement('div');
        pubItem.className = 'publication-item fade-in';
        
        pubItem.innerHTML = `
            <h3>${pub.title}</h3>
            <div class="authors">${pub.authors}</div>
            <div class="venue">${pub.venue}</div>
            <div class="date">${pub.date}</div>
        `;
        
        container.appendChild(pubItem);
    });
}

function populateContact(contact) {
    const container = document.getElementById('contact-container');
    container.innerHTML = '';
    
    if (contact.email) {
        const emailItem = document.createElement('div');
        emailItem.className = 'contact-item fade-in';
        emailItem.innerHTML = `
            <h3>Email</h3>
            <a href="mailto:${contact.email}">${contact.email}</a>
        `;
        container.appendChild(emailItem);
    }
    
    if (contact.phone) {
        const phoneItem = document.createElement('div');
        phoneItem.className = 'contact-item fade-in';
        phoneItem.innerHTML = `
            <h3>Phone</h3>
            <a href="tel:${contact.phone}">${contact.phone}</a>
        `;
        container.appendChild(phoneItem);
    }
    
    if (contact.linkedin) {
        const linkedinItem = document.createElement('div');
        linkedinItem.className = 'contact-item fade-in';
        linkedinItem.innerHTML = `
            <h3>LinkedIn</h3>
            <a href="${contact.linkedin}" target="_blank" rel="noopener">View Profile</a>
        `;
        container.appendChild(linkedinItem);
    }
    
    if (contact.location) {
        const locationItem = document.createElement('div');
        locationItem.className = 'contact-item fade-in';
        locationItem.innerHTML = `
            <h3>Location</h3>
            <p>${contact.location}</p>
        `;
        container.appendChild(locationItem);
    }
}

function showErrorMessage() {
    document.getElementById('hero-name').textContent = 'Anupam Kumar';
    document.getElementById('hero-title').textContent = 'Professional Portfolio';
    document.getElementById('hero-tagline').textContent = 'Please configure data.json to personalize this portfolio';
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

// Smooth scroll for navigation links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
