//show cases
let buttonItemNumber = document.getElementById("butItemNum")
let buttonTotal = document.getElementById("butTotal")
let cartTotal = document.getElementById("total")
let listCart = document.getElementById("listCart");
let clearCart = document.getElementById("clearCart")
let cartButton = document.getElementById("cartButton");
let cart = document.getElementById("cart");
let added = document.getElementById("added");
//end show cases
let card = document.getElementsByClassName("card");



//variables
let total = 0;
let items = listCart.children;
let i = 0

let imgCarre1 = document.getElementById("imgCarre1") // image with square translating
let carre = document.getElementById("carre");
let imgCarre = document.getElementById("imgCarre");

imgCarre1.addEventListener("mouseover", () => {  // image with square translating mouseover event 
    carre.style.transform = 'translate(-20px, -20px )'
    carre.style.transition = 'all 1s ease'
})
imgCarre1.addEventListener("mouseleave", () => {
    carre.style.transform = 'translate(0, 0)'
    carre.style.transition = 'all 1s ease'
})


for (let i = 0; i < card.length; i++) {
    card[i].children[0].children[0].addEventListener("mouseover", () => {
        card[i].children[0].children[0].style.transform = 'scale(1.1 )'
        card[i].children[0].children[0].style.transition = 'all 500ms ease'
        card[i].children[2].style.transform = 'translate(-50px, -36px)'
    })
    card[i].children[0].children[0].addEventListener("mouseleave", () => {
        card[i].children[0].children[0].style.transform = 'scale(1 )'
        card[i].children[0].children[0].style.transition = 'all 500ms ease'
        card[i].children[2].style.transform = 'translate(0px, 0px)'
    })


    card[i].children[2].addEventListener("mouseover", () => {
        card[i].children[0].children[0].style.transform = 'scale(1.1 )'
        card[i].children[0].children[0].style.transition = 'all 500ms ease'
        card[i].children[2].style.transform = 'translate(-50px, -36px)'
    })
    card[i].children[2].addEventListener("mouseleave", () => {
        card[i].children[0].children[0].style.transform = 'scale(1 )'
        card[i].children[0].children[0].style.transition = 'all 500ms ease'
        card[i].children[2].style.transform = 'translate(0px, 0px)'
    })
}

function creeElement(item) {
    const ligne = document.createElement('br');
    const cartBuy = document.createElement('div');
    cartBuy.setAttribute('class', 'valign-wrapper');
    cartBuy.classList.add('cartBuy');
    cartBuy.classList.add(`commande${i}`);

    const cartBuyImgC = document.createElement('div');
    cartBuyImgC.setAttribute('class', 'cartBuyImgC');

    const cartBuyImg = document.createElement('img');
    cartBuyImg.setAttribute('class', 'cartBuyImg');
    cartBuyImg.setAttribute('src', `${item.image}`);

    const cartBuyName = document.createElement('div');
    cartBuyName.setAttribute('class', 'center');
    cartBuyName.classList.add('cartBuyName');


    const nomC = document.createElement('span');
    nomC.setAttribute('id', 'nom');
    nomC.innerHTML = `${item.nom}`

    const prixC = document.createElement('span');
    prixC.setAttribute('id', 'prix')
    prixC.innerHTML = `$${item.prix}`

    const cartBuyTrash = document.createElement('div');
    cartBuyTrash.setAttribute('class', 'cartBuyTrash');

    const poubelle = document.createElement('span');
    poubelle.setAttribute('class', 'material-icons');
    poubelle.textContent = "delete";
    poubelle.classList.add('poubelle')
    poubelle.addEventListener('click', () => {
        item.effacer()
    })

    cartBuyTrash.appendChild(poubelle)
    cartBuyName.appendChild(nomC)
    cartBuyName.appendChild(ligne)
    cartBuyName.appendChild(prixC)
    cartBuyImgC.appendChild(cartBuyImg);

    cartBuy.appendChild(cartBuyImgC)
    cartBuy.appendChild(cartBuyName)
    cartBuy.appendChild(cartBuyTrash);

    listCart.appendChild(cartBuy)
    items.length++;
    i++;

}





class elementAupanier {
    constructor(img, nom, prix) {
        this.image = img,
            this.nom = nom,
            this.prix = prix,
            this.class = `commande${i}`
    }



    effacer() {
        if (this.class == document.querySelector(`.${this.class}`).classList[2]) {
            listCart.removeChild(document.querySelector(`.${this.class}`));
            buttonItemNumber.innerHTML = items.length;
        }
        total -= Number(this.prix)
        buttonTotal.innerHTML = total
        cartTotal.innerHTML = total

    }
}


for (let i = 0; i < card.length; i++) {  //
    card[i].children[2].addEventListener('click', () => {
        let imgA = ((card[i].children[2].parentElement).firstElementChild).firstElementChild.src;
        let nameA = (card[i].children[2].parentElement).children[1].firstElementChild.textContent
        let prixA = (card[i].children[2].parentElement).children[1].lastElementChild.childNodes[1].textContent
        const elment = new elementAupanier(imgA, nameA, prixA);
        creeElement(elment);
        buttonItemNumber.innerHTML = items.length;
        Number(prixA)

        total += Number(prixA)
        buttonTotal.innerHTML = total
        cartTotal.innerHTML = total;

    })
}



buttonItemNumber.innerHTML = items.length; //item number 

// clearCart.addEventListener("click", ()=>{
//     for (let i = 0; i<items.length; i++){
//         listCart.removeChild(items[i])
//     }
//     total = 0
//     buttonTotal.innerHTML = total
//     cartTotal.innerHTML = total
//     buttonItemNumber.innerHTML = items.length;
// })


var sorti = true;
cartButton.addEventListener("click", () => { //cart's button click event
    if (sorti) {
        cart.style.transform = 'scale(1)'
        sorti = !sorti
    } else {
        cart.style.transform = 'scale(0)'
        sorti = !sorti
    }

})



for (let i = 0; i < card.length; i++) {  //product basket appearence and image scaling 
    card[i].children[2].addEventListener("click", () => {
        added.style.transform = " translateY(100px)"
        // 

        setTimeout(() => {
            added.style.transform = " translateY(-50px)"
        }, 800);


    })



}










