
const header = document.querySelector(".navbar");

// Change the navbar background on scroll
window.onscroll = function(){
    var top = window.scrollY;
    if(top  >= 100){
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// Auto-type effect for the text
var typed = new Typed(".auto-type", {
    strings: [
        ' computer engineering student.',
        ' future full stack web developer.'],
    typeSpeed: 150,
    backSpeed: 130,
    loop: true
})


// Skills cards that redirect to specified URLs
document.addEventListener('DOMContentLoaded', function() {
    // Create an array to store the information for each card
    var cards = [
        {
            id: 'skillContainer1',
            url: 'https://www.w3schools.com/cpp/cpp_oop.asp'
        },
        {
            id: 'skillContainer2',
            url: 'https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/'
        },
        {
            id: 'skillContainer3',
            url: 'https://www.codecademy.com/catalog/subject/web-design'
        },
        {
            id: 'skillContainer4',
            url: 'https://www.w3schools.com/whatis/'
        },
        {
            id: 'skillContainer5',
            url: 'https://www.simplilearn.com/tutorials/cyber-security-tutorial/what-is-cyber-security'
        },
        {
            id: 'skillContainer6',
            url: 'https://www.w3schools.com/whatis/whatis_fullstack.asp#:~:text=A%20full%2Dstack%20web%20developer,jQuery%2C%20Angular%2C%20or%20Vue)'
        },
        
        // Add similar objects for other skill containers
    ];

    cards.forEach(function(cardInfo) {
        var card = document.getElementById(cardInfo.id);
        card.addEventListener('click', function(){
             // Ask for confirmation before redirecting
            var isConfirmed = confirm("Are you sure you want to visit the link?");
            
            if (isConfirmed) {
                 // Redirect to a specific URL when the user confirms
                window.open(cardInfo.url ,'_blank');
            }
        });
    });
});


// Sending email using EmailJS
function sendMail() {
    (function() {
      emailjs.init("8HYbk0Us84mZLrPY0"); // Account Public Key
    })();

    var sendername = document.querySelector("#sendername").value;
    var replyto = document.querySelector("#replyto").value;
    var subject = document.querySelector("#subject").value;
    var message = document.querySelector("#message").value;

    // Check if any of the required fields are empty
    if (sendername === '' || replyto === '' || subject === '' || message === '') {
      alert('Please fill in all the required fields before sending the email.');
      return; // Exit the function and prevent sending the email.
    }

    // Clear the form fields
    document.getElementById('sendername').value = '';
    document.getElementById('replyto').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';

    var serviceID = "service_2q2heib"; // Email Service ID
    var templateID = "template_8o5ejnj"; // Email Template ID

    emailjs.send(serviceID, templateID, {
      sendername: sendername,
      replyto: replyto,
      subject: subject,
      message: message
    })
    .then(res => {
      alert("Email sent successfully!!");
    })
    .catch();
  }
