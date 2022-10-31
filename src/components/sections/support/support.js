const btn = document.querySelector('.support__info-btn'),
    info = document.querySelector('.support__info'),
    content = document.querySelector('.support__content')

window.addEventListener('resize', () => {
    if (window.innerWidth > 1170) {
        try {
            content.removeChild(btn)
            info.appendChild(btn)
        } catch (e) {  }
    }

    if (window.innerWidth <= 1170) {
        try {
            info.removeChild(btn)
            content.appendChild(btn)
        } catch (e) {  }
    }
})