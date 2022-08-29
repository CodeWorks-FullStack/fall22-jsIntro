// IMMUTABLE
console.log('PRIMITIVE TYPES')
let primitiveTypeNumber = 1000
let primitiveTypeString = 'bcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()'
let primitiveTypeBoolean = true
// NAN NULL UNDEFINED SYMBOL


console.log('REFERENCE TYPES')

let objectType = {
  // key : value pairs
  wordsWithoutSpaces: '',
  anotherThingHere: 700,
  thisMakesNoSense: true,
  nestedObjects: {
    thisIsGettingCrasy: {
      letsGoAgain: false
    }
  }
} // curly brackets curly bois 

// boxes in boxes
// <div>
//   <h1></h1>
//   <div>
//     <p></p>
//     <div>
//       <div>

//       </div>
//     </div>
//   </div>
// </div>


let groceries = [
  'bananas 🍌',
  'Alcohol 🍾',
  '🥔',
  '🍅',
  '🧀'
] // Arrays




// Function
// is a set of instructions that the computer can use at any given point in time


let cheese = {
  name: 'Gouda',
  proof: 40,
  price: 10.05,
  soldOut: false
}



// NOTE function declaration function name(){}
function drawCheese() {
  // truthy vs falsy
  if (!cheese.soldOut) {
    // ^ not BANG character  
    // @ts-ignore
    document.getElementById('gouda').innerHTML = `
      <div>
      ${cheese.name} - the price of cheese
      <b class="text-danger">$${(cheese.price * 1.06).toFixed(2)} </b>
      </div>
      `
  } else {
    // @ts-ignore
    document.getElementById('gouda').innerHTML = `<div class="alert alert-danger">Da Gouda is Gone</div>`
  }
}

function inflation() {
  cheese.price++
  drawCheese()
}



drawCheese()















