
// add smooth scrolling and scrollspy

$('body').scrollspy({ target: '#main-nav'});
$('#main-nav a').on('click', function(e){
  // check for a hash value
  if(this.hash !=='') {
    // Prevent default behavior
    e.preventDefault();
    // Store hash
    const hash = this.hash;
    // Animate smooth scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function() {
      // add hash to URL after scroll
      window.location.hash = hash;
    })
  }
});


// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

