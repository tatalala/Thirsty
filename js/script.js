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
/* End of signup script */
function loggedIn(){
    var currentUser = Parse.User.current();
    if(currentUser){

    }
    else{

    }
}

/*update user info*/
function updateProf(){

    alert("Hello, I'm here!");
    // update the info
    var currentUser = Parse.User.current();
    currentUser.set("username", document.getElementById('username').value);
    currentUser.set("password", document.getElementById('pw').value);
    currentUser.set("email", document.getElementById('email').value);

    user.updateProf(null,
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

    // Query that same info to populate back on the page
    ParseQuery<ParseObject> query = ParseQuery.getQuery("User");
    query.whereEqualTo("username", "email");
    query.findInBackGround(new GetCallback<ParseObject>(){
        public void done(ParseObject object, ParseException e)
        {
            if(object == null)
            {
                Log.d("score", "the findInBackGround failed");
            }
            else
            {
                Log.d("score", "Retrieved the object");
            }
        }
    });
}
