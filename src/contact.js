function contact() {
    const content = document.getElementById('content')

    /* header card */
    let mainBody = document.createElement('div');
    mainBody.setAttribute("class", "main-body")

    let headerCard = document.createElement('div');
    headerCard.setAttribute("class","card")

    let header = document.createElement('h1');
    header.innerText="Contact Carolyn!";

    let headerText = document.createElement("p")

    headerText.innerText = "Questions? Reach out to Carolyn's Candy Shop today!"

    headerCard.appendChild(header);
    headerCard.appendChild(headerText)

    mainBody.appendChild(headerCard)

    let phone = document.createElement('div')
    phone.setAttribute('class','card')
    phone.innerText = "Phone: (777) 818-YUMM"

    let email = document.createElement('div')
    email.setAttribute('class','card')
    email.innerText = "Email: car@carcandypalace.yum"

    let address = document.createElement('div')
    address.setAttribute('class','card')
    address.innerText = "888 Tasty Treat Lane, Yonkers, NY 13012"

    mainBody.appendChild(phone)
    mainBody.appendChild(email)
    mainBody.appendChild(address)

    content.appendChild(mainBody)
}

export {contact}