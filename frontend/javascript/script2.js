const mySosmed = {
    'facebook': 'https://web.facebook.com/mohhhd.samnan',
    'instagram': 'https://www.instagram.com/_samnan__',
    'whatsapp': '',
    'twitter': '',
    'discord': '',
    'linkedin': '',
};

let homeApps, termuxApps, biodataApps;

['home', 'termux', 'biodata'].forEach(app => {
    fetch(`../frontend/html/${app}_apps_mid.html`)
        .then(response => response.text())
        .then(html => {
            if (app === 'home') homeApps = html;
            else if (app === 'termux') termuxApps = html;
            else if (app === 'biodata') biodataApps = html;
        });
});

function isLogoActive(app) {
    return document.getElementById(`spawn-app-${app}`)?.classList.contains("app-active") || false;
}

function activateLogo(app, stat) {
    const nowApp = document.getElementById(`spawn-app-${app}`);
    if (nowApp) nowApp.className = `spawn-apk ${app} ${stat ? 'app-active' : ''}`;
}

function isFloatingActive() {
    return document.getElementById('app-navigator')?.classList.contains("base-shown-app") || false;
}

function activateApp(app, stat) {
    const nowApp = document.getElementById('app-navigator');
    if (!nowApp) return;

    nowApp.className = stat ? 'base-shown-app' : 'base-unshown-app';
    nowApp.innerHTML = stat ? (app === "termux" ? termuxApps : app === "home" ? homeApps : biodataApps) : "";
}

function closeAllApp() {
    document.querySelectorAll('.spawn-apk').forEach(element => {
        activateLogo(element.classList[1], false);
        activateApp(element.classList[1], false);
    });
}

function toggleAppNavigation(app) {
    let activeApp = sessionStorage.getItem('activeApp') || app;

    if (app === activeApp) {
        activateLogo(app, !isLogoActive(app));
        activateApp(app, !isFloatingActive());
    } else {
        closeAllApp();
        activateLogo(app, true);
        activateApp(app, true);
        sessionStorage.setItem('activeApp', app);
    }

    backgroundSlider();
}

function contactMeAt(sosmed) {
    const urlSosmed = mySosmed[sosmed];
    urlSosmed ? window.open(urlSosmed, '_blank') : alert(`Sorry, I don't have a ${sosmed} profile available.`);
}

function isAppActive() {
    return document.getElementById('app-navigator')?.classList.contains("base-shown-app") || false;
}

function backgroundSlider() {
    const boxSlider = document.getElementById('background-slide-button');
    if (!boxSlider) return;

    boxSlider.innerHTML = isAppActive() ? '' : `
        <div class="slider-button-container left" onclick="backgroundSlide('left')">
            <i class="slider-button-container-effect fa-solid fa-chevron-left"></i>
        </div>
        <div class="slider-button-container right" onclick="backgroundSlide('right')">
            <i class="slider-button-container-effect fa-solid fa-chevron-right"></i>
        </div>`;
}

function backgroundSlide(direction) {
    const scaleBox = document.getElementById('scale-box');
    if (!scaleBox) return;
    scaleBox.scrollLeft += (direction === 'left' ? -window.innerWidth * 0.25 : window.innerWidth * 0.25);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        toggleAppNavigation('home');
    }, 2100);
});
