const privacy = document.querySelector('.footer__company-privacy'),
    company = document.querySelector('.footer__company'),
    content = document.querySelector('.footer__content')

window.addEventListener('resize', () => {
    if (window.innerWidth > 1170) {
        try {
            content.removeChild(privacy)
            company.appendChild(privacy)
        } catch (e) {  }
    }

    if (window.innerWidth <= 1170) {
        try {
            company.removeChild(privacy)
            content.appendChild(privacy)
        } catch (e) {  }
    }
})