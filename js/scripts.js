const patterns = {
    username: /^[a-z/d]{5,}$/i
};

const inputs = document.querySelectorAll( "input" );

inputs.forEach((input) => {
    input.addEventListener( 'keyup', (e) => {
        console.log(e.target.attributes.name.value);

    });
});