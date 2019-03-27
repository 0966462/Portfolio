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
      

      var right = "<div class='projectstop'><h2>Trip Tracker</h2></div>" +
      "<div class='projectsbottom'><h4>Interviewtechnieken</h4>" +
      "Ik had mijn zus(niet anoniem) geïnterviewd met deze vragenlijst die ik samen met mijn groepsleden heb gemaakt.<br><br><img src='img/trip tracker/interview vragenlijst.png' alt='Interview Vragenlijst' style='max-width:100%'></div>" +
      "<div class='projectsbottom'><h4>Persona's</h4>" +
      "Door middel van de interviews hebben we een persona gemaakt voor onze app.<br>Iedereen had eerst zijn eigen persona gemaakt(mijn persona is hieronder(incompleet)), daarna werd de beste uitgekozen(Ook hieronder).<br><h5>Eigen Persona<img src='img/trip tracker/eigen persona.png' alt='Eigen Persona' style='max-width:100%'></h5><h5>Gekozen Persona<img src='img/trip tracker/persona.png' alt='Gekozen Persona' style='max-width:100%'></h5></div>" +
      "<div class='projectsbottom'><h4>Brainstormtechnieken</h4>" +
      "Ik en mijn teamleden hadden afgesproken om onze eigen design te verbeteren met behulp van de brainstormtechniek Wisselstorming.<br>Hierbij had ik mijn eigen documentatie gemaakt voor de brainstormtechniek.<h5><img src='img/trip tracker/wisselstorming.png' alt='Wisselstorming' style='max-width:100%'></h5>Door middel van deze documentatie had ik mijn eigen design aangepast.<br>Ik had de kleur veranderd naar een donkere groen, omdat de text anders slecht leesbaar was.<br>Om gemakkelijk naar de volgende memory te gaan in de memory displayer, had ik de memory displayer scrollable gemaakt.<br>Zodat je niet terug hoeft te gaan om naar de volgende memory te gaan.<br>Ik had ook een nieuwe page/activity gemaakt genaamd Pick Location, waarbij je de location kan kiezen bij Create Memory en Edit Memory.<h5><img src='img/trip tracker/design 2.0.png' alt='Design' style='max-width:100%'></h5></div>" +
      "<div class='projectsbottom'><h4>Design</h4>" +
      "Tijdens de sprint review had de product owner mijn mock-up gekozen en de visual design van een teamlid.<h5>Visual Design van teamlid<img src='img/trip tracker/visual design teamlid.png' alt='Visual Design Teamlid' style='max-width:100%'></h5>Hierbij hadden wij 2 de visual design van de mock-up aangepast.<h5>Nieuwe Visual Design<img src='img/trip tracker/design 3.0.png' alt='Nieuwe Visual Design' style='max-width:100%'></h5></div>" +
      "<div class='projectsbottom'><h4>Usability Testing</h4>" +
      "Voor de eerste usability testing hadden wij de User feedback testing gekozen. Hierbij hadden wij een usability test plan opgesteld.<h5><img src='img/trip tracker/usability test plan' alt='image work in progress' style='max-width:100%'></h5>Voor de User feedback testing hadden we een vragenlijst gemaakt voor de geïnterviewde.<h5>Vragenlijst<img src='img/trip tracker/usability testing vragenlijst.png' alt='Usability Testing Vragenlijst' style='max-width:100%'></h5>Nog geen resultaten.</div>"


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

