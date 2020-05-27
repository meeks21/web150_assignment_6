



//This function updates the images in the item-box, item-box backgroubd color, and text in the price paragraph element
function callProductOne(){

    //update image
    var smoothie = document.getElementById('smoothies_pics');   //stores the image element that is going to be updated
    var newContent = '<img src="images/frozen-fruit-smoothie_WH_360_392.jpg" alt="frozen_berry">'; //creates a variable which contains what I want to update my current content with.

    //update text
    var prices = document.getElementById('price'); //store the price id in a variable
    var newPrice = 'Price: 9.39' + '<br>'+ 'Tax: 0.56' + '<br>' + '<strong>Total: $9.95</strong>'; //newPrice variable stores the content that is going to replace the current content.


    document.getElementById('smoothies_pics').innerHTML = newContent; 
    document.getElementById('price').innerHTML = newPrice;

    //updates the background color for the .item-box element
    var classColor = document.querySelector('.item-box');
    classColor.className = 'changeColorOne'; 
    
    closingMsg(); //calls the closingMsg function inside the callProduction function
   

}
/**********Used the getElementById and querySelector methods along with the innerHTML property**********/



//This function updates the images in the item-box, item-box backgroubd color, and text in the price paragraph element
function callProductTwo(){

    //update image
    var smoothie = document.getElementById('smoothies_pics');   //finds the image element that is going to be updated
    var newContent = '<img src="images/Strawberry-Mango-Smoothie_WH_360_392.jpg" alt="strawberry_mango">'; //creates a variable which contains what I want to update my current content with.

    //update text
    var prices = document.getElementById('price');//store the price id in a variable
    var newPrice = 'Price: 10.89' + '<br>'+ 'Tax: 0.65' + '<br>' + '<strong>Total: $11.54</strong>';

    document.getElementById('smoothies_pics').innerHTML = newContent;
    document.getElementById('price').innerHTML = newPrice;

    //updates the background color for the .item-box element
    var classColor = document.querySelector('.item-box');
    classColor.className = 'changeColorTwo';

    closingMsg()//calls the closingMsg function inside the callProduction function


}
/**********Used the getElementById and querySelector methods along with the innerHTML property**********/


//This function updates the images in the item-box, item-box backgroubd color, and text in the price paragraph element
function callProductThree(){
  
    //update image
    var smoothie = document.getElementById('smoothies_pics');   //finds the image element that is going to be updated
    var newContent = '<img src="images/raspberry-peach-green-tea-smoothie_WH_360_392.jpg" alt="raspberry-peach-green-tea">'; //creates a variable which contains what I want to update my current content with.

    //update text
    var prices = document.getElementById('price');
    var newPrice = 'Price: 12.33' + '<br>'+ 'Tax: 0.74' + '<br>' + '<strong>Total: $13.07</strong>';

    document.getElementById('smoothies_pics').innerHTML = newContent;
    document.getElementById('price').innerHTML = newPrice;

    //updates the background color for the .item-box element
    var classColor = document.querySelector('.item-box');
    classColor.className = 'changeColorThree';  

    closingMsg();//calls the closingMsg function inside the callProduction function
  
}
/**********Used the getElementById and querySelector methods along with the innerHTML property**********/


//This function updates the images in the item-box, item-box backgroubd color, and text in the price paragraph element
function callProductFour(){

     //update image
    var smoothie = document.getElementById('smoothies_pics');   //finds the image element that is going to be updated
    var newContent = '<img src="images/Greek-yogurt-smoothie-peanut-butter_WH_360_392.jpg" alt="Greek-yogurt-peanut-butter-smoothie-_">'; //creates a variable which contains what I want to update my current content with.

    //update text
    var prices = document.getElementById('price');
    var newPrice = 'Price: 8.50' + '<br>'+ 'Tax: 0.51' + '<br>' + '<strong>Total: $9.01</strong>';
    
    document.getElementById('smoothies_pics').innerHTML = newContent;
    document.getElementById('price').innerHTML = newPrice;

    //updates the background color for the .item-box element
    var classColor = document.querySelector('.item-box');
    classColor.className = 'changeColorFour'; 

    closingMsg();//calls the closingMsg function inside the callProduction function

  
}
/**********Used the getElementById and querySelector methods along with the innerHTML property**********/




//This function changes the closing message after the price 
function closingMsg(){
    
    var closerText = document.getElementsByClassName('closingMsg');
    var changeText = closerText[0];

    changeText.textContent = 'That\'s a great choice!'
}

/**Used the getElementsByClassName method and the textContent property */