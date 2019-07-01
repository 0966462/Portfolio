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

    $(".1").click(function() {


      var right = "<div class='projectstop'><h2>The Safezone</h2>Gemaakt met 4 andere studenten.<br>Een bordspel waarbij je het snelste naar De Safezone(midden) moet gaan.<br>Je kan items oppakken in de item spots(rode cirkels) en elke zone heeft verschillende items." +
      "<br>Elke speler(max 4 spelers) begint in 1 van de 4 hoeken.<br>Elke zone heeft een objective item.<br>Je moet dus alle 4 de objective items hebben om naar het midden te gaan.<br>Je kan samenwerken of je kan ook elkaar aanvallen.<br>Ook heb je de kans om zombies tegen te komen.</div>" +

      "<div class='projectsleft'><h3>Spelbord</h3><img src='img/spelbord.png' alt='Spelbord' style='max-width:80%'></div>" +
      "<div class='projectsright'><h3>Kaarten</h3><a id='kaartenleft' href=''><img src='img/arrow left.png' alt='Arrow Left' style='max-width:15%; margin: 0% 0% 40% 0%'; position: fixed; top: 50%'></a><img id='kaarten' src='img/kaarten/" + kaarten[0] + ".png' alt='" + kaarten[0] + "' style='max-width:64%; margin: 10% 3% 0% 3%'><a id='kaartenright' href=''><img src='img/arrow right.png' alt='Arrow Right' style='max-width:15%; margin: 0% 0% 40% 0%'; position: fixed; top: 50%'></a></div>" +
      "<div class='projectsbottom'><h3>Applicatie</h3>Een applicatie waarbij je:<br> - De hoeveelheid spelers kan kiezen<br> - Een dobbelsteen kan gooien<br> - Een item kaart uit een stapel kan pakken<br> - Een encounter kaart kan pakken<br> - Je stats en items kan zien<br> - De handleiding kan lezen<br> - Samen kan werken of elkaar kan aanvallen<br><br>Processing Python Mode is hierbij nodig<br>Download <a href='https://processing.org/download/' target='_blank'>hier</a> processing<br><br><b>Applicatie download</b><br><a href='files/The Safezone.zip' download>download</a></div>" +
      "<script>$('#kaartenleft').click(function() {func_kaarten_left(); return false}); $('#kaartenright').click(function() {func_kaarten_right(); return false}); </script>"

      $(".projectsdisplay").html(right);

      return false
    });



    $(".2").click(function() {
      

      var right = "<div class='projectstop'><h2>Trip Tracker</h2>Gemaakt met 4 andere studenten.<br>Een android applicatie waar je tekst met of zonder een foto kan opslaan op een bepaalde locatie.<br>Dit noemen we een memory.<br>Een memory bestaat uit een titel, story (stukje tekst), locatie en een foto.<br><br>Hieronder is een demonstratie video over de applicatie en nog eventuele screenshots van de applicatie.</div>" + 
      
      "<div class='projectsleft'><h3>Demonstratie Video</h3><iframe width='320' height='180' src='https://www.youtube.com/embed/B_T7LGdNS2Y' allowfullscreen='allowfullscreen' mozallowfullscreen='mozallowfullscreen' msallowfullscreen='msallowfullscreen' oallowfullscreen='oallowfullscreen' webkitallowfullscreen='webkitallowfullscreen'></iframe></div>" +
      "<div class='projectsright'><h3>Screenshots</h3><a id='screenshotsleft' href=''><img src='img/arrow left.png' alt='Arrow Left' style='max-width:15%; margin: 0% 0% 45% 0%'; position: fixed; top: 50%'></a><img id='screenshots' src='img/trip tracker/screenshot" + screenshots[0] + ".png' alt='screenshot " + screenshots[0] + "' style='max-width:64%; margin: 0% 3% 0% 3%'><a id='screenshotsright' href=''><img src='img/arrow right.png' alt='Arrow Right' style='max-width:15%; margin: 0% 0% 45% 0%'; position: fixed; top: 50%'></a></div>" +

      "<div class='projectsbottom'><h3>Applicatie download</h3>De download is een apk file dat dus alleen werkt met android devices.<br><a href='files/TripTracker.apk' download>download</a>" + 
      "<br><h3>Leerdoel Jaar 1</h3><a href='files/leerdoelen/Leerdoel Jaar 1.pdf' download>Leerdoel</a><br><a href='files/leerdoelen/Leerdoel Jaar 1 Bewijs en Reflectie.pdf' download>Bewijs en Reflectie</a></div>" +

      "<script>$('#screenshotsleft').click(function() {func_screenshots_left(); return false}); $('#screenshotsright').click(function() {func_screenshots_right(); return false}); </script>"

      $(".projectsdisplay").html(right);

      return false
    });

    $(".3").click(function() {
      

      var right = 3

      $(".projectsdisplay").html(right);

      return false
    });

    $(".4").click(function() {
      

      var right = 4

      $(".projectsdisplay").html(right);

      return false
    });

    $(".5").click(function() {
      

      var right = 5      

      $(".projectsdisplay").html(right);

      return false
    });


  });

