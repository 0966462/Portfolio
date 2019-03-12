$(document).ready(function(){

    $(".content").fadeIn("slow", function() {

    });

    $(".scroll").on('click', function(event) {
  
      if (this.hash !== "") {

        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){

        });
      }
    });

    $(".1").click(function(event) {
      
      event.preventDefault();

      var right = 1

      $(".textprojectsright").html(right);
    });

    $(".2").click(function(event) {
      
      event.preventDefault();

      var right = 2

      $(".textprojectsright").html(right);
    });

    $(".3").click(function(event) {
      
      event.preventDefault();

      var right = 3

      $(".textprojectsright").html(right);
    });

    $(".4").click(function(event) {
      
      event.preventDefault();

      var right = 4

      $(".textprojectsright").html(right);
    });

    $(".5").click(function(event) {
      
      event.preventDefault();

      var right = 5

      $(".textprojectsright").html(right);
    });


  });