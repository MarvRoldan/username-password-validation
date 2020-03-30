// -- Regex cheat sheet: https://www.rexegg.com/regex-quickstart.html --
const patterns = {
    username: /^[\w]{5,}$/i,
    password: /^[\w!@#\$%\^&\*]{8,}/i
};
const inputs = document.querySelectorAll( "input" );

// -- Listens for user inputs --
inputs.forEach(( input ) => {
    input.addEventListener( "keyup", ( e ) => {
        validation( e.target, patterns[ e.target.attributes.name.value ] )
    });
});

// -- Validates user inputs and store data --
validation = (userinputs, regex) => {
    const userName = document.getElementById( "userName" );
    const password = document.getElementById( "password" );
    const signUpButton = document.getElementById ( "signUpButton" ); 

   // -- .test() method: https://www.w3resource.com/javascript/object-property-method/regexp-test.php --
   if( regex.test(userinputs.value) ){
       userinputs.className = "true";

       signUpButton.onclick = () => {
        const user = userName.value;
        const pass = password.value;
        
        // -- LocaStorage: https://stackoverflow.com/questions/17087636/how-to-save-data-from-a-form-with-html5-local-storage --
        localStorage.setItem(user, pass);
        };

   } else {
       userinputs.className = "false";
   }
};