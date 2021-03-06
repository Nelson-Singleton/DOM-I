const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//title
const title = document.querySelector('title')
title.textContent = 'Great Idea!'

//header, nav, and <a>
const navLinks1 = document.querySelector('a')
const navLinks2 = navLinks1.nextElementSibling
const navLinks3 = navLinks2.nextElementSibling
const navLinks4 = navLinks3.nextElementSibling
const navLinks5 = navLinks4.nextElementSibling
const navLinks6 = navLinks5.nextElementSibling
let navImg = document.querySelector('img')

navLinks1.textContent = 'Services'
navLinks2.textContent = 'Product'
navLinks3.textContent = 'Vision'
navLinks4.textContent = 'Features'
navLinks5.textContent = 'About'
navLinks6.textContent = 'Contact'
navImg.src = "img/logo.png" 

//add nav items
const newNavLink1 = document.createElement('a')  
newNavLink1.textContent = 'Google'                
newNavLink1.href = 'www.google.com'                          
const nav = document.querySelector('nav')    
nav.appendChild(newNavLink1) //add new a to nav bars

const newNavLink2 = document.createElement('a')  
newNavLink2.textContent = 'Bing'                
newNavLink2.href = 'www.bing.com'                          
nav.appendChild(newNavLink2) 

// nav color
let navSelector = document.querySelectorAll('a')
for(let i = 0; i < navSelector.length; i++){
  navSelector[i].style.color = "green"
}

//cta section
let cta = document.querySelector('.cta')
let ctaH1 = cta.querySelector('h1')
let ctaButtonText = cta.querySelector('button')
let ctaImage = cta.querySelector('img')

ctaH1.innerHTML = "Dom <br> Is <br> Awesome"
ctaButtonText.innerText = 'Get Started'

//cta image
let ctaImg = cta.querySelector('img')
ctaImg.src = "img/header-img.png"

//main-content
//top-content
let topContent1 = document.querySelector('.top-content')
let divOneH4 = topContent1.querySelector('.text-content:nth-of-type(1) h4')
let divOneP = topContent1.querySelector('.text-content:nth-of-type(1) p')
divOneH4.textContent = "Features"
divOneP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let topContent2 = document.querySelector('.top-content')
let divTwoH4 = topContent2.querySelector('.text-content:nth-of-type(2) h4')
let divTwoP = topContent2.querySelector('.text-content:nth-of-type(2) p')

divTwoH4.textContent = "About"
divTwoP.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//img

let topImg = document.querySelector('#middle-img')
topImg.src = "img/mid-page-accent.jpg"

//bottom-content
let bottomContent = document.querySelector('.bottom-content')
let botDivOneH4 = bottomContent.querySelector(".text-content:nth-of-type(1) h4")
let botDivOneP = bottomContent.querySelector(".text-content:nth-of-type(1) p")
botDivOneH4.textContent = "Service"
botDivOneP.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let botDivTwoH4 = bottomContent.querySelector(".text-content:nth-of-type(2) h4")
let botDivTwoP = bottomContent.querySelector(".text-content:nth-of-type(2) p")
botDivTwoH4.textContent = "Product"
botDivTwoP.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let botDivThreeH4 = bottomContent.querySelector(".text-content:nth-of-type(3) h4")
let botDivThreeP = bottomContent.querySelector(".text-content:nth-of-type(3) p")
botDivThreeH4.textContent = "Vision"
botDivThreeP.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//contact
let contact = document.querySelector('.contact')
let contactH4 = contact.querySelector('h4')
let contactP = contact.querySelectorAll('p')

contactH4.textContent = "Contact"
contactP[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA"
contactP[1].textContent = "1 (888) 888-8888"
contactP[2].textContent = "sales@greatidea.io"

//footer
let footer = document.querySelector('footer')
footer.textContent = "Copyright Great Idea! 2018"






//lecture notes
/*// USING THE DOM TO EDIT ELEMENTS ON THE PAGE (AND ADD NEW ONES)

// 1- Finding an element on the page and saving a reference to it
//  getElementById, getElementsByTagName, getElementsByClassName
//  querySelector
//  querySelectorAll
const firstCard = document.querySelector('.card:nth-of-type(1)')
const pageHeading = document.querySelector('#logoTitle')
const firstCardTitle = firstCard.querySelector('h2')
const firstCardSubtitle = firstCard.querySelector('h3')
const firstCardText = firstCard.querySelector('p')
const firstCardLink1 = firstCard.querySelector('a')
const firstCardLink2 = firstCardLink1.nextElementSibling
const firstCardImg = firstCard.querySelector('img')
// console.log(pageHeading)
// console.dir(pageHeading)
// console.log(firstCardTitle)

const allLinks = document.querySelectorAll('a')
const allLinksAlt = document.getElementsByTagName('a')

// const theVeryFirsLink = allLinks[0]
// console.log(allLinks)
// console.log(theVeryFirsLink)

allLinks.forEach(link => {
  // console.log(link.textContent)
})

Array.from(allLinksAlt).forEach(l => {
  // console.log(l.textContent)
})

// 2- Changing an element's text content
//  textContent, innerText
pageHeading.textContent = 'Lambda Dog'
pageHeading.innerText = 'Cool Lambda Dog'
firstCardTitle.textContent = 'Cool Dog'
firstCardSubtitle.textContent = 'Rulez'
firstCardText.textContent = 'Puggorino tungg puggorino, waggy wags. thicc wow such tempt. Very jealous pupper doing me a frighten puggorino very taste wow, borkdrive. Smol big ol fluffer pupperino fluffer, waggy wags ruff blep.'
firstCardLink2.textContent = 'Dog Ipsum'


// 3- Changing any property
//  with dot notation
//  setAttribute, getAttribute
firstCardLink1.href = 'https://www.pexels.com/search/dog/'
// firstCardLink2.href='https://doggoipsum.com/'
firstCardLink2.setAttribute('href', 'https://doggoipsum.com/')
// firstCardLink1.className = 'foo bar baz'
// firstCardLink1.setAttribute('class', 'foo bar baz')
firstCardImg.src = 'https://www.pets4homes.co.uk/images/articles/1209/large/understanding-doggy-talk-5280cf8485e99.jpg'


// 4- Changing the style
//  by changing the class names on the element
const header = document.querySelector('header')
header.classList.add('sky')
header.classList.remove('sky')
setInterval(() => {
  header.classList.toggle('sky')
}, 1000)

//  by manipulating inline styles on the element
firstCardText.style.color = 'blue'
firstCardText.style.fontWeight = 'bold'

// 5- Creating new elements and appending them
const blogLink = document.createElement('a') // instantiate the element 
blogLink.textContent = 'Blog'                // tack text content
blogLink.href = '#'                          // tack any other attrs we need
const nav = document.querySelector('nav')    // this is the parent we wish to append the new link to
nav.appendChild(blogLink)                    // appending to the parent (research 'append')

// 6- Removing an existing element and putting it back
blogLink.remove()
nav.append(blogLink)

// 7- Making a copy of the card and appending it to the card group
const secondCard = firstCard.cloneNode(true)
document.querySelector('.card-group').appendChild(secondCard)
*/