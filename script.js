<script>
    // Select elements
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    // Toggle navbar visibility on smaller screens
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default behavior
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            navbar.classList.remove('active'); // Close menu on link click
        });
    });

    // Highlight active link on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
</script>
