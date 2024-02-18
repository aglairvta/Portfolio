function showSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (!section) return;
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = 'none';
    });
    section.style.display = 'block';
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
    var navHeight = document.querySelector('nav').offsetHeight;
    var scrollTo = section.offsetTop - navHeight;
    setTimeout(function() {
        window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    }, 100);
}
