atasareStanga(stanga)
atasareDreapta(dreapta)
paginare(1,products)

let last=1

let buttons=document.querySelector(".buttons")

window.addEventListener('resize',()=>{

    paginare(1,products);

    // console.log(window.innerWidth);

})



buttons.addEventListener('click', (e) =>{

    let obj=e.target;

    if(obj.tagName=="BUTTON"){

        last=obj.textContent;

        paginare(last,products);
    }
    
})


let search=document.getElementById("searchP")

search.addEventListener("input", ()=>{

    let searchItem=search.value.toLowerCase()

    let cards=[];


    if(searchItem){

        for(let e of products){

            let name=e.name.toLocaleLowerCase()

            if(name.includes(searchItem)){
                cards.push(e)
            }

            atasareMeniu(cards)
        }
    }else{
        paginare(1,products)
    }
})


atasareReview(reviews)