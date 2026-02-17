function downloadApp(platform) {
    // Detect user's platform
    const userPlatform = detectPlatform();

    // Show download options based on platform
    if (platform === 'all') {
        showDownloadModal(userPlatform);
    } else {
        downloadForPlatform(platform);
    }
}

function detectPlatform() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('mac')) return 'mac';
    if (userAgent.includes('win')) return 'windows';
    if (userAgent.includes('linux')) return 'linux';
    return 'unknown';
}

function showDownloadModal(platform) {
    const downloads = {
        mac: {
            name: 'macOS',
            url: 'https://github.com/your-repo/releases/download/v5.0.0/Iromusic-5.0.0.dmg',
            size: '112 MB'
        },
        windows: {
            name: 'Windows',
            url: 'https://github.com/your-repo/releases/download/v5.0.0/Iromusic-Setup-5.0.0.exe',
            size: '173 MB'
        },
        linux: {
            name: 'Linux',
            url: 'https://github.com/your-repo/releases/download/v5.0.0/Iromusic-5.0.0.AppImage',
            size: '118 MB'
        }
    };

    const recommended = downloads[platform] || downloads.windows;

    alert(`پیشنهاد برای سیستم شما: ${recommended.name}\n\nحجم: ${recommended.size}\n\nبرای دانلود کلیک کنید یا به صفحه انتشارات مراجعه کنید.`);

    // In a real implementation, you would redirect to the download URL
    // window.open(recommended.url, '_blank');
}

function downloadForPlatform(platform) {
    const downloads = {
        'mac-intel': 'https://ds.solewino.com/storage/app/mac/Iromusic-5.5.0.dmg',
        'mac-silicon': 'https://ds.solewino.com/storage/app/mac/Iromusic-5.5.0-arm64.dmg',
        'windows': 'https://ds.solewino.com/storage/app/windows/Iromusic-5.5.0.exe',
        'linux-appimage': 'https://ds.solewino.com/storage/app/linux/Iromusic-5.5.0.AppImage',
        'linux-deb': 'https://ds.solewino.com/storage/app/linux/Iromusic-5.5.0-arm64.deb',
        'android': 'https://ds.solewino.com/storage/app/android/Iromusic.5.5.1.apk'
    };

    const platformNames = {
        'mac-intel': 'macOS (Intel)',
        'mac-silicon': 'macOS (Apple Silicon)',
        'windows': 'Windows',
        'linux-appimage': 'Linux (AppImage)',
        'linux-deb': 'Linux (Debian)',
        'android': 'Android'
    };

    const url = downloads[platform];
    const platformName = platformNames[platform];

    if (url) {
        window.open(url, '_blank');
    }
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.download-option');

    options.forEach(option => {
        option.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });

        option.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
