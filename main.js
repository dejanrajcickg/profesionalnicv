$(document).ready(function() {
    $('#contact-form').submit(function(e) {
      var name    = document.getElementById('cf-name')
      var email   = document.getElementById('cf-email')
      var message = document.getElementById('cf-message')
  
      if (!name.value || !email.value || !message.value) {
        alertify.error("Please check your entries");
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: 'https://formspree.io/f/mvoveolp',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        // alertify.success("Message sent");
        alert("Poruka je uspešno poslata");
      }
    });
  });