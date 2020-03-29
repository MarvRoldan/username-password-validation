const patterns = {
    username: /^[a-z/d]{5,}$/i
};

const inputs = document.querySelectorAll( 'input' );

inputs.forEach(( input ) => {
    input.addEventListener( 'keyup', ( e ) => {
        validation( e.target, patterns[ e.target.attributes.name.value ] )

    });
});

validation = (userinputs, regex) => {
   if( regex.test(userinputs.value) ){
       userinputs.className = 'true';
   } else {
       userinputs.className = 'false';
   }
}