const patterns = {
    username: /^[\w]{5,}$/i,
    password: /^[\w!@#\$%\^&\*]{8,}/
};

const inputs = document.querySelectorAll( 'input' );

inputs.forEach(( input ) => {
    input.addEventListener( 'keyup', ( e ) => {
        validation( e.target, patterns[ e.target.attributes.name.value ] )

    });
});

// Validates user inputs
validation = (userinputs, regex) => {
   if( regex.test(userinputs.value) ){
       userinputs.className = 'true';
   } else {
       userinputs.className = 'false';
   }
}