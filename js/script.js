/* Login script */
Parse.initialize("YgscJuPF5n0Tab0kShVye4KdCKQZx8E3yzdC8804", "o5kLLsJQTT4Xc5yR4FlQHngF31txDtfXDnTREq1C");

function logIn(){
     Parse.User.logIn(document.getElementById('1').value, document.getElementById('2').value,
     {
        success: function(user) 
        {
            location.href = "user_profile.html";
        },
        error: function(user, error) 
        {
            alert("Error: " + error.code + " " + error.message);
        }
     });
};
///* Signup script */
function signUp(){
  var user = new Parse.User();
  var confirmPass = document.getElementById('confirmpass').value;
  var userPass =  document.getElementById('userpass').value;
  if(confirmPass == userPass){
      user.set("username", document.getElementById('a').value);
      user.set("password", userPass);
      user.set("email", document.getElementById('c').value);
      user.signUp(null,{
        success: function(user){
          location.href = 'user_profile.html';
        },
        error: function(user, error){
          alert("Error: " + error.code + " " + error.message);
        }
      });
  }
  else{
      alert("Error: Password does not match");
  }
};

function loggedout(){
				Parse.User.logOut();
				location.href = "inspire.html";
};
function showButton(){
    var currUser = Parse.User.current();
    var admin = currUser.get("superUser");
    if(currUser != null && admin == true){
        $("#addEvent").attr('class',"");
    }
}
function createEvent(){
    var Event = Parse.Object.extend("Event");
    var newEvent = new Event();
    var title = document.getElementById("title").value;
    var address = document.getElementById("address").value;
    var desc = document.getElementById("description").value;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': address},function(result){
        var latitude = result[0].geometry.location.lat();
        var longitude = result[0].geometry.location.lng();
        var point = new Parse.GeoPoint({latitude: latitude, longitude: longitude});
        newEvent.set("title", title);
        newEvent.set("address", address);
        newEvent.set("description", desc);
        newEvent.set("location", point);
        newEvent.save(null, {
            success: function(newEvent){
                alert("Event added.");
                location.href = "events.html";
            },
            error: function(newEvent, error){
                alert("Failed to create event.")
            }
        });
    });
}