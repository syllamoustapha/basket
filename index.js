const btnMoins = document.querySelectorAll(".cart-moins");
const btnPlus = document.querySelectorAll(".cart-plus");
const article = document.querySelectorAll(".ajouter")
 
// ********************Suprimer*************************
const suprimer = document.querySelectorAll(".supprimer");
suprimer.forEach(btn => btn.addEventListener("click", remove));
function remove(e){
    let element=this.parentElement.parentElement.parentElement.parentElement
    element.remove()
}

// ********************btnMoins**********************
btnMoins.forEach(btn => btn.addEventListener("click", decreaseQuantity));

function decreaseQuantity(e){
       
    
    const qty = this.nextElementSibling;
    if   (parseInt(qty.value ) >0)
        {
           
            qty.value = parseInt(qty.value )- 1;
        } 
        let price = this.parentElement.parentElement.nextElementSibling.children[0].value;
        let sousT= parseFloat(qty.value)* parseFloat(price)
        this.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].textContent=sousT
        calcTotal()
}

// ********************btnPlus**********************
btnPlus.forEach(btn => btn.addEventListener("click", augmenteQuantity));

function augmenteQuantity(e){
    const qty = this.previousElementSibling;
    qty.value = parseInt(qty.value )+ 1;
    let price = this.parentElement.parentElement.nextElementSibling.children[0].value;
    let sousT= parseFloat(qty.value)* parseFloat(price)
    this.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].textContent=sousT 
    calcTotal()
   
}
function calcTotal(){
    let tab=[]
    const sousTotal = document.querySelectorAll(".sous-totale");
    sousTotal.forEach(element => tab.push(parseFloat(element.textContent)))
    let total= tab.reduce((acc , curr) => acc + curr);
    const totaux= document.querySelector(".total");
    totaux.innerHTML=total
}

// *********************************ajouté**************************************

let ajouter= document.querySelector(".ajouter");
ajouter.forEach(btn => btn.addEventListener("click", ajouterArticle));

function ajouterArticle(e){
    
}









