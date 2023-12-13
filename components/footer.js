// importing data from footerLinks.js for adding links to footer of the website
import {footerLinks } from "../product-links/footer-links/footerLinks.js";

// creating a fucntion to return elements to the footer-row div and dispalying the
// data of footerLinks to footer of the website
const footer = () => {
    const footer = document.getElementById('footer-row');
    footer.innerHTML = footerLinks.map((item)=>{
        let {id, heading, links, link} = item;
        if(links){
            return (
                `<div class="col" key=${id}>
                    <h5>${heading}</h5>
                    <ul class="links">
                    ${links.map((link)=>`<li key=${link.id}><a href="${link.link}">${link.name}</a></li>`).join('')}
                    </ul>
                </div>`
            )
        }else{
            return (
                `<div class="col" key=${id}>
                    <h5><a href="${link}">${heading}</a></h5>
                </div>`
            )
        }
    }).join('');

    return footer;
}
// exporting the function to get the access of the data in different files
export default footer;
