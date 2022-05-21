// 1. Calculate
// Read Radius
// Calculate A=πr2

/*function area(radius){
    let result = radius * radius * Math.PI ;
    return result ;
}
console.log(area(1));*/


// 2. Using if..else, write the code which gets a number via prompt and then shows in alert:
// 1, if the value is greater than zero
// -1, if less than zero,
// 0, if equals zero.

/*let num = +prompt("Enter number", 0);
if (num > 0){
    alert(1);
}else if( num < 0){
    alert(-1);
}else{
    alert(0);
}*/


// 3. Create a program that:
// Reads the number of years employed
// Reads the number of children the employee has
// Prints the total amount of salary the employee makes .
// Output: "The total amount is 560$. 400$ minimum wage + 100$ for 5 years experience + 60$ for 2 kids "

/*function salary(year , childe){
    let total = 400 + (20 * year) + (30 * childe) ;
    alert(`The total amount is ${total}$`);
}
salary( 5, 2);*/


// 4. Write a function that:
// Get a number.
// Display the sum of natural numbers until the parameter is reached.


/*function sum(num){
    if (num > 0) return num + sum(num - 1)
    else return 0
}
console.log(sum(5));*/
//or
/*function sum(num){
    let result = 0;
    for( let i = 1 ; i <= num ; i++){
         result += i ; 
    }
    return result ;
}
console.log(sum(5));*/


// 5. Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.

/*function prime(number){
    for(let i = 2; i<=number; i++){
        let x = true ;
        for(let j = 2; j<i ; j++){
            if( i % j == 0){
                x = false;
                break ;
            }
        }if(x){
                console.log(i);
            }
        }
    }
prime(100)*/


// 6. Let's write a program to make a simple calculator with the switch statement .
// Just assume + , - , * , / .

/*(function (a , b , c){
    switch(b){
        case '+' :
            console.log (a + c) ;
            break ;
        case '-' :
            console.log (a - c) ;
            break ;
        case '/' :
            console.log (a / c) ;
            break ; 
        case '*' :
            console.log (a * c) ;
            break ;
        default:
            console.log("Error");           

    }
}(4,'-',2));*/




function findLonelyInt(arr){
    let temp, searchedInd;;
    for (let i = 0; i < arr.length; i++ ){
        if(arr[i] == "*"){
            
            continue;
        }

        temp = arr[i];
        arr[i] = "*";
        if (temp < 0){
            searchedInd = arr.indexOf(Math.abs(temp));
        }else{
            searchedInd = arr.indexOf(-Math.abs(temp));
        }
        
        
        if (searchedInd != -1){
            arr[searchedInd] = "*";
        }else{
            console.log(temp);
            break;
        }  
    }
}

findLonelyInt([1, -1, 2, -2, 3]);
findLonelyInt([-3, 1, 2, 3, -1, -4, -2]);
findLonelyInt([-9, -105, -9, -9, -9, -9, 105]);





//2:
// function countCharacters(character, str){
//     let count = 0;
//     for (let val of str){
//         if (val == character){
//             count++;
//         }
//     }
//     console.log(count);
// }

// countCharacters('p', 'parisaEghbalipanjTapirahanDarad');
// countCharacters('a', 'parisaEghbalipanjTapirahanDarad');





//3:
// function printPattern(){
//     let str = "";
//     let rowNum = 8;
//     for(let i = 1; i<=rowNum; i++){
//         for(let j = 1; j<=i; j++){
//             str += j + ' ';
//         }
//         str += "\n";
//     }
//     console.log(str);
// }

// printPattern();





//4:
// function numberCount(num){
//     let strNum = num.toString();
//     console.log(strNum.length);
// }

// numberCount(8367);
// numberCount(123456789);





//5:
// function isLeapYear(year){
//     if (year % 400 == 0)
//         return true;

//     if (year % 100 == 0)
//         return false;

//     if (year % 4 == 0)
//         return true;

//     return false;
// }

// function countNumOfDays(year, month){
//     let month31Day = [1, 3, 5, 7, 8, 10, 12];
//     let month30Day = [4, 6, 9, 11];
//     switch (true){
//         case (year <= 0):
//             console.log(`The date is  not valid, So the number of days in ${year}/${month} is -1`);
//             break;
//         case (month31Day.includes(month)):
//             console.log(`The number of days in ${year}/${month} is 31`);
//             break;
//         case (month30Day.includes(month)):
//             console.log(`The number of days in ${year}/${month} is 30`);
//             break;
//         case (isLeapYear(year) && month == 2):
//             console.log(`The number of days in ${year}/${month} is 29`);
//             break;
//         case (!isLeapYear(year) && month == 2):
//             console.log(`The number of days in ${year}/${month} is 28`);
//             break;        
//         default:
//             console.log(`The date is  not valid, So the number of days in ${year}/${month} is -1`);
//     }
// }

// countNumOfDays(2020, 2);
// countNumOfDays(2021, 2);
// countNumOfDays(1995, 4);
// countNumOfDays(2020, 13);
// countNumOfDays(-2020, 10);





//6:
// function bubbleSort(arr){
//     console.log(`Before sorting: ${arr}`);
//     for (let i = 0; i < arr.length; i++){
//         for (j = 0; j < arr.length - 1 - i; j++){
//             if (arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     console.log(`After sorting: ${arr}`);
// }

// bubbleSort([3,5,2,11,4,7,13]);





//7:
// function multiply(num){

//     function recMultiply(multiplier, multiplicand){
//         return multiplicand === 0 ? 0 : multiplier + recMultiply(multiplier, multiplicand - 1);
//     }
//     return recMultiply(123, num);
// }

// let result1 = multiply(5);
// console.log(`123 * 5 = ${result1}`);

// let result2 = multiply(257);
// console.log(`123 * 257 = ${result2}`);





//8:
// function calcAvg(gradesArr){
//     let sum = 0;
//     let avg;
//     for (let grade of gradesArr){
//         sum += grade;
//     }
//     avg = sum / gradesArr.length;
//     console.log(avg);

//     switch (true){
//         case (avg < 60):
//             console.log("F");
//             break;
//         case (avg < 70):
//             console.log("D");
//             break;
//         case (avg < 80):
//             console.log("C");
//             break;
//         case (avg < 90):
//             console.log("B");
//             break;
//         case (avg <= 100):
//             console.log("A");
//             break;
//         default:
//             console.log("Invalid grade ");
//     }
//     console.log('\n');
// }

// calcAvg([80, 77, 88, 95, 68]);
// calcAvg([100, 57.8, 95, 98, 100]);





//9:
// function separateStr(str){
//     let separatedStr = str.split("-");
//     console.log(`The seconf word is: ${separatedStr[1]}`);
// }
// separateStr('split-by-dash');





























































