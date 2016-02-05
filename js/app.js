$(document).ready(function(){
  $(".icons").hover(function() {
    $(this).effect("bounce", { times: 1 }, 500);
  });
  // Add smooth scrolling to links in nav
  $(".navbar-default a.scroll").on('click', function(e){
      // Prevent default anchor click behavior
      e.preventDefault();

      //Store hash - pound in anchor tags
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth scrolling

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
      });
  });
});
