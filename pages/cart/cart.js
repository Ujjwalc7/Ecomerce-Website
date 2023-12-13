// importing all the components from the component folder
import header from "../../components/header.js";
import navbar from "../../components/navbar.js";
import footer from "../../components/footer.js";

// DOMContentLoaded event listener is fired after the html document has completely loaded
document.addEventListener("DOMContentLoaded", function (){

    let counter = 0;
    let decrease = document.getElementById("decrease")
    let increase = document.getElementById("increase")

    // applying an onclick function to the elements increase and decrease
    //  to increase or decrease the counter
    // and display the number on the screen.
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