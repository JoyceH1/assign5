// when DOM is loaded
$(document).ready(function () {
  
  //  When update button is clicked
  $("#submit-btn").click(function ( event ) {
    
    // cancel form submission
    event.preventDefault();
    
    //  Get value from input field
    var city = $('#city-type').val();
    
    // if value is empty
    if(!city) { 
      return 
    }
    
    // If value is equal to "NYC" or "New York" or "New York City"
    if(city == "NYC" || city == "New York" || city == "New York City" || city == "nyc"){
      
      // Set body background image to nyc.jpg
      $('body').css('backgroundImage','url(\'images/nyc.jpg\')');
    
    // Else if value is equal to "SF" or "San Francico" or "Bay Area"
    } else if(city == "SF" || city == "San Francisco" || city == "Bay Area"){
      
      // Set body background image to sf.jpg
      $('body').css('backgroundImage','url(\'images/sf.jpg\')');
      
    // Else if value is equal to "LA" or "Los Angeles" or "LAX"  
    } else if(city == "LA" || city == "Los Angeles" || city == "LAX"){
      
      // Set body background image to la.jpg
      $('body').css('backgroundImage','url(\'images/la.jpg\')');
      
    // Else if value is equal to "ATX" or "Austin"      
    } else if(city == "ATX" || city == "Austin"){
      
      // Set body background image to austin.jpg
      $('body').css('backgroundImage','url(\'images/austin.jpg\')');
    
    // Else if value is equal to "SYD" or "Sydney"
    } else if(city == "SYD" || city == "Sydney"){
      
      // Set body background image to sydney.jpg
      $('body').css('backgroundImage','url(\'images/sydney.jpg\')');

      
    // else show an tryagain
    } else {
      //alert('Unknown city');
      // Set body background image to tryagain.jpg
      $('body').css('backgroundImage','url(\'images/tryagain.jpg\')');
    }
    
  });
  
});