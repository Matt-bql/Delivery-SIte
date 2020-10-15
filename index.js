function thisfunc() {
    alert('hello');
}

// If your object has any non-string properties,
// JavaScript will automatically typecast them as strings.
var anotherObject = {
    make: 'ford',
    5: 'five',
    'model': 'focus',
    newCar: 'hello'
};
// ex. 1
console.log(anotherObject.model);
//ex. 2
console.log(anotherObject[5]);
//ex.3 --This can be very useful for 
//iterating through an object's properties 
//or when accessing a lookup table.
var myCar = 'make';
myType = anotherObject[myCar];

console.log(myType);

// function tes(mak) {
//     var s = 'new';
//     return s + mak;
// }
// var someCar = tes('Car');
// console.log(anotherObject[someCar]);

switch (1) {
    case 1: 
        result = '22';
        break;
}
function lestt (){
if (varrr) {
    return 'yesss';
} else {
    return 'naaaahhhoo';
}
}

// function thisfunc() {
//     var x = document.getElementById('myTopnav');
//     if (x.className === 'nav-bar') {
//         x.className += ' responsive';  
//     } else {
//         x.className = 'nav-bar';
//     }
// }