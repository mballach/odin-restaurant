import gummyBearImage from "./images/gummy-bear.jpg";
import mmImage from "./images/mm.jpg"
import jellybeanImage from "./images/jellybean.jpg"
import candyCornImage from "./images/candy-corn.jpg"

function candies(){
    const content = document.getElementById('content')

    /* header card */
    let mainBody = document.createElement('div');
    mainBody.setAttribute("class", "main-body")

    let headerCard = document.createElement('div');
    headerCard.setAttribute("class","card")

    let header = document.createElement('h1');
    header.innerText="Car's Candy Selection";

    let headerText = document.createElement("p")

    headerText.innerText = "Please review our candy selection below."

    headerCard.appendChild(header);
    headerCard.appendChild(headerText)

    mainBody.appendChild(headerCard)

    /* candy card 1 */

    let candyDisplay = document.createElement('div');
    candyDisplay.setAttribute('class',"candy-display-wrapper")

    let c1 = document.createElement('div');
    c1.setAttribute('class','card candy-wrapper')

    let c2 = document.createElement('div');
    c2.setAttribute('class','card candy-wrapper')

    let c3 = document.createElement('div');
    c3.setAttribute('class','card candy-wrapper')

    let c4 = document.createElement('div');
    c4.setAttribute('class','card candy-wrapper')

    let img1 = document.createElement('img')
    img1.setAttribute("class","small-image-box")
    img1.src=jellybeanImage;
    img1.setAttribute("alt","jelly beans")

    let img2 = document.createElement('img')
    img2.setAttribute("class","small-image-box")
    img2.src=gummyBearImage
    img2.setAttribute("alt","gummy bears")

    let img3 = document.createElement('img')
    img3.setAttribute("class","small-image-box")
    img3.src=candyCornImage;
    img3.setAttribute("alt","candy corn")

    let img4 = document.createElement('img')
    img4.setAttribute("class","small-image-box")
    img4.src=mmImage;
    img4.setAttribute("alt","m&m's")

    c1.appendChild(img1)
    c2.appendChild(img2)
    c3.appendChild(img3)
    c4.appendChild(img4)

    let candy1 = document.createElement("div")
    candy1.setAttribute("class",'candy-info')
    let candy1title = document.createElement('div')
    candy1title.setAttribute('class','candy-title')
    candy1title.innerText="Jelly Beans!"
    let candy1desc = document.createElement('div')
    candy1desc.setAttribute('class','candy-desc')
    candy1desc.innerText="One of the finer delicacies"
    candy1.appendChild(candy1title)
    candy1.appendChild(candy1desc)
    c1.appendChild(candy1)

    let candy2 = document.createElement("div")
    candy2.setAttribute("class",'candy-info')
    let candy2title = document.createElement('div')
    candy2title.setAttribute('class','candy-title')
    candy2title.innerText="Gummy Bears"
    let candy2desc = document.createElement('div')
    candy2desc.setAttribute('class','candy-desc')
    candy2desc.innerText="An ursine delight"
    candy2.appendChild(candy2title)
    candy2.appendChild(candy2desc)
    c2.appendChild(candy2)

    let candy3 = document.createElement("div")
    candy3.setAttribute("class",'candy-info')
    let candy3title = document.createElement('div')
    candy3title.setAttribute('class','candy-title')
    candy3title.innerText="Candy Corn!"
    let candy3desc = document.createElement('div')
    candy3desc.setAttribute('class','candy-desc')
    candy3desc.innerText="Admittedly, a contentious one!"
    candy3.appendChild(candy3title)
    candy3.appendChild(candy3desc)
    c3.appendChild(candy3)

    let candy4 = document.createElement("div")
    candy4.setAttribute("class",'candy-info')
    let candy4title = document.createElement('div')
    candy4title.setAttribute('class','candy-title')
    candy4title.innerText="M&M's!"
    let candy4desc = document.createElement('div')
    candy4desc.setAttribute('class','candy-desc')
    candy4desc.innerText="A classic!"
    candy4.appendChild(candy4title)
    candy4.appendChild(candy4desc)
    c4.appendChild(candy4)

    candyDisplay.appendChild(c1);
    candyDisplay.appendChild(c2);
    candyDisplay.appendChild(c3);
    candyDisplay.appendChild(c4);
    
    mainBody.appendChild(candyDisplay)

    content.appendChild(mainBody)
}

export {candies}