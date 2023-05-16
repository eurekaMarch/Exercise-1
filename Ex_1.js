// Question 1 จงเขียน function นำตัวอักษรตัวสุดท้ำยมำแสดงผล
console.log("===== Start Question 1 =====")
function lastChar(arr) {
    let x = arr.split("");
    let last = "";

    for(let i = 1; i <= x.length; i++) {
        last = x[i-1];
        console.log(last);
    }

    return last
}

console.log(lastChar("WeStride"));
console.log(lastChar("Zoo"));
console.log(lastChar("QWE"));
console.log(lastChar("ZxCvBn"));




// Question 2 จงเขียน function นำตัวอักษรแยกใส่ไว้ใน array
console.log("===== Start Question 2 =====")
function addArr (arr) {
    let array = arr.split("");
    return array;
}

console.log(addArr("WeStride"));
console.log(addArr("Zoo"));
console.log(addArr("QWE"));
console.log(addArr("ZxCvBn"));




// Question 3 จงเขียน function นำตัวเลขมำยกกำลัง
console.log("===== Start Question 3 =====")
function exponent(num, times) {
   if (times == 0) {
    return 1;
   } else {
    return num * exponent(num, times - 1);
   }
}

console.log(exponent(8,2));
console.log(exponent(9,3));
console.log(exponent(7,5));
console.log(exponent(6,6));




// Question 4 จงเขียน loop ให้แสดงผล 0 1 2 3 4 5 6 7 8 9 10
console.log("===== Start Question 4 =====")
for (i = 0; i <= 10; i++) {
    console.log(i);
}




// Question 5 จงเขียน loop ให้แสดงผล 10 9 8 7 6 5 4 3 2 1 0
console.log("===== Start Question 5 =====")
for (i = 10; i >= 0; i--) {
    console.log(i);
}




// Question 6 จงเขียน function ตรวจสอบว่ำประโยคนั้นมีช่องว่ำงกี่ช่องว่ำง
console.log("===== Start Question 6 =====")
function spaceBar(a) {
    let text = a.split(" ");
    return text.length-1
}

console.log(spaceBar("Hello Thailand."));
console.log(spaceBar("สัตว์ที่มี 4 ขา ทุกตัวคือ แมว ปลามี 4 ขา ปลาเป็นแมวหรือไม่"));
console.log(spaceBar("ประชากรบนโลก 1 ใน 3 เป็นลูกหลานของชาวมองโกล"));





// Question 7 จงเขียน function แทนที่ช่องว่ำงด้วย “-”
console.log("===== Start Question 7 =====")
function hyphen (text) {
    let arr = text.split(" ")
    return arr.join("-");
}

console.log(hyphen("Hello Thailand."));
console.log(hyphen("สัตว์ที่มี 4 ขา ทุกตัวคือ แมว ปลามี 4 ขา ปลาเป็นแมวหรือไม่"));
console.log(hyphen("ประชากรบนโลก 1 ใน 3 เป็นลูกหลานของชาวมองโกล"));



// Question 8,9 จงสร้ำง array และนำ จำนวนเงินทั้งหมดมำรวมกันแล้วลบด้วย 20,589
console.log("===== Start Question 8,9 =====")
    let thousand = {
        cashName: 1000,
        cashNum: 50
    }

    let fiveHundred = {
        cashName: 500,
        cashNum: 20
    }
    
    let oneHundred = {
        cashName: 100,
        cashNum: 15
    }
    
    let fifty = {
        cashName: 50,
        cashNum: 10
    }
    
    let twenty = {
        cashName: 20,
        cashNum: 10
    }
    
    let ten = {
        cashName: 10,
        cashNum: 10
    }
    
    let five = {
        cashName: 5,
        cashNum: 10
    }

    let one = {
        cashName: 1,
        cashNum: 1
    }

let a = Object.values(thousand);
let b = Object.values(fiveHundred);
let c = Object.values(oneHundred);
let d = Object.values(fifty);
let e = Object.values(twenty);
let f = Object.values(ten);
let g = Object.values(five);
let h = Object.values(one);

let merge = a.concat(b, c, d, e, f, g, h);

let resultTimes = [];
let resultPlus = 0;

function result() {
    for (i = 0; i < merge.length/2; i++) {
        resultTimes.push((merge[i * 2]) * (merge[(i * 2) + 1]));
    }
    
    for (let i = 0; i < resultTimes.length; i++) {
        resultPlus += resultTimes[i];
    }

    return resultPlus - 20589;
}
console.log(result(merge));




// Question 10 จงเขียน function สลับตัวเลขเพื่อทำกำรเข้ำรหัสลับของ CIA
console.log("===== Start Question 10 =====")
function cia(num) {
    let code = "0123456789"
    let arr = num.split("");
    let arrUnique = [];
    let result = [];

    for (i = 0; i < arr.length; i++) {
        arrUnique.push(code.indexOf(arr[i]));
    }
    
    for (i = 0; i < arrUnique.length; i++) {
        if (arrUnique[i] <= 4) {
            result.push(code[arrUnique[i] + 5]);
        } 
        else {
            result.push(code[arrUnique[i] - 5]);
        }
    }

    return result.join("");
}

console.log(cia("01234"));
console.log(cia("98654"));
console.log(cia("06284"));




// Question 11 
console.log("===== Start Question 11 =====")
function secret(code) {
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let arr = code.split("")
    let char = [];
    let result = []
    
    for (i = 0; i < arr.length; i++) {
        let a =  text.indexOf(arr[i]);
        char.push(a)
    }
 
    for (i = 0; i < char.length; i++){
        if (char[i] <= 12 && char[i] >= 0) {
            result.push(text[char[i] + 13]);
        } else if (char[i] <= 25 && char[i] >= 0) {
            result.push(text[char[i] - 13]);
        } else {
            result.push(" ");
        }
    }
    return result.join("");

}

console.log(secret("A"));
console.log(secret("B"));
console.log(secret("Z"));
console.log(secret("URYYB VAQVN"));





