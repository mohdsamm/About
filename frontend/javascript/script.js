document.addEventListener('DOMContentLoaded', () => {
    const backgroundImages = [
        { 'src': 'frontend/assets/101018-2160x3840-mobile-4k-the-witcher-tv-series-background-image.jpg', 'title': 'Ganyu', 'description': 'Lorem ipsum dolor sit amet conceptual adi splicing' },
        { 'src': 'frontend/assets/100792-1440x2560-samsung-hd-the-witcher-tv-series-wallpaper-image.jpg', 'title': 'Yae Miko', 'description': 'Lorem ipsum dolor sit amet conceptual adi splicing' },
        { 'src': 'frontend/assets/100921-1440x2560-iphone-hd-the-witcher-tv-series-wallpaper-image.jpg', 'title': 'Hu Tao', 'description': 'Lorem ipsum dolor sit amet conceptual adi splicing' },
        { 'src': 'frontend/assets/100866-1440x2560-samsung-hd-the-witcher-tv-series-background.jpg', 'title': 'Nahida', 'description': 'Lorem ipsum dolor sit amet conceptual adi splicing' },
        { 'src': 'frontend/assets/101127-1440x2560-mobile-hd-the-witcher-tv-series-background-image.jpg', 'title': 'Keqing', 'description': 'Lorem ipsum dolor sit amet conceptual adi splicing' },
        { 'src': 'frontend/assets/125921-1080x1920-iphone-full-hd-game-of-thrones-background.jpg', 'title': 'Ningguang', 'description': 'Lorem ipsum dolor sit amet conceptual adi splicing' },
        { 'src': 'frontend/assets/126795-2160x3840-samsung-4k-game-of-thrones-wallpaper.jpg', 'title': 'Furina', 'description': 'Lorem ipsum dolor sit amet conceptual adi splicing' },
        { 'src': 'frontend/assets/15147-1536x2732-iphone-hd-game-of-thrones-background.jpg', 'title': 'Amber', 'description': 'Lorem ipsum dolor sit amet conceptual adi splicing' }
    ];

    // Handle Content Box Animations
    const contentBoxes = document.querySelectorAll('.content-box');
    setTimeout(() => {
        contentBoxes.forEach((box, index) => {
            if (backgroundImages[index]) { // Ensure the image exists
                setTimeout(() => {
                    const imagePlot = document.createElement('div');
                    imagePlot.classList.add('image-plot');
                    imagePlot.innerHTML = `
                        <div class="shadow-box-image">
                            <div class="content-box-inside">
                                <h1 class="title-box-inside">${backgroundImages[index].title}</h1>
                                <span class="desc-box-inside">${backgroundImages[index].description}</span>
                            </div>
                        </div>
                        <img class="pict${index + 1}" src="${backgroundImages[index].src}">
                    `;
                    box.appendChild(imagePlot);
                    box.classList.add('active');
                }, index * 300);
            }
        });
    }, 500);

    // Handle Scale Box Animations
    const scaleBoxes = document.querySelectorAll('.scale-box');
    setTimeout(() => {
        scaleBoxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add('active');
            }, index * 300);
        });
    }, 2000);

    // Handle Menu Box Animation (With Null Check)
    const menuBox = document.querySelector('.menu-box');
    if (menuBox) {
        setTimeout(() => {
            menuBox.classList.add('active');
        }, 2000);
    }

    // Disable Right Click
    document.addEventListener('contextmenu', (event) => event.preventDefault());

    // Disable Text Selection
    document.addEventListener('selectstart', (event) => event.preventDefault());
});
