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
      "<div class='projectsright'><h3>Kaarten</h3><a id='screenshotsSFleft' href=''><img src='img/arrow left.png' alt='Arrow Left' style='max-width:15%; margin: 0% 0% 40% 0%'; position: fixed; top: 50%'></a><img id='screenshots' src='img/safezone/screenshot1.png' alt='screenshot 1' style='max-width:64%; margin: 10% 3% 0% 3%'><a id='screenshotsSFright' href=''><img src='img/arrow right.png' alt='Arrow Right' style='max-width:15%; margin: 0% 0% 40% 0%'; position: fixed; top: 50%'></a></div>" +
      "<div class='projectsbottom'><h3>Applicatie</h3>Een applicatie waarbij je:<br> - De hoeveelheid spelers kan kiezen<br> - Een dobbelsteen kan gooien<br> - Een item kaart uit een stapel kan pakken<br> - Een encounter kaart kan pakken<br> - Je stats en items kan zien<br> - De handleiding kan lezen<br> - Samen kan werken of elkaar kan aanvallen<br><br>Processing Python Mode is hierbij nodig<br>Download <a href='https://processing.org/download/' target='_blank'>hier</a> processing<br><br><b>Applicatie download</b><br><a href='files/The Safezone.zip' download>download</a></div>" +

      "<script>$('#screenshotsSFleft').click(function() {func_screenshots('safezone', 'left'); return false}); $('#screenshotsSFright').click(function() {func_screenshots('safezone', 'right'); return false}); </script>"

      $(".projectsdisplay").html(right);

      return false
    });



    $(".2").click(function() {
      

      var right = "<div class='projectstop'><h2>Trip Tracker</h2>Gemaakt met 4 andere studenten.<br>Een android applicatie waar je tekst met of zonder een foto kan opslaan op een bepaalde locatie.<br>Dit noemen we een memory.<br>Een memory bestaat uit een titel, story (stukje tekst), locatie en een foto.<br><br>Hieronder is een demonstratie video over de applicatie en nog eventuele screenshots van de applicatie.</div>" + 
      
      "<div class='projectsleft'><h3>Demonstratie Video</h3><iframe width='320' height='180' src='https://www.youtube.com/embed/B_T7LGdNS2Y' allowfullscreen='allowfullscreen' mozallowfullscreen='mozallowfullscreen' msallowfullscreen='msallowfullscreen' oallowfullscreen='oallowfullscreen' webkitallowfullscreen='webkitallowfullscreen'></iframe></div>" +
            "<div class='projectsright'><h3>Screenshots</h3><a id='screenshotsTTleft' href=''><img src='img/arrow left.png' alt='Arrow Left' style='max-width:15%; margin: 0% 0% 45% 0%'; position: fixed; top: 50%'></a><img id = 'screenshots' src = 'img/triptracker/screenshot1.png' alt = 'screenshot 1' style = 'max-width:64%; margin: 0% 3% 0% 3%' ><a id='screenshotsTTright' href=''><img src='img/arrow right.png' alt='Arrow Right' style='max-width:15%; margin: 0% 0% 45% 0%'; </a></div> " +

      "<div class='projectsbottom'><h3>Applicatie download</h3>De download is een apk file, dus werkt het alleen met android devices.<br><a href='files/TripTracker.apk' download>download</a>" + 
      "<br><h3>Leerdoel Jaar 1</h3><a href='files/leerdoelen/Leerdoel Jaar 1.pdf' download>Leerdoel</a><br><a href='files/leerdoelen/Leerdoel Jaar 1 Bewijs en Reflectie.pdf' download>Bewijs en Reflectie</a></div>" +

      "<script>$('#screenshotsTTleft').click(function() {func_screenshots('triptracker', 'left'); return false}); $('#screenshotsTTright').click(function() {func_screenshots('triptracker', 'right'); return false}); </script>"

      $(".projectsdisplay").html(right);

      return false
    });

    $(".3").click(function() {
      

        var right = "<div class='projectstop'><h2>Dimension Hopper</h2>Gemaakt met 4 andere studenten.<br>Een 4D game waarbij je een grot verkent door van dimensies te veranderen.<br>Je begint met het ontmoeten van Hamster Jesus, die je dan door de tutorial begeleidt.<br>Na het einde van de tutorial kan je dan beginnen met het verkennen van de grot door van dimensies te verwisselen en je grappling hook.<br>Ook kom je enemies tegen die je kan verslaan door je destruction gun te gebruiken.<br><br>Hieronder is een demonstratie video over de applicatie en nog eventuele screenshots van de applicatie.</div>" +

            "<div class='projectsbottom'><h3>Demonstratie Video</h3><iframe width='320' height='180' src='https://www.youtube.com/embed/JxL-33djMpY' allowfullscreen='allowfullscreen' mozallowfullscreen='mozallowfullscreen' msallowfullscreen='msallowfullscreen' oallowfullscreen='oallowfullscreen' webkitallowfullscreen='webkitallowfullscreen'></iframe><br>" +
            "<h3>Screenshots</h3><a id='screenshotsDHleft' href=''><img src='img/arrow left.png' alt='Arrow Left' style='max-width:15%; margin: 0% 0% 12% 0%'; position: fixed; top: 50%'></a><img id='screenshots' src='img/dimensionhopper/screenshot1.png' alt='screenshot 1' style='max-width:64%; margin: 0% 3% 0% 3%'><a id='screenshotsDHright' href=''><img src='img/arrow right.png' alt='Arrow Right' style='max-width:15%; margin: 0% 0% 12% 0%'; position: fixed; top: 50%'></a><br><br>" +
            "<b>Game download</b><br><a href='files/Dimension Hopper.zip' download>download</a></div>" +

        "<script>$('#screenshotsDHleft').click(function() {func_screenshots('dimensionhopper', 'left'); return false}); $('#screenshotsDHright').click(function() {func_screenshots('dimensionhopper', 'right'); return false}); </script>"

        $(".projectsdisplay").html(right);

        return false
    });

    $(".4").click(function() {
      

        var right = "<div class='projectstop'><h2>EmployAI</h2>Gemaakt met 4 andere studenten. Het eindproduct is een proof of concept.<br></div>" +
            "<div class='projectsbottom'><b>Application download</b><br>Still in development.</div>"

      $(".projectsdisplay").html(right);

      return false
    });

    $(".5").click(function() {
      

      var right = 5      

      $(".projectsdisplay").html(right);

      return false
    });


  });

