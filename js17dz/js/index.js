let mult = (a, b) => a * b;

setTimeout(() => {
  console.log(mult(5, 10));
}, 1000);



function sumObjectValues(obj) {
    let sum = 0;
    for (let prop of Object.keys(obj)) {
      if (typeof obj[prop] === 'number') {
        sum += obj[prop]
      }
    }
    return sum;
  }
  
  let objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
  }
  
  let result = sumObjectValues(objectWithNumbers);
  console.log(result);


  let a = 'first'
let b = 'second'

console.log(b, a)

[a, b] = [b, a];



let myFn = (pr)=>{console.log(pr);}
setTimeout(function () {
    console.log(myFn('Привет из функции myFn'))
}, 2000)