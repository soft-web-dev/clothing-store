const slides = document.querySelectorAll('.slide-container');


slides.forEach(function(slide, index){
   slide.style.left = `${index * 100}%` ;
})

let timer = setInterval(autoSlide,8000);
function autoSlide(){
    conter +=1;
    slider()
}
function resetTimer(){
    clearInterval(timer);
    timer = setInterval( autoSlide, 8000 )
}


let conter = 0;



function slider(){

    if (conter === slides.length) {
        conter =0;
    }
    if (conter < 0) {
        conter = slides.length - 1;
    }
    slides.forEach(function(slide){
slide.style.transform = `translateX(-${conter * 100}% )`
    })
}

// count down
const months=[
    "January",
    "Febraury",
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
]
const days=[
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]
const deadLineItems = document.querySelectorAll(".counter-item")
const sales = document.querySelector(".sales")
const deadLineContents = document.querySelectorAll(".counter-item p")
const dealOfTheWeek = document.querySelector(".deals-of-week-countdown")

let futureDate = new Date(2021, 10, 8, 10, 20, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const mins = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month];

const date = futureDate.getDate()

const day = days[futureDate.getDay()];


sales.textContent = `sales end on ${day} ${date} ${month} ${year} at ${hours} : ${mins}am`


const futureTime = futureDate.getTime();
// console.log(futureTime);
function getRemainingTime(){
const today = new Date().getTime()
// console.log(today);
const diff = futureTime - today;
// 1s = 100ms
// 1m = 60s
// 1hr = 60min
// 1day = 24hr

const oneDay = 24 * 60 * 60 * 1000;
const oneHOur = 60 * 60 * 1000;
const oneMin = 60* 1000;

let Days = diff/oneDay
Days = Math.floor(Days)

let hours = Math.floor((diff % oneDay) /oneHOur);
let Minutes = Math.floor((diff % oneHOur) /oneMin);
let seconds = Math.floor((diff % oneMin) /1000);


// set values array

function format(item){
    if(item < 10){
        return item = `0${item}`
    }
    return item
}
const values = [date,hours,Minutes,seconds];

deadLineContents.forEach(function(item,index){
    item.innerHTML = format(values[index]);
})
if(diff < 0){
    clearInterval(countdown);
    deadLineContents.innerHTML = `<h4>Sorry, this sale has expired</h4>`
}

}

let countdown = setInterval(getRemainingTime,1000)
getRemainingTime()
































// const myslide = document.querySelectorAll('.myslide'),
// 	  dot = document.querySelectorAll('.dot');
// let counter = 1;
// slidefun(counter);

// let timer = setInterval(autoSlide, 8000);
// function autoSlide() {
// 	counter += 1;
// 	slidefun(counter);
// }
// function plusSlides(n) {
// 	counter += n;
// 	slidefun(counter);
// 	resetTimer();
// }
// function currentSlide(n) {
// 	counter = n;
// 	slidefun(counter);
// 	resetTimer();
// }
// function resetTimer() {
// 	clearInterval(timer);
// 	timer = setInterval(autoSlide, 8000);
// }

// function slidefun(n) {
	
// 	let i;
// 	for(i = 0;i<myslide.length;i++){
// 		myslide[i].style.display = "none";
// 	}
// 	for(i = 0;i<dot.length;i++) {
// 		dot[i].className = dot[i].className.replace(' active', '');
// 	}
// 	if(n > myslide.length){
// 	   counter = 1;
// 	   }
// 	if(n < 1){
// 	   counter = myslide.length;
// 	   }
// 	myslide[counter - 1].style.display = "block";
// 	dot[counter - 1].className += " active";
// }