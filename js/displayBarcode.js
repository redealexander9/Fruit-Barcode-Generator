const params = new URLSearchParams(window.location.search);
const fruitName = params.get("fruit");
import {fruits} from "./fruits.js";

const title = document.getElementById("title");
title.innerHTML = fruitName;
const img = document.getElementById("image");
img.src = getImageSource(fruitName);

function getImageSource(name){
    const fruit = fruits.find(f => f.name === name);
    generateBarcode(fruit);
    return  fruit ? fruit.image : null;
}

function generateBarcode(fruit){
    let fullBarcode = "00000000" + fruit.barcode;
    JsBarcode("#barcode", fullBarcode, {
        format: "ean13"
    });
}

