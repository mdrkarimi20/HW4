1

let today = new Date().toLocaleDateString('fa-IR');
console.log(today);

function jalali(Date) {
        return moment(Date, 'YYYY/M/D').locale('fa').format('YYYY/M/D')
    }

    console.log(convertDate('2020/03/02'))


    function gregorian_to_jalali(gy, gm, gd){
    g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    if (gy > 1600) {
            jy = 979;
            gy -= 1600;
    }
    else {
            jy = 0;
            gy -= 621;
    }
    gy2 = (gm > 2) ? (gy + 1) : gy;
    days = (365 * gy) + (parseInt((gy2 + 3) / 4)) - (parseInt((gy2 + 99) / 100)) + (parseInt((gy2 + 399) / 400)) - 80 + gd + g_d_m[gm - 1];
    jy += 33 * (parseInt(days / 12053));
    days %= 12053;
    jy += 4 * (parseInt(days / 1461));
    days %= 1461;
    if (days > 365) {
            jy += parseInt((days - 1) / 365);
            days = (days - 1) % 365;
    }
    jm = (days < 186) ? 1 + parseInt(days / 31) : 7 + parseInt((days - 186) / 30);
    jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));

    var resultY = jy.toString();
    var resultM = jm < 10 ? "0" + jm.toString() : jm.toString();
    var resultD = jd < 10 ? "0" + jd.toString() : jd.toString();
    return [resultY, resultM, resultD];
    console.log(resultY + "/" + resultM + "/" + resultD);
}
------------------------------------------------------------------------
2
today = new Date(2020,08,01,12,22,41)
past = new Date(2020,02,20,23,19,01) 

function calcDate(date1,date2) {
    let diff = Math.floor(date1.getTime() - date2.getTime());
    let second = 1000;
    let seconds = Math.floor(diff/second);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);
    let months = Math.floor(days/31);
    let years = Math.floor(months/12);

    let message = date2.toDateString();
    message += " was "
    message += seconds + " seconds " 
    message += minutes + " minutes "
    message += hours + " hours "
    message += days + " days " 
    message += months + " months "
    message += years + " years ago \n"

    return message
    }


a = calcDate(today,past)
console.log(a) //
--------------------------------------------------------------------------
3
const date1 = new Date(2020,08,01,12,22,41);
const date3 = new Date(2019,02,20,20,12,44);
  
const Difference_Time = date2.getTime() - date1.getTime(); 
  
const dfSeconds = Math.round (Difference_Time / 1000 % 60 );
const dfMinutes = Math.round (dfSeconds / ( 60 * 1000 % 60 ) );
const dfHours = Math.round (dfHours / ( 60 * 60 * 1000 ) % 24 );
const dfDays = Math.round (dfHours / ( 24 * 60 * 60 * 1000 ) % 30 );
const dfMonths = Math.round (dfDays / ( 30 * 24 * 60 * 60 * 1000 ) % 12);
const dfYears = Math.round (dfMonths / 12 * 30 * 24 * 60 * 60 * 1000 );
  
console.log("dfYears"+ "dfMonths" + "dfDays" + "dfHours" + "dfMinutes" + "dfSeconds")
---------------------------------------------------------------------------
4
function calcTime(city, offset) {

    let d = new Date();
    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*offset));
    return "The local time in " + city + " is " + nd.toLocaleString();
}
-----------------------------------------------------------------------------
5

console.log(
  new Date().toLocaleDateString("fa", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
);



week = new Array("يكشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه")
months = new Array("فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند");
today = new Date();
d = today.getDay();
day = today.getDate();
month = today.getMonth() + 1;
year = today.getYear();
year = (window.navigator.userAgent.indexOf('MSIE') > 0) ? year : 1900 + year;
if (year == 0) {
    year = 2000;
}
if (year < 100) {
    year += 1900;
}
y = 1;
for (i = 0; i < 3000; i += 4) {
    if (year == i) {
        y = 2;
    }
}
for (i = 1; i < 3000; i += 4) {
    if (year == i) {
        y = 3;
    }
}
if (y == 1) {
    year -= ((month < 3) || ((month == 3) && (day < 21))) ? 622 : 621;
    switch (month) {
        case 1:
            (day < 21) ? (month = 10, day += 10) : (month = 11, day -= 20);
            break;
        case 2:
            (day < 20) ? (month = 11, day += 11) : (month = 12, day -= 19);
            break;
        case 3:
            (day < 21) ? (month = 12, day += 9) : (month = 1, day -= 20);
            break;
        case 4:
            (day < 21) ? (month = 1, day += 11) : (month = 2, day -= 20);
            break;
        case 5:
        case 6:
            (day < 22) ? (month -= 3, day += 10) : (month -= 2, day -= 21);
            break;
        case 7:
        case 8:
        case 9:
            (day < 23) ? (month -= 3, day += 9) : (month -= 2, day -= 22);
            break;
        case 10:
            (day < 23) ? (month = 7, day += 8) : (month = 8, day -= 22);
            break;
        case 11:
        case 12:
            (day < 22) ? (month -= 3, day += 9) : (month -= 2, day -= 21);
            break;
        default:
            break;
    }
}
if (y == 2) {
    year -= ((month < 3) || ((month == 3) && (day < 20))) ? 622 : 621;
    switch (month) {
        case 1:
            (day < 21) ? (month = 10, day += 10) : (month = 11, day -= 20);
            break;
        case 2:
            (day < 20) ? (month = 11, day += 11) : (month = 12, day -= 19);
            break;
        case 3:
            (day < 20) ? (month = 12, day += 10) : (month = 1, day -= 19);
            break;
        case 4:
            (day < 20) ? (month = 1, day += 12) : (month = 2, day -= 19);
            break;
        case 5:
            (day < 21) ? (month = 2, day += 11) : (month = 3, day -= 20);
            break;
        case 6:
            (day < 21) ? (month = 3, day += 11) : (month = 4, day -= 20);
            break;
        case 7:
            (day < 22) ? (month = 4, day += 10) : (month = 5, day -= 21);
            break;
        case 8:
            (day < 22) ? (month = 5, day += 10) : (month = 6, day -= 21);
            break;
        case 9:
            (day < 22) ? (month = 6, day += 10) : (month = 7, day -= 21);
            break;
        case 10:
            (day < 22) ? (month = 7, day += 9) : (month = 8, day -= 21);
            break;
        case 11:
            (day < 21) ? (month = 8, day += 10) : (month = 9, day -= 20);
            break;
        case 12:
            (day < 21) ? (month = 9, day += 10) : (month = 10, day -= 20);
            break;
        default:
            break;
    }
}
if (y == 3) {
    year -= ((month < 3) || ((month == 3) && (day < 21))) ? 622 : 621;
    switch (month) {
        case 1:
            (day < 20) ? (month = 10, day += 11) : (month = 11, day -= 19);
            break;
        case 2:
            (day < 19) ? (month = 11, day += 12) : (month = 12, day -= 18);
            break;
        case 3:
            (day < 21) ? (month = 12, day += 10) : (month = 1, day -= 20);
            break;
        case 4:
            (day < 21) ? (month = 1, day += 11) : (month = 2, day -= 20);
            break;
        case 5:
        case 6:
            (day < 22) ? (month -= 3, day += 10) : (month -= 2, day -= 21);
            break;
        case 7:
        case 8:
        case 9:
            (day < 23) ? (month -= 3, day += 9) : (month -= 2, day -= 22);
            break;
        case 10:
            (day < 23) ? (month = 7, day += 8) : (month = 8, day -= 22);
            break;
        case 11:
        case 12:
            (day < 22) ? (month -= 3, day += 9) : (month -= 2, day -= 21);
            break;
        default:
            break;
    }
}
console.log(week[d] + " " + day + " " + months[month - 1] + " " + year);
-------------------------------------------------------------------------------------------------
6

String.prototype.sub_String = function() 
{
  let subset = [];
  for (let m = 0; m < this.length; m++) 
  {
    for (let n = m+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

console.log("dog".sub_String());
---------------------------------------------------------------------------------------------------
7

function key_value_pairs(obj) 
   {
    var keys = _keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) 
    {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  }

function _keys(obj) 
  {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
 {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(key_value_pairs({country: "Iran", capital: "Tehran", population: "18M"}));



let obj = {country: "Iran", capital: "Tehran", population: "18M"} 
Object.entries(obj);
--------------------------------------------------------------------------------------------
8

library.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));


const sortArray = library[];

console.log(sortArray.sort((a, b) => {
  if (a.region < b.region)
    return -1;
  if (a.region > b.region)
    return 1;
  return 0;
}));
-------------------------------------------------------------------------------------------
9

let map = function(number) {
        let result = 0;
        if (number > 100) {
            console.error('عدد زیر 100 وارد کن')
        } else {
            for (let i = 1; i <= number; i++) {
                result = number / 20;
            }
            console.log("number" + "result")
        }

    };

    map(70);
-----------------------------------------------------------------------------------------
10
let add_minutes =  function (dt, minute) {
    return new Date(dt.getTime() + minutes*60000);
}
console.log(add_minutes(new Date(2014,10,2), 30).toString());


var oldDateObj = new Date();
var newDateObj = new Date();
newDateObj.setTime(oldDateObj.getTime() + (30 * 60 * 1000));
console.log(newDateObj);