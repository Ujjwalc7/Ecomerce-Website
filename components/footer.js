import {footerLinks } from "../product-links/footer-links/footerLinks.js";


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

export default footer;
