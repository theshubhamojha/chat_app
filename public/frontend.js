var chatapp = angular.module('chatapp', []);
chatapp.controller('AppController', function($scope){

	

});



function readonly() {


  var hand = document.getElementById("handle");
  var contentwrap = document.getElementById("contentwrap");
  var initialise = document.getElementById("initialise");
  if(hand.value)
  {

    
    contentwrap.style.display = 'block';
    initialise.style.display = 'none';
    
   alert('Sucessfully joined the chat');
  }
  else
  {
  	alert("Please enter username before clicking on Join button");
  }

  var jo = document.getElementById("join");
  if(hand.value && jo.value=="join")
  {

  	jo.value="leave";
  }

}




