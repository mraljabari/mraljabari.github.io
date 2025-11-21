// Portal Links Data
const portalLinks = [
    {
        id: 1,
        title: 'My Web',
        description: '',
        url: '',
        icon: 'globe',
        color: '#2563eb'
    },
    {
        id: 2,
        title: 'My Spotify',
        description: 'Sebuah Dokumentasi Hobi',
        url: 'https://www.spotify.com',
        icon: 'headphones',
        color: '#7c3aed'
    },
    {
        id: 3,
        title: 'My Youtube',
        description: 'Keseruan Petualangan',
        url: 'https://www.youtube.com/c/mraljabari_',
        icon: 'youtube',
        color: '#059669'
    },
    {
        id: 4,
        title: 'My Facebook',
        description: 'Perjalanan sejarah kehidupan',
        url: 'https://www.facebook.com/m.r.aljabari/',
        icon: 'facebook',
        color: '#dc2626'
    },
    {
        id: 5,
        title: 'My Github',
        description: 'Project dan latihan programmer',
        url: 'https://reports.cisangkan.com',
        icon: 'git',
        color: '#ea580c'
    },
    {
        id: 6,
        title: 'My Instagram',
        description: 'Bantuan & Kontak',
        url: 'https://support.cisangkan.com',
        icon: 'ig',
        color: '#0891b2'
    }
];

// SVG Icons
const icons = {
    globe: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    dollar: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    package: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    chart: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    headphones: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
    ig : '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"viewBox="0 0 24 24" fill="none" stroke="currentColor"stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>',
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> </svg>',
    github: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.356.44-1.54 6.44-7A5.44 5.44 0 0 0 204.77 5.07 5.07 0 0 0 19.91 1S18.73.6516 2.48a13.38 13.38 0 0 0-7 0C6.27.655.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.36.61 6.44 7A3.37 3.37 0 0 0 9 17.13V21"></path></svg>',
    youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"viewBox="0 0 24 24" fill="none" stroke="currentColor"stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7.5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z"></path><polygon points="10 9 16 12 10 15 10 9"></polygon></svg>',
    git : '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"viewBox="0 0 24 24" fill="none" stroke="currentColor"stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3"></path><path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61"></path><path d="M12 12c-3.14-.35-6.44-1.54-6.44-7A5.44 5.44 0 0 1 7 1"></path><path d="M12 12c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 17 1"></path><path d="M7 1S8.27.65 11 2.48a13.38 13.38 0 0 1 7 0C20.73.65 22 1 22 1"></path></svg>'

    };

// State
let rotation = 0;
let isDragging = false;
let startAngle = 0;

const menu = document.getElementById('circularMenu');
const segmentAngle = 360 / portalLinks.length;

// Create segments
function createSegments() {
    portalLinks.forEach((link, index) => {
        const segment = document.createElement('div');
        segment.className = 'menu-segment';
        
        const angle = index * segmentAngle;
        const skewAngle = 90 - segmentAngle;
        
        segment.style.transform = `rotate(${angle}deg) skewY(-${skewAngle}deg)`;
        segment.style.setProperty('--segment-color', link.color);
        segment.style.setProperty('--angle', `${angle}deg`);
        
        segment.innerHTML = `
            <div class="segment-content" style="transform: skewY(${skewAngle}deg) rotate(-${angle}deg)">
                <div class="segment-icon">${icons[link.icon]}</div>
                <span class="segment-title">${link.title}</span>
                <span class="segment-description">${link.description}</span>
            </div>
        `;
        
        segment.addEventListener('click', () => {
            window.open(link.url, '_blank');
        });
        
        menu.insertBefore(segment, menu.querySelector('.center-logo'));
    });
}

// Mouse drag handlers
function getAngle(e, rect) {
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
}

function handleMouseDown(e) {
    if (e.target.closest('.center-logo')) return;
    isDragging = true;
    const rect = menu.getBoundingClientRect();
    startAngle = getAngle(e, rect) - rotation;
    menu.style.cursor = 'grabbing';
}

function handleMouseMove(e) {
    if (!isDragging) return;
    const rect = menu.getBoundingClientRect();
    const angle = getAngle(e, rect);
    rotation = angle - startAngle;
    menu.style.transform = `rotate(${rotation}deg)`;
    
    // Update segment content rotation
    updateSegmentRotation();
}

function handleMouseUp() {
    isDragging = false;
    menu.style.cursor = 'grab';
}

function updateSegmentRotation() {
    const segments = menu.querySelectorAll('.segment-content');
    segments.forEach((content, index) => {
        const angle = index * segmentAngle;
        const skewAngle = 90 - segmentAngle;
        content.style.transform = `skewY(${skewAngle}deg) rotate(-${angle + rotation}deg)`;
    });
}

// Mouse wheel handler
function handleWheel(e) {
    e.preventDefault();
    rotation += e.deltaY > 0 ? 5 : -5;
    menu.style.transform = `rotate(${rotation}deg)`;
    updateSegmentRotation();
}

// Touch handlers for mobile
let touchStartAngle = 0;

function handleTouchStart(e) {
    if (e.target.closest('.center-logo')) return;
    const touch = e.touches[0];
    const rect = menu.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    touchStartAngle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * (180 / Math.PI) - rotation;
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = menu.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * (180 / Math.PI);
    rotation = angle - touchStartAngle;
    menu.style.transform = `rotate(${rotation}deg)`;
    updateSegmentRotation();
}

// Initialize
createSegments();

// Event listeners
menu.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mouseup', handleMouseUp);
menu.addEventListener('wheel', handleWheel);

// Touch events for mobile
menu.addEventListener('touchstart', handleTouchStart);
menu.addEventListener('touchmove', handleTouchMove, { passive: false });