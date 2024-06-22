const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        
        question.addEventListener('click', () => {
            // Toggle the 'active' class on the clicked item
            item.classList.toggle('active');

            const answer = item.querySelector('.faq__answer');
            if (item.classList.contains('active')) {
                // Open the answer section
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                // Close the answer section
                answer.style.maxHeight = '0';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Prepare the email parameters
        const params = {
            name: name,
            email: email,
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send('service_et8dgvg', 'template_z6rf2e8', params)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                contactForm.reset(); // Clear the form after sending
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again.');
            });
    });
});
