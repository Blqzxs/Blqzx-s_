document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });

            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
