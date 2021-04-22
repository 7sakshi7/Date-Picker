
// let time = Date();   gives the full time


const datepicker = document.querySelector('.date-picker');
const selecteddate = document.querySelector('.date-picker .selected-date');
const date = document.querySelector('.date-picker .dates');


var mth_element = document.querySelector('.date-picker .dates .month .mth');
const next = document.querySelector('.date-picker .dates .month .next-mth');
const previous = document.querySelector('.date-picker .dates .month .previous-mth');

const days = document.querySelector('.date-picker .dates .days');
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

let dates = new Date();
console.log(dates);
let day = dates.getDate();
// console.log(`day= ${day}`);  gives
let month = dates.getMonth();
// console.log(`month= ${month}`);
let year = dates.getFullYear();
// console.log(`year= ${year}`);

// let selected_date ;
// let selected_day ;
// let selected_month ;
// let selected_year ;
let selected_date = dates;
let selected_day = day;
let selected_month = month;
let selected_year = year;

mth_element.textContent = months[month] + ' '+year;
selecteddate.textContent = formatDate(dates);
populateDates();

// event listener
datepicker.addEventListener('click',toggledate);
date.addEventListener('click',toggledate);
next.addEventListener('click',nextmonth);
previous.addEventListener('click',previousmonth);

// functions
function toggledate(e){
    console.log("heloo");
    console.log(e.path);
    date.classList.toggle('active');   
   
}
function nextmonth(){
    month++;
    if(month > 11){
        month=0;
        year++;
    }
    mth_element.textContent = months[month] + ' '+year;
    populateDates();
}
function previousmonth(){
    month--;
    if(month <0){
        month=11;
        year--;
    }
    mth_element.textContent = months[month] + ' '+year;
    populateDates();
}
function populateDates(e){
   days.innerHTML = '';

   let t_days= 31;
   if(month == 1){
       t_days=28;
   }
   for(let i =0;i<t_days;i++){
    const days_element = document.createElement('div');
    days_element.classList.add('day');
    days_element.textContent = i+1 ;
    

    if(selected_date==(i+1) && selected_year==year && selected_month==month){
        days_element.classList.add('selected');
    }
    days_element.addEventListener('click',function(){
        selected_date = new Date(year + '-' + (month + 1) + '-' + (i + 1));
        selected_day = (i+1);
        selected_month = month;
        selected_year=year;
        selecteddate.textContent = formatDate(selected_date);
        selecteddate.dataset.value=selected_date;

        populateDates();   
    })
    days.appendChild(days_element);
   }
}

// helper
function formatDate(d){
    let t = d.getDate();
    if(t<10){
        t='0' + t;
    }
    let m = d.getMonth() +1;
    if(m<10){
        m='0' + m;
    }
    let y = d.getFullYear();
    return t + '/' + m + '/' + y;

}


