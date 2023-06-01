
//Grab everything we need
const priceInput = document.querySelector('[name=price]')
const quantityInput = document.querySelector('[name= quantity]')
const totoal = document.querySelector('.total')
const quantityLabel = document.querySelector('#quantity-label')
console.log(quantityLabel)


// Create the functions that we'll need
function calculatePieCost(){
    const price = priceInput.value;
    const quantity = quantityInput.value;
    

    // multiple price * qty 
    const multiplePriceQty = Number(price * quantity)
    // display on $30 dom
    totoal.innerText = `$ ${ multiplePriceQty.toFixed(2)}`
}

function label(){
    let quantit = quantityInput.value;
    quantityLabel.innerText = quantit;
}

//on first run
calculatePieCost()

//add our event listeners
priceInput.addEventListener('input', calculatePieCost)
quantityInput.addEventListener('input', calculatePieCost )
quantityInput.addEventListener('input', label)


