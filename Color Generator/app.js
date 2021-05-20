const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//selecting button
const btn = document.getElementById("btn");

//selecting span value whose class is color
const color = document.querySelector(".color");

btn.addEventListener('click' , function() {
    
    //random numbers
    const randNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randNumber];

    color.textContent = colors[randNumber];
});


function getRandomNumber(){

    return Math.floor(Math.random() * colors.length);
}