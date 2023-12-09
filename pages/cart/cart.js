import header from "../../components/header.js";
import navbar from "../../components/navbar.js";
import footer from "../../components/footer.js";

document.addEventListener("DOMContentLoaded", function (){

    let counter = 0;
    let decrease = document.getElementById("decrease")
    let increase = document.getElementById("increase")

    decrease.onclick = () => {
        if(counter > 0){
            counter--;
            document.getElementById("number").value = counter;
        }
    }
    increase.onclick = () => {
        counter++;
        document.getElementById("number").value = counter;
    }
    
    // injecting header, navbar, and footer components into every pages dinamically
    header("../../logo/fav.ico");
    navbar();
    footer();
});