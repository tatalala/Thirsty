/* Login script */
Parse.initialize("YgscJuPF5n0Tab0kShVye4KdCKQZx8E3yzdC8804", "o5kLLsJQTT4Xc5yR4FlQHngF31txDtfXDnTREq1C");

function logIn(){
     var username = document.getElementById('1').value;
     var password = document.getElementById('2').value;
     Parse.User.logIn(username, password,
    {
        success: function(user) 
        {
           location.href='user_profile.html';
        },
        error: function(user, error) 
        {
            alert("Incorrect password. Please try again.");
        }
    });
};
/* End of login script */

/* Signup script */
function signUp(){
    var user = new Parse.User();
    user.set("username", document.getElementById('a').value);
    user.set("password", document.getElementById('b').value);
    user.set("email", document.getElementById('c').value);

    user.signUp(null,
    {
        success: function(user) 
        {
            location.href = 'inspire.html';
        },
        error: function(user, error) 
        {
            alert("Error: " + error.code + " " + error.message);
        }
    });
};

$(document).ready(function(){
    // $("#updateInfo").submit(function(e){
    //       e.preventDefault();
    //       updateProf();

    // });
    // retrieveUserInfo();

    //updateProf();  
    retrieveUserInfo();
  })

  function updateProf(){

    var User = Parse.Object.extend("User");
    var currentUser = Parse.User.current();
    var query= new Parse.Query(User);
    var currentUserID = currentUser.id;

    var email = $("#email").val();
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var school = $("#school").val();
    var pw = $("#pw").val();
    var grade = $("#grade").val();
    var location = $("#location").val();

    query.get(currentUserID, {
        success: function(update){

            update.set("email", email);
            update.set("fname", fname);
            update.set("lname", lname);
            update.set("school", school);
            update.set("password", pw);
            update.set("grade", grade);
            update.set("location", location);
            update.save();
           
        },
        error: function(user, error){
            console.log(error.message);
        }
    });
}

function retrieveUserInfo(){
    var User = Parse.Object.extend("User");
   
    var currentUser = Parse.User.current();
    var query= new Parse.Query(User);
    var currentUserID = currentUser.id;
    // alert(currentUserID);
    query.get(currentUserID, {
        success: function(retrieve){
            
            var rFname = retrieve.get("fname");
            // alert(rFname);
            var fnameField = document.getElementById('fnameID');
            fnameField.innerHTML = rFname;
            
           
        },
        error: function(query, error){
            console.log(error.message);
            // alert("fucked up");
        }
    });
}
