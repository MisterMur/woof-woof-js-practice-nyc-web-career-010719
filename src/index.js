
const url = 'http://localhost:3000/pups'
const dogBar = document.querySelector('#dog-bar')
const dogInfo = document.querySelector('#dog-info')
const filterDiv = document.querySelector('#filter-div')
const goodBoiButton = document.querySelector('#good-dog-filter')
var displayDog;
var goodBois = false;

document.addEventListener('DOMContentLoaded',function(){
  console.log(getAllDogs())

  dogBar.addEventListener('click',function(e){
    console.log(findDog(e.target.dataset))

  })
  dogInfo.addEventListener('click',function(e){
    if (e.target.tagName ==='BUTTON')
      goodOrBadDog(displayDog)

  })
  filterDiv.addEventListener('click',function(e){
    if(e.target===goodBoiButton){
      dogBar.innerHTML=''
      goodBois =!goodBois
      if (goodBois){

        goodBoiButton.innerHTML ='Filter good dogs: ON'
        console.log(goodBoiButton)

        getGoodBois()
      }
      else if (!goodBois) {
        goodBoiButton.innerHTML ='Filter good dogs: OFF'
        console.log(goodBoiButton)
        // debugger

        getAllDogs()

      }
    }

  })


})

function getGoodBois(){
  fetch(url).then(res =>res.json()).then(parsedJson =>parsedJson.filter(dog=>dog.isGoodDog===true)).then(dogs=>dogs.forEach(dog=>addDog(dog)))
}

function goodOrBadDog(dog){
  // console.log('infinddog',dog)
  dog.isGoodDog = !dog.isGoodDog

  fetch(url+`/${dog.id}`,{ method:'PATCH',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(
    {
      "isGoodDog": dog.isGoodDog
    }
   )
})
  // .then(res =>res.json()).then(parsedJson=>addDogInfo(parsedJson))
addDogInfo(dog)
// console.log(dog)

}

function getAllDogs(){
  fetch(url).then(res =>res.json()).then(parsedJson =>parsedJson.forEach(dog=>addDog(dog)))
}
function addDog(dog){
  // if (goodBois == true)
  dogBar.innerHTML+=`<span data-id="${dog.id}">${dog.name}</span>`
}
function addDogInfo(dog){
   let isGood = (dog.isGoodDog)? ("Good Dog")  : ("Bad Dog");
  dogInfo.innerHTML = `
  <img src=${dog.image}>
<h2>${dog.name}</h2>
<button>${isGood}</button>
`
displayDog = dog;
}
function findDog(dog){
  // console.log('infinddog',dog)
  fetch(url+`/${dog.id}`).then(res =>res.json()).then(parsedJson=>addDogInfo(parsedJson))

  // console.log(dog)

}
