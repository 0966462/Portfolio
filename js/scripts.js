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

      var right = "<div class='projectstop'><h2>The Safezone</h2>Gemaakt met 4 andere studenten.<br>Een bordspel waarbij je het snelste naar De Safezone(midden) moet gaan.<br>Je kan items oppakken in de item spots(rode cirkels) en elke zone heeft verschillende items." +
      "<br>Elke speler(max 4 spelers) begint in 1 van de 4 hoeken.<br>Elke zone heeft een objective item.<br>Je moet dus alle 4 de objective items hebben om naar het midden te gaan.<br>Je kan samenwerken of je kan ook elkaar aanvallen.<br>Ook heb je de kans om zombies tegen te komen.</div>" +

      "<div class='projectsleft'><h3>Speelbord</h3><img src='img/speelbord.png' alt='Speelbord' style='max-width:80%'></div>" +
      "<div class='projectsright'><h3>Kaarten</h3></div>" +
      "<div class='projectsbottom'><h3>Applicatie</h3>Een applicatie waarbij je:<br> - De hoeveelheid spelers kan kiezen<br> - Een dobbelsteen kan gooien<br> - Een item kaart uit een stapel kan pakken<br> - Een encounter kaart kan pakken<br> - Je stats en items kan zien<br> - De handleiding kan lezen<br> - Samen kan werken of elkaar kan aanvallen<br><br>Processing Python Mode is hierbij nodig<br>Download <a href='https://processing.org/download/' target='_blank'>hier</a> processing<br><br><b>Applicatie download</b><br><a href='files/The Safezone.zip' download>download</a></div>"


      $(".projectsdisplay").html(right);
    });

    $(".2").click(function(event) {
      
      event.preventDefault();

      var right = 2

      $(".projectsdisplay").html(right);
    });

    $(".3").click(function(event) {
      
      event.preventDefault();

      var right = 3

      $(".projectsdisplay").html(right);
    });

    $(".4").click(function(event) {
      
      event.preventDefault();

      var right = 4

      $(".projectsdisplay").html(right);
    });

    $(".5").click(function(event) {
      
      event.preventDefault();

      var right = 5      

      $(".projectsdisplay").html(right);
    });


  });