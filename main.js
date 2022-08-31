let buttonsPlus = Array.from(document.getElementsByClassName('fa-plus'))
console.log(buttonsPlus)

for (let btnPlus of buttonsPlus){
    btnPlus.addEventListener('click' ,function(){
        btnPlus.nextElementSibling.innerHTML++
        sum()
    })
}

let buttonsMinus = Array.from(document.getElementsByClassName('fa-minus'))
console.log(buttonsMinus)

for (let btnPlus of buttonsMinus){
    btnPlus.addEventListener('click' ,function(){
        btnPlus.previousElementSibling.innerHTML--
        sum()
    })
} 

function sum(){
    let qte = document.querySelectorAll(".qte")
    let price = document.querySelectorAll(".price")
    let sum = 0;
    for(let i = 0 ; i <qte.length ; i++)
    sum +=qte[i].innerHTML * price[i].innerHTML
}
document.getElementById('total').innerHTML ="Shopping Bag Total : $" +sum


let buttonsDelete = document.getElementsByClassName('fa-trash')

for (let buttonsDelete of buttonsDelete){
    buttonsDelete.addEventListener('click' ,function(){
        buttonsDelete.parentNode.remove();
        sum()
    })

}