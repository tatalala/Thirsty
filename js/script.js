/* Login script */
Parse.initialize("YgscJuPF5n0Tab0kShVye4KdCKQZx8E3yzdC8804", "o5kLLsJQTT4Xc5yR4FlQHngF31txDtfXDnTREq1C");

function closeModal(){
    $("#add-quote").trigger("#reveal:close");
}

$(document).ready(function(){
    $("#updateInfo").submit(function(e){
        e.preventDefault();
        updateProf();
    });

    getInfo();
})

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

function getInfo(){
    var User = Parse.Object.extend("TestPost");
    var query= new Parse.Query(User);

    query.descending("createAt");
    query.limit(1);

    query.find({
        success: function(results){
            $("#fullname").html("");
            var template = Handlebars.compile($("#name-loc").html);

            $(results).each(function(i,e)){
                var q = e.toJSON();
                $("#fullname").append(template(q))
            }
        },

        error:function(error){
            console.log(error.message);
        }
    })   
}

/*update user info*/
function updateProf(){

    var currentUser = Parse.User.current();
    // var User = Parse.Object.extend("User");

    var query= new Parse.Query(currentUser);
    var objectID = currentUser.id;
    
    // var email = $("#email").val();
    var email = document.getElementById("email").value;

    query.get.("S7pP59mEYF", {
        success: function(){
            currentUser.set("email", email);
            currentUser.save();
        },
        error: function(user, error){
            console.log(error.message);
        }
    })
    

    // acl.setRoleWriteAccess(currentUser, true);
    // user.set("email", email);
    // user.setACL(new Parse.ACL(currentUser));

    // user.save(null,{
    //     success: function(){
    //         console.log("success!");
    //         closeModal();
    //     },
    //     error: function(user, error){
    //         console.log(error.message);
    //     }
    // });
}
