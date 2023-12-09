import header from "../../components/header.js";
import navbar from "../../components/navbar.js";
import footer from "../../components/footer.js";

document.addEventListener("DOMContentLoaded", function (){
    
    // injecting header, navbar, and footer components into every pages dinamically
    header("../../logo/fav.ico");
    navbar();
    footer();
});