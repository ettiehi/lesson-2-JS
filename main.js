//צרו תוכנית בה המשתמש מזין את אורך צלעותיו של מלבן (2 צלעות) והתוכנית מדפיסה את שטח המלבן,
// אם שני הצלעות שוות הדפיסו את שטח המלבן בצירוף המילה "square"
var rectangle = prompt("הכנס אורכי 2 צלעות של מלבן")
var rectangle1 = (rectangle.split("")[0])
var rectangle2 = (rectangle.split("")[1])
var area = rectangle1 * rectangle2
if (rectangle1== rectangle2) {
    console.log('is a square ' + area)  
}else{
    console.log(area)  
}

//צרו תוכנית בה המשתמש מזין את שנת הולדתו והתוכנית מדפיסה לו את גילו 
//בקירוב בהנחה שהשנה היא השנה הנוכחית 2022
var yearOfBirth = Number(prompt("הכנס את שנת הולדתך"))
var age = 2022 - yearOfBirth
console.log('your age is: '+age)

//צרו תוכנית בה המשתמש מזין 6 פעמים מצרכים ומכניסה אותם לתוך מערך,
// צרו לולאה שעוברת על המערך ומדפיסה את הפריטים במערך בסדר הפוך.
var products = []
for (let index = 6; index > 0; index--) {
    var product = prompt("הכנס מוצר")
    products[index-1] = product
}T
console.log(products)

//צרו תוכנית שמקבלת מהמשתמש מספר מ1 עד 7, המספרים מייצגים את ימות השבוע, אם המשתמש הזין מספר המייצג
// את יום ראשון עד חמישי, הדפס לקונסול "Workday" אם המספר מייצג את ימי שישי ושבת הדפס לקונסול "Weekend"
var day = Number(prompt("הכנס מספר בין 1 ל 7"))
if (day > 0 && day < 7) {
    console.log('workday')
}else{
    console.log('weekend')
    
}

//צרו תוכנית בה אתם מקבלים 6 שמות מהמשתמש והכניסו אותם למערך, הדפיסו רק את השמות במיקום אי זוגי.
var name = prompt("הכנס 6 שמות")
var names = name.split(" ")
for (let index = 0; index < names.length ; index++) {
    if (index % 2 != 0) {
        console.log(names[index])
    }
}


