import {fruits} from "./fruits.js";
const list = document.getElementById("fruit-list");

    fruits.sort((a, b) => a.name.localeCompare(b.name));
    fruits.forEach(fruit => {
        const item = document.createElement("li");
        item.className = "fruit-item";
        
        item.innerHTML = `
        
        <a href="index2.html?fruit=${fruit.name}">
        <img class="imageClass" src=${fruit.image}>
        <h3 class="text">${fruit.name}</h3>
        </a>
        
        `;
        
        list.appendChild(item);
    })
