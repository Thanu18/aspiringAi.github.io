// js/scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Remove active class from all tab links and contents
            tabLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked tab link and corresponding content
            link.classList.add('active');
            const contentId = link.getAttribute('data-content');
            document.getElementById(`${contentId}-content`).classList.add('active');
        });
    });

    // Optionally, show the first tab by default
    if (tabLinks.length > 0) {
        tabLinks[0].click();
    }
});
