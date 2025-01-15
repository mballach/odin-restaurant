import "./styles.css";
import {home} from "./home.js"
import {candies} from "./candies.js"
import {contact} from "./contact.js"

const homeButton = document.getElementById('homeButton')
const candiesButton = document.getElementById('candiesButton')
const contactButton = document.getElementById('contactButton')


function clear(){
    const content = document.getElementById('content')
    while(content.firstChild){
        content.removeChild(content.firstChild)
    };

}

homeButton.addEventListener("click", ()=>{
    clear()
    home()
})

candiesButton.addEventListener("click", ()=>{
    clear()
    candies()
})

contactButton.addEventListener("click", ()=>{
    clear()
    contact()
})

home()