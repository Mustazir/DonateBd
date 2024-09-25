

function calculate(price, money,parent) {
    const number = /\d/;
    const string = /[a-zA-Z]/;
    if (number.test(money) && string.test(money)) {
        alert('this is not money')
    }
    else if (number.test(money)) {
        const temp=parseInt(price.innerText);
        price.innerText=parseInt(money)+temp;
        const myAccount=document.querySelector('#total-Account');
        myAccount.innerText=myAccount.innerText-money;
        const modal=document.querySelector('#modal')
        modal.classList.remove('hidden')
        const output=document.querySelector('#output')
        const date=new Date()

        const h1=parent.children[0].innerText;
        
        
        let apent=document.createElement('div')
        apent.innerHTML =`<div class="border-[1px] border-zinc-600 p-5 rounded-2xl">
            <h1 class="text-xl font-bold grotesk "> ${money} Taka is ${h1}</h1> 
            <p class=" text-slate-800">Date : ${date.toDateString()}</p>
        </div>`;
        output.prepend(apent)
    }
    else if (string.test(money) || money.trim() === "") {
        alert('this is not money')
    }

}




document.querySelector('#donet-btn').addEventListener('click', function (event) {
    
    const donetion = document.querySelector('#price ')
    const inputField = document.querySelector('#card_text ').value;
    const inputFieldcontainer = document.querySelector('.card-text');
    document.querySelector('#card_text ').value=''
    const parent=event.target.parentElement.parentElement
    calculate(donetion, inputField,parent)
    
})
document.querySelector('#donet-btnF').addEventListener('click', function (event) {
    
    const donetion = document.querySelector('#priceTwo ')
    const inputField = document.querySelector('#card_textFeni ').value;
    document.querySelector('#card_textFeni ').value=''
    const parent=event.target.parentElement.parentElement
    calculate(donetion, inputField,parent)
    
})
document.querySelector('#donet-btnQ').addEventListener('click', function (event) {
    
    const donetion = document.querySelector('#priceThree ')
    const inputField = document.querySelector('#card_textQuota ').value;
    document.querySelector('#card_textQuota ').value=''
    const parent=event.target.parentElement.parentElement
    calculate(donetion, inputField,parent)
    
})


document.querySelector('#donationBtn').addEventListener('click',function (){
    const bg=document.querySelector('#donationBtn')
    bg.classList.add('bg-green-700')
    const abg=document.querySelector('#historyBtn')
    abg.classList.remove('bg-green-700')
    const container= document.querySelector('.card-containerr')
   container.classList.remove('hidden')
   const container2= document.querySelector('.history-containerr')
   container2.classList.add('hidden')
})

document.querySelector('#historyBtn').addEventListener('click',function (){
    const bg=document.querySelector('#donationBtn')
    bg.classList.remove('bg-green-700')
    const abg=document.querySelector('#historyBtn')
    abg.classList.add('bg-green-700')

    const container= document.querySelector('.card-containerr')
    container.classList.add('hidden')
    const container2= document.querySelector('.history-containerr')
    container2.classList.remove('hidden')
    
 
 })

 document.querySelector('#modal button').addEventListener('click',function (){
    const modal=document.querySelector('#modal')
        modal.classList.add('hidden')
})
        



