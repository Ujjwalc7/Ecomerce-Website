// importing all the components from the component folder
import header from "../../components/header.js";
import navbar from "../../components/navbar.js";
import footer from "../../components/footer.js";

// DOMContentLoaded event listener is fired after the html document has completely loaded
document.addEventListener("DOMContentLoaded", function (){
// applying an event listener to the form and if the input from the user matches
// usernamr: admin@admin.com and password: 123456 the display an alert message
    const form = document.getElementById('login-form');
    form.addEventListener(
        'submit', (e)=>{
            e.preventDefault();
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            if(email === 'admin@admin.com' && password === '123456'){
                alert('Login successful');
            }else{
                alert('Incorrect email or password');
            }
        }
    )

// injecting header, navbar, and footer components into every pages dinamically
header("../../logo/fav.ico");
navbar();
footer();
});