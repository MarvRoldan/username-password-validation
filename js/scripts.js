// -- Regex cheat sheet: https://www.rexegg.com/regex-quickstart.html --
const patterns = {
    username: /^[\w]{5,}$/i,
    password: /^[\w!@#\$%\^&\*]{8,}/i
};
const inputs = document.querySelectorAll( "input" );
const userName = document.getElementById( "userName" );
const password = document.getElementById( "password" );
const signUpButton = document.getElementById ( "signUpButton" ); 



// -- Listens to user inputs --
inputs.forEach(( input ) => {
    input.addEventListener( "keyup", ( e ) => {
        validation( e.target, patterns[ e.target.attributes.name.value ] )
    });
});

// -- Validates user inputs --
validation = (userinputs, regex) => {
   if( regex.test(userinputs.value) ){
       userinputs.className = "true";
   } else {
       userinputs.className = "false";
   }
};

// -- Local Storage --
signUpButton.onclick = () => {
    const user = userName.value;
    const pass = password.value;

    console.log(user);
    console.log(pass);
};




