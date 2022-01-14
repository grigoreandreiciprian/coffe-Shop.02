



function createStanga(obj){

    let card=document.createElement("div")

    card.classList.add("cardS")

    card.innerHTML=`
    
        <div class="text">
                <h2>${obj.name}</h2>
                <p>${obj.descriere}</p>
        </div>
        <i class=${obj.image}></i>
    `

    return card;
}

function createDreapta(obj){

    let card=document.createElement("div")

    card.classList.add("cardD")

    card.innerHTML=`
    
    <div class="text">
                <h2>${obj.name}</h2>
                <p>${obj.descriere}</p>
        </div>
        <i class=${obj.image}></i>
    
    `

    return card
}



function atasareStanga(arr){

    let stanga=document.querySelector(".stanga");
     
    stanga.innerHTML="";

    for(let i=0;i<arr.length;i++){

        let card=createStanga(arr[i]);

        // console.log("merge")

        stanga.appendChild(card)
    }
}


function atasareDreapta(arr){
    let dreapta=document.querySelector(".dreapta")

    dreapta.innerHTML=``;

    for(let i=0;i<arr.length;i++){

        let card=createDreapta(arr[i]);

        dreapta.appendChild(card);
    }
}



function createMenuCard(obj){
    let card=document.createElement("div")

    card.classList.add("menuCard")

    card.innerHTML=`
    
               <img src="${obj.url}">

                <div class="menuText">
                    <h1>${obj.name}</h1>
                    <p>${obj.description}</p>
                </div>
                 
                <div class="price">
                    <p>${obj.price}</p>
                </div>

    `
   return card
 
}


function atasareMeniu(arr){
    
    let menuCards=document.querySelector(".menuCards")

    menuCards.innerHTML="";

    for(let i=0;i<arr.length;i++){

        let card = createMenuCard(arr[i]);

        menuCards.appendChild(card)
    }
}


function butoane(nr){

    let buttons=document.querySelector(".buttons")

    buttons.innerHTML="";

    for(let i=1;i<=nr;i++){

        let button=document.createElement("button")

        button.classList.add("btn");

        button.textContent=i;

        buttons.appendChild(button)
        
    }
}

function pagini(pagina,elemente,arr){

    let v=[]

    for(let i=(pagina-1)*elemente; i<arr.length && i<pagina*elemente;i++){

        v.push(arr[i])
    }

    return v
}


function paginare(pagina,arr){

    let btn=document.querySelector(".btn")

    let total=1;

    if(window.innerWidth<720){

        cards=pagini(pagina,4,arr)

        total=Math.floor(arr.length/4)+1;
    }else{
        cards=pagini(pagina,6,arr)
        total=Math.floor(arr.length/6)+1;
    }


    butoane(total)
    atasareMeniu(cards)
}



function createReview(obj){

    let card=document.createElement("div")
    
    card.classList.add("Reviewtext")

    card.innerHTML=`
    
    <h1>What our clients say</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            <img src="${obj.url}">
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>

            <p>${obj.review}</p>
            <h2>${obj.name}</h2>
    `

    return card
}



function position(nume){

    for(let i=0;i<reviews.length;i++){
         
        if(reviews[i].name==nume){
            return i;
        }
    }
}


function atasareReview(arr){


    let Reviewtext=document.querySelector(".Reviewtext")

    Reviewtext.innerHTML=""

    let review=createReview(arr[0])

    Reviewtext.appendChild(review)
}






let review=document.querySelector(".review")

review.addEventListener('click', (e) =>{

    let obj=e.target;

    let Reviewtext=document.querySelector(".Reviewtext")

     
    if(obj.classList.contains("leftA")){


        let parent= obj.parentNode.parentNode;

        let parent2=parent.children[1];

        let parent3=parent2.children[0];
    
        nume=parent3.children[5].textContent;

        let poz=position(nume);

        review=createReview(reviews[poz-1])

        Reviewtext.innerHTML="";

        Reviewtext.appendChild(review)

    }else if(obj.classList.contains("rightA")){

        let parent= obj.parentNode.parentNode;

        let parent2=parent.children[1];

        let parent3=parent2.children[0];
    
        nume=parent3.children[5].textContent;

        let poz=position(nume);

        review=createReview(reviews[poz+1])

        Reviewtext.innerHTML="";

        Reviewtext.appendChild(review)

    }

   
    

})



let monthlyCanvas=document.querySelector(".monthly-chart");


let monthlyData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        data:[40,50,60,70,75,80,90,90,100,70,60,75],
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };
  
  


let monthlyOptions = {
    plugins:{
    aspectRatio: 2.5,
    animation: {
      duration: 0,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    }
  };


  let mothlyChart=new Chart(monthlyCanvas,{
      type:"line",
      data:monthlyData,
      options:monthlyOptions,
  });


  let salesCanvas=document.querySelector(".sales-chart")


  let salesData={
      labels:[
      "Cappucino",
      "Expresso",
      "Chai Tea",
      "Latte",
      "Mocachino",
      ],

      datasets: [
          {
             label: "Best products",
             data:[60,50,40,30,20],
             backgroundColor:"rgb(46, 139, 87)",
             borderColor: "rgb(46, 139, 87)",
             borderWidth:1,
          }
      ]
  };


  let salesChart=new Chart(salesCanvas,{
      type:"bar",
      data:salesData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
  })




