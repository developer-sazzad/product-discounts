
// Step-1
document.getElementById('discount-btn').addEventListener('click', function () {
    // Step-2
    const discountInputElement = document.getElementById('discount-field');
    const discountInputAmount = discountInputElement.value;

   // Step-3
    discountInputElement.value = '';
    
    // Set the Discount text 
    const discountPrice = 250;
    // step - 4
    const previousBalence = document.getElementById('price-total');
    const previousBalenceString = previousBalence.innerText;
    const totalBalence = parseFloat(previousBalenceString);

    // step -5
    if(discountInputAmount === 'disc250'){
        if(totalBalence >= discountPrice){
            const newDiscountAmout = totalBalence - discountPrice;
            previousBalence.innerText = newDiscountAmout;
        }
        else{
            alert('Wrong Discount Code. Please Provide Valid Code !!');
        }
    }else{
        alert('Empty Input Field !!')
    }
})