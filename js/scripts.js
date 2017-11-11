$(document).ready(function() {

  function hideAll() {
      $('#shutupanddancetext').hide();
      $('#kamikazetext').hide();
      $('#onefoottext').hide();
      $('#headphonestext').hide();
    }

  hideAll();

// functions to slideToggle song title on click
  $('.albumcover').click(function() {

  hideAll();

   switch ($(this).attr("id")) {
     case "talkingishardpic":
       $('#shutupanddancetext').slideToggle();
       break;
     case "whatifnothingpic":
       $('#kamikazetext').slideToggle();
       break;
     case "onefootpic":
       $('#onefoottext').slideToggle();
       break;
     case "headphonespic":
       $('#headphonestext').slideToggle();
       break;
   }
 });
// end of function to show song title on click



// functions to show correct audio on click
function hideAllsongs() {
    $('#shutupanddanceaudio').hide();
    $('#kamikazeaudio').hide();
    $('#onefootaudio').hide();
    $('#headphonesaudio').hide();
  }
hideAllsongs();

$('.albumcover').click(function() {

hideAllsongs();

$("audio").each(function() {
    this.pause();
    this.currentTime = 0;
});


 switch ($(this).attr("id")) {
   case "talkingishardpic":
     $('#shutupanddanceaudio').show();
     break;
   case "whatifnothingpic":
     $('#kamikazeaudio').show();
     break;
   case "onefootpic":
     $('#onefootaudio').show();
     break;
   case "headphonespic":
     $('#headphonesaudio').show();
     break;
 }
});









});
