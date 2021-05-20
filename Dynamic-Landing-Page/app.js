// DOM Elements

const time = document.getElementById('time'),
    greetings = document.getElementById('greetings'),
    name = document.getElementById('name'),
    plans = document.getElementById('plans');


// show Time
function showTime () {

    let date = new Date(),
        hours = date.getHours(),
        mins = date.getMinutes(),
        sec = date.getSeconds();

    let amPM = hours > 12? 'PM' : 'AM';

    // converting to 12 hours format
    hours = hours % 12;

    time.innerHTML = `${zeros(hours)}<span>:</span>${zeros(mins)}<span>:</span>${zeros(sec)}<span> </span>${amPM}`;


    // calling after each second
    setTimeout(showTime , 1000);
}

// solving zeros problem
function zeros( n ) {
    return ((parseInt(n) < 10 ? '0' : '') + n);
}

// setting backgrounds and greetings
function setBackgroundGreetings() {

    let date = new Date(),
        hours = date.getHours();


    // checking conditions
    if( hours < 12){
        document.body.style.backgroundImage = "url('./Assets/morning.webp')";

        greetings.textContent = 'Good Morning';
    }else if ( hours < 18) {
        document.body.style.backgroundImage = "url('./Assets/afternoon.jpg')";

        greetings.textContent = 'Good AfterNoon';
    }else{
        document.body.style.backgroundImage = "url('./Assets/evening.webp')";

        document.body.style.color = 'white';

        greetings.textContent = 'Good Evening';
    }

    document.body.style.backgroundSize = 'Cover';
    document.body.style.backgroundPosition = 'Center';
}

// adding event listeners
name.addEventListener('keypress' , setName);
name.addEventListener('blur' , setName);

plans.addEventListener('keypress', setPlans);
plans.addEventListener('blur' , setPlans);

// setName and getName
function getName(){
    if ( localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

function setName(event){
    if( event.type == 'keypress'){

        // checking for enter key
        if( event.which == 13 || event.keyCode == 13){
            localStorage.setItem('name' , event.target.innerText);
            name.blur();
        }

    }else{
        localStorage.setItem('name' , event.target.innerText);
    }
}

// setPlans and getPlans
function getPlans() {
    if ( localStorage.getItem('plans') === null){
        plans.textContent = '[Enter Plans]';
    }else{
        plans.textContent = localStorage.getItem('plans');
    }
}

function setPlans(event) {

    if( event.type == 'keypress'){

        // checking for enter key
        if( event.which == 13 || event.keyCode == 13){
            localStorage.setItem('plans' , event.target.innerText);
            plans.blur();
        }

    }else{
        localStorage.setItem('plans' , event.target.innerText);
    }

}

// calling functions
showTime();
setBackgroundGreetings();
getName();
getPlans();