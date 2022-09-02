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
// document.getElementById('total').innerHTML ="Shopping Bag Total : $" +sum


let buttonsDelete = document.getElementsByClassName('fa-trash')

for (let X of buttonsDelete){
    X.addEventListener('click' ,function(){
        X.parentNode.remove();
        sum()
    })

}

let thumbSup = document.querySelectorAll('.fa-thumbs-up');
for(let thumbSup1 of thumbSup){
    thumbSup1.addEventListener('click' ,function(){
        thumbSup1.classList.toggle('red')
    })
}

let bottonBuy= document.getElementsByClassName('btn3');

for(let btnBuy of bottonBuy){
    btnBuy.addEventListener('click' ,function(){
        alert("we will call you soon")
    })
}