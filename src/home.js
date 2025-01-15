import gummyBearImage from "./images/gummy-bear.jpg";
import mmImage from "./images/mm.jpg"
import jellybeanImage from "./images/jellybean.jpg"
import candyCornImage from "./images/candy-corn.jpg"

function home() {
       
    const content = document.getElementById('content')

    let mainBody = document.createElement('div');
    mainBody.setAttribute("class", "main-body")

    let headerCard = document.createElement('div');
    headerCard.setAttribute("class","card")

    let header = document.createElement('h1');
    header.innerText="Car's Candy Shop";

    let headerText = document.createElement("p")

    headerText.innerText = "Welcome to Carolyn's Candy Shop! We have everything you could ever imagine here."

    headerCard.appendChild(header);
    headerCard.appendChild(headerText)

    mainBody.appendChild(headerCard)

    let imageCard = document.createElement('div');
    imageCard.setAttribute('class','card');

    let candyCardText = document.createElement("p")
    candyCardText.innerText = "Please peruse our offerings below!"

    let candyCard = document.createElement('div')
    candyCard.setAttribute("class","card")
    
    let candyGrid = document.createElement('div')
    candyGrid.setAttribute("class","candygrid")

    let img1 = document.createElement('img')
    img1.setAttribute("class","lrg-image-box")
    img1.src=jellybeanImage;
    img1.setAttribute("alt","jelly beans")

    let img2 = document.createElement('img')
    img2.setAttribute("class","lrg-image-box")
    img2.src=gummyBearImage
    img2.setAttribute("alt","gummy bears")

    let img3 = document.createElement('img')
    img3.setAttribute("class","lrg-image-box")
    img3.src=candyCornImage;
    img3.setAttribute("alt","candy corn")

    let img4 = document.createElement('img')
    img4.setAttribute("class","lrg-image-box")
    img4.src=mmImage;
    img4.setAttribute("alt","m&m's")

    candyGrid.appendChild(img1)
    candyGrid.appendChild(img2)
    candyGrid.appendChild(img3)
    candyGrid.appendChild(img4)


    candyCard.appendChild(candyGrid)
    mainBody.appendChild(candyCard)

    content.appendChild(mainBody)

}

export {home}