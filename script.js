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

    //items prices
    let prix1 = Number(document.getElementById("prix1").textContent)
    let prix2 = Number(document.getElementById("prix2").textContent)
    let prix3 = Number(document.getElementById("prix3").textContent)
    let prix4 = Number(document.getElementById("prix4").textContent)
    let prix5 = Number(document.getElementById("prix5").textContent)
    let prix6 = Number(document.getElementById("prix6").textContent)
    let prix7 = Number(document.getElementById("prix7").textContent)
    let prix8 = Number(document.getElementById("prix8").textContent)
    let prix9 = Number(document.getElementById("prix9").textContent)
    let prix10 = Number(document.getElementById("prix10").textContent)
    let prix11= Number(document.getElementById("prix11").textContent)
    let prix12= Number(document.getElementById("prix12").textContent)
    //end items prices


    //cards
    let panier1 = document.querySelector(".panier1")
    let card_image1 = document.querySelector("#cardImg1")
    let panier2 = document.querySelector(".panier2")
    let card_image2 = document.querySelector("#cardImg2")
    let panier3 = document.querySelector(".panier3")
    let card_image3 = document.querySelector("#cardImg3")
    let panier4 = document.querySelector(".panier4")
    let card_image4 = document.querySelector("#cardImg4")
    let panier5 = document.querySelector(".panier5")
    let card_image5 = document.querySelector("#cardImg5")
    let panier6 = document.querySelector(".panier6")
    let card_image6 = document.querySelector("#cardImg6")
    let panier7 = document.querySelector(".panier7")
    let card_image7 = document.querySelector("#cardImg7")
    let panier8 = document.querySelector(".panier8")
    let card_image8 = document.querySelector("#cardImg8")
    let panier9 = document.querySelector(".panier9")
    let card_image9 = document.querySelector("#cardImg9")
    let panier10 = document.querySelector(".panier10")
    let card_image10 = document.querySelector("#cardImg10")
    let panier11 = document.querySelector(".panier11")
    let card_image11 = document.querySelector("#cardImg11")
    let panier12 = document.querySelector(".panier12")
    let card_image12 = document.querySelector("#cardImg12")
    //end cards
    let paniers =[
        panier1,
        panier2,
        panier3,
        panier4,
        panier5,
        panier6,
        panier7,
        panier8,
        panier9,
        panier10,
        panier11,
        panier12,
    ]

    //variables
    let total = 7;
    let items = listCart.children;

    let i =0

    let imgCarre1 = document.getElementById("imgCarre1")
    let carre = document.getElementById("carre");
    let imgCarre = document.getElementById("imgCarre");
    
    imgCarre1.addEventListener("mouseover", () => {
        carre.style.transform = 'translate(-20px, -20px )'
        carre.style.transition = 'all 1s ease'
    })
    imgCarre1.addEventListener("mouseleave", () => {
        carre.style.transform = 'translate(0, 0)'
        carre.style.transition = 'all 1s ease'
    })

    function scaleAndCart(el1, el2){
        el1.addEventListener("mouseover", () => {
        el1.style.transform = 'scale(1.1 )'
        el1.style.transition = 'all 500ms ease'
        el2.style.transform= 'translate(-50px, -36px)'
    })
    el1.addEventListener("mouseleave", () => {
        el1.style.transform = 'scale(1 )'
        el1.style.transition = 'all 500ms ease'
        el2.style.transform= 'translate(0px, 0px)'
    })


    el2.addEventListener("mouseover", () => {
        el1.style.transform = 'scale(1.1 )'
        el1.style.transition = 'all 500ms ease'
        el2.style.transform= 'translate(-50px, -36px)'
    })
    el2.addEventListener("mouseleave", () => {
        el1.style.transform = 'scale(1 )'
        el1.style.transition = 'all 500ms ease'
        el2.style.transform= 'translate(0px, 0px)'
    })

    }

    scaleAndCart(card_image1, panier1)
    scaleAndCart(card_image2, panier2)
    scaleAndCart(card_image3, panier3)
    scaleAndCart(card_image4, panier4)
    scaleAndCart(card_image5, panier5)
    scaleAndCart(card_image6, panier6)
    scaleAndCart(card_image7, panier7)
    scaleAndCart(card_image8, panier8)
    scaleAndCart(card_image9, panier9)
    scaleAndCart(card_image10, panier10)
    scaleAndCart(card_image11, panier11)
    scaleAndCart(card_image12, panier12)

    function creeElement(item){
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


        const nomC =document.createElement('span');
        nomC.setAttribute('id', 'nom');
        nomC.innerHTML = `${item.nom}`

        const prixC = document.createElement('span');
        prixC.setAttribute('id','prix')
        prixC.innerHTML = `$${item.prix}`

        const cartBuyTrash = document.createElement('div');
        cartBuyTrash.setAttribute('class', 'cartBuyTrash');

        const poubelle = document.createElement('span');
        poubelle.setAttribute('class', 'material-icons');
        poubelle.textContent = "delete";
        poubelle.classList.add('poubelle')
        poubelle.addEventListener('click', ()=>{
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
        i ++;

    }
    let commande = document.querySelector(".commande")


    
    

        class elementAupanier{
        constructor(img, nom, prix){
            this.image = img,
            this.nom = nom,
            this.prix =prix,
            this.class = `commande${i}`
        }

        

        effacer(){
            if (this.class == document.querySelector(`.${this.class}`).classList[2]){
                listCart.removeChild(document.querySelector(`.${this.class}`));
                buttonItemNumber.innerHTML = items.length;
            }
            total -= Number(this.prix)
            buttonTotal.innerHTML = total
            cartTotal.innerHTML = total
            
        }
    }

    function ajouter(el){
        for (let i=0; i<el.length; i++){
            el[i].addEventListener('click', ()=>{
                let imgA = ((el[i].parentElement).firstElementChild).firstElementChild.src;
                let nameA = (el[i].parentElement).children[1].firstElementChild.textContent
                let prixA = (el[i].parentElement).children[1].lastElementChild.childNodes[1].textContent
               const elment =  new elementAupanier(imgA, nameA, prixA);
               creeElement(elment);
               buttonItemNumber.innerHTML = items.length;
               Number(prixA)
               console.log( (prixA))

               total += Number(prixA)
                buttonTotal.innerHTML = total
                cartTotal.innerHTML = total;
               
            })
        }
            
        
    }
    console.log(items.length)
    buttonItemNumber.innerHTML = items.length;

    clearCart.addEventListener("click", ()=>{
        for (let i = 0; i<items.length; i++){
            listCart.removeChild(items[i])
        }
        total = 0
        buttonTotal.innerHTML = total
        cartTotal.innerHTML = total
        buttonItemNumber.innerHTML = items.length;
    })

    cartButton.addEventListener("click", ()=>{
        cart.classList.toggle("pousser")
    })
    

    for (let i = 0; i< paniers.length; i++){
        paniers[i].addEventListener("click", ()=>{
            added.style.transform =" translateY(50px)"
            // 
            
            setTimeout(() => {
                added.style.transform =" translateY(-50px)" 
            }, 800);
            
           
        })
        
         
        
    }

    

    

    ajouter(paniers);
    ajouter([panier1])
    console.log(panier1.parentElement.children[1].lastElementChild.childNodes[1].textContent)
    
   

    


    