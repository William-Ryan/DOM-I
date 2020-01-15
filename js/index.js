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

//Navigation
let navBar = document.querySelector("nav");

const firstContent = document.createElement("a");
firstContent.textContent = "apple";

const lastContent = document.createElement("a");
lastContent.textContent = "banana";





let links = navBar.getElementsByTagName('a');
links[0].textContent = "Services";
links[1].textContent = "Product";
links[2].textContent = "Vision";
links[3].textContent = "Features";
links[4].textContent = "About";
links[5].textContent = "Contact";
navBar.prepend(firstContent);
navBar.append(lastContent);
Array.from(links).forEach((link) => {
  link.style.color = "green";
})




// navBar.forEach( element => {element.style.color = "green"});

//Header
let header = document.querySelector(".cta");

let title = header.querySelector("h1");
title.textContent = "DOM Is Awesome";

let button = header.querySelector("button");
button.textContent = "Get Started";

let codeImg = header.querySelector("#cta-img");
codeImg.src = "img/header-img.png";
codeImg.alt = "Sphere of code";

//Main-Content
let body = document.querySelector(".main-content");

let subTitles = body.getElementsByTagName("h4");
subTitles[0].textContent = "Features";
subTitles[1].textContent = "About";
subTitles[2].textContent = "Services";
subTitles[3].textContent = "Product";
subTitles[4].textContent = "Vision";

Array.from(subTitles).forEach((title) => {
  title.style.backgroundColor = "yellow";
})

let para = body.getElementsByTagName("p");
para[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let middleImg = body.querySelector("#middle-img");
middleImg.src = "img/mid-page-accent.jpg";
middleImg.alt = "Strip of code";

//Contact
let address = document.querySelector(".contact");

let lastTitle = address.getElementsByTagName("h4");
lastTitle[0].textContent = "Contact";

let list = address.getElementsByTagName("p");
list[0].textContent = "123 Way 456 Street Somewhere, USA";
list[1].textContent = "1 (888) 888-8888";
list[2].textContent = "sales@greatidea.io";

//Footer
let foot = document.querySelector("footer");

let copy = foot.getElementsByTagName("p");
copy[0].textContent = "Copyright Great Idea! 2018";