

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







