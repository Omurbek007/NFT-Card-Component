const wrapper = document.querySelector(".wrapper");
wrapper.style.background = "hsl(217, 54%, 11%)";
wrapper.style.height = "100vh";
wrapper.style.display = "flex";
wrapper.style.fontFamily = "Outfit";
wrapper.style.fontSize = "22px";

wrapper.style.alignItems = "center";
wrapper.style.justifyContent = "center";

const card = document.createElement("div");
card.style.width = "400px";
card.style.background = "hsl(216, 50%, 16%)";
card.style.padding = "1.5rem";
card.style.borderRadius = "0.5rem";

const image = document.createElement("img");
image.src = "images/image-equilibrium.jpg";
image.style.borderRadius = "0.5rem";
image.style.width = "100%";

const heading = document.createElement("h2");
heading.textContent = "Equilibrium #3429";
heading.style.color = "hsl(0, 0%, 100%)";

const paragraph = document.createElement("p");
paragraph.textContent = "Our Equilibrium collection promotes balance and calm.";
paragraph.style.color = "hsl(215, 51%, 70%)";

const priceImg = document.createElement("img");
priceImg.src = "images/icon-ethereum.svg";
const dateImg = document.createElement("img");
dateImg.src = "images/icon-clock.svg";
dateImg.style.marginRight = "5px";
priceImg.style.marginRight = "5px";

const priceSpan = document.createElement("span");
priceSpan.appendChild(priceImg);
priceSpan.appendChild(document.createTextNode("0.041 ETH"));
priceSpan.style.color = "hsl(178, 100%, 50%)";

const dateSpan = document.createElement("span");
dateSpan.style.color = "hsl(215, 51%, 70%)";
dateSpan.style.float = "right";
dateSpan.appendChild(dateImg);
dateSpan.appendChild(document.createTextNode("3 days left"));

const priceBlock = document.createElement("div");
priceBlock.appendChild(priceSpan);
priceBlock.appendChild(dateSpan);

const hLine = document.createElement("hr");
hLine.style.color = "hsl(215, 32%, 27%)";
hLine.style.margin = "2rem 0";
//Athor block
const athPar = document.createElement("p");
const athSpan = document.createElement("span");
athSpan.style.display = "flex";
athSpan.style.alignItems = "center";
const athImg = document.createElement("img");
athImg.src = "images/image-avatar.png";
athImg.style.marginRight = "1.5rem";
athImg.style.width = "3rem";
athImg.style.borderRadius = "100%";
athImg.style.border = "2px solid hsl(0, 0%, 100%)";

athSpan.appendChild(athImg);

let creationOf = document.createElement("span");
creationOf.textContent = "Creation of";
creationOf.style.color = "hsl(215, 51%, 70%)";
creationOf.style.marginRight = ".5rem";

const athName = document.createElement("span");
athName.textContent = "Jules Wyvern";
athName.style.color = "hsl(0, 0%, 100%)";

athSpan.appendChild(creationOf);
athSpan.appendChild(athName);
athPar.appendChild(athSpan);

//Markup goes here

card.appendChild(image);
card.appendChild(heading);
card.appendChild(paragraph);
card.appendChild(priceBlock);
card.appendChild(hLine);
card.appendChild(athPar);

wrapper.appendChild(card);
