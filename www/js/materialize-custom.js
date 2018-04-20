$(document).ready(function(){
	$('.parallax').parallax();
	$(".button-collapse").sideNav();
	$('.collapsible').collapsible();
	 $('.tabs').tabs();
	 $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      //startingTop:'2%', // Starting top style attribute
	  startingTop:'4%',
      endingTop: '2%'
    });
	$('select').material_select();
  });