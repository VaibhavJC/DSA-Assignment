//Que1

function getAllPairs(arr, n){
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    for(var j = i+1 ; j < arr.length; j++){
      if(arr[i] + arr[j] == n){
        count++;
      }
    }
  }
  return count;
}

var arr = [3,2,7,-2,3];
var n = 5;
console.log(getAllPairs(arr,n))
  

//Que 2;

function reverseArray(arr){
  for(i = 0; i < arr.length/2; i++){
    var c = arr[i];
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = c; 
  }
  return arr;
}

var arr = [1,5,3,2,6,55,66,40,99];
console.log(reverseArray(arr));

//Que 3

function stringRotation(a ,b){
  if((a.length == b.length) && (a + a).indexOf(b) != -1){
    console.log("Strings are rotation of each other")
  }else{
    console.log("Strings are not rotation of each other");
  }
}

var a = "BBCA";
var b = "ABBC";
stringRotation(a, b)


//Que 4

var nonRepeatingChar = (str) => {
  var count = {};
  for (var i = 0; i < str.length; i++) {
    count[str[i]] ? count[str[i]]++ : (count[str[i]] = 1);
  }
  var singleEntry = Object.keys(count).find((key) => count[key] === 1);
  return singleEntry;
};
var str = "eyemyeye";
console.log(" non-repeated character from",str, "is", nonRepeatingChar(str));

//Que 5




//Que 6
function isOperator(x)
{
    switch (x) {
    case '+':
    case '-':
    case '/':
    case '*':
        return true;
    }
    return false;
}
function prePost(preExp)
{

  var s = [];
  var length = preExp.length;
  for (var i = length - 1; i >= 0; i--) {
    if (isOperator(preExp[i])) {

      var sum1 = s[s.length - 1];
      s.pop();
      var sum2 = s[s.length - 1];
      s.pop();
      var temp = sum1 + sum2 + preExp[i];
      s.push(temp);
    }
    else {
      s.push(preExp[i] + "");
    }
  }
    return s[s.length - 1];
}
 
var preExp = "*-A/BC-/AKL";
console.log("Postfix : " + prePost(preExp));


//Que 7
function isOperator(x) {
  switch (x) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '^':
    case '%':
      return true;
  }
  return false;
}

function preToInfix(str) {
  var stack = [];
  var l = str.length;
  for (var i = l - 1; i >= 0; i--) {
    var c = str[i];
    if (isOperator(c)) {
      var sum1 = stack[stack.length - 1];
      stack.pop()
      var sum2 = stack[stack.length - 1];
      stack.pop()
      var temp = "(" + sum1 + c + sum2 + ")";
      stack.push(temp);
    }
    else {
      stack.push(c + "");
    }
  }
  return stack[stack.length - 1];
}

var exp = "*-A/BC-/AKL";
console.log("Infix : " + preToInfix(exp));

//Que 8



//Que 9
var nStack = [];
var n = nStack.length;
function insertElement(x) {
  if (nStack.isEmpty()) nStack.push(x);
  else {
    var a = nStack.pop();
    insertElement(x);
    nStack.push(a);
  }
}
function reverseStack() {
  if (n.items > 0) {
    var x = nStack.pop();
    reverseStack();
    insertElement(x);
  }
  return 
}
nStack.push(1);
nStack.push(2);
nStack.push(3);
nStack.push(4);
nStack.push(5);
nStack.push(6);
nStack.push(7);
nStack.push(8);

console.log("Original Stack");
console.log(nStack);

reverseStack();

console.log("Reversed Stack");
console.log(nStack);


//Que 10

function getMinimum() {
  stack2.push(1);
  stack2.push(10);
  stack2.push(5);
  stack2.push(3);
  stack2.push(2);
  stack2.push(9);
  var first = stack2.pop();

  for (i = 0; i < n.items; i++) {
    if (!stack2.isEmpty()) {
      if (stack2.items[i] < first) {
        first = stack2.items[i];
      }
    }
  }
  console.log("Minimum value is ", first);
}

var stack2 = [];
getMinimum();
var n = stack2.length;