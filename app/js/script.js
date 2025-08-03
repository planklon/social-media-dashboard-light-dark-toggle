const themeSwitcher = document.getElementById('switcher')

if (localStorage.getItem('lightmode')) {
    themeSwitcher.checked = true;
    document.body.classList.add('light');
}

themeSwitcher.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('light')
        localStorage.setItem('lightmode','active')
    }
    else {
        document.body.classList.remove('light')
        localStorage.removeItem('lightmode')
    }
})

