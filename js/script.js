/* Login script */
Parse.initialize("YgscJuPF5n0Tab0kShVye4KdCKQZx8E3yzdC8804", "o5kLLsJQTT4Xc5yR4FlQHngF31txDtfXDnTREq1C");

function logIn(){
     var username = document.getElementById('1').value;
     var password = document.getElementById('2').value;
     Parse.User.logIn(username, password,
    {
        success: function(user) 
        {
           location.href='inspire.html';
        },
        error: function(user, error) 
        {
            alert("Incorrect passowrd. Please try again.");
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
/* End of signup script */
function loggedIn(){
    var currentUser = Parse.User.current();
    if(currentUser){

    }
    else{

    }
}
