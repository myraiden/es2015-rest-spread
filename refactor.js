/************************************************/
/*     Refactor using rest and arrow function   */
/************************************************/
/*
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}*/

/* Write an ES2015 Version */
function filterOutOdds(...nums){
    return nums.filter((num)=>num%2===0);
}//good

/************************************************/
/*     findMin

Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.   */
/************************************************/
/*
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
*/

function findMin(...nums){
    return nums.reduce((a,b)=>{if(b<a)a=b; return a})
}//good

/************************************************/
/*     mergeObjects

Write a function called ***mergeObjects*** that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.  */
/************************************************/
/*
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
*/

function mergeObjects(first,second){
    return {...first,...second};
}//good


/************************************************/
/*     ## **doubleAndReturnArgs**

Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.   */
/************************************************/
/*
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]
*/

function doubleAndReturnArgs(arrNuma,...numanuma){
    return arrNuma.concat(numanuma.map((valN)=>valN*2))
}//good


/************************************************/
/*    ## **Slice and Dice!**

For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.  

user generated tests:
removeRandom([1,2,3,4,5,6,7,8,9])
extend(['a','b','c','d'], ['z','x','y'])
randomIndex([9,8,7,6,5,4],[,1,2,3,4,5,'carrots'])
addKeyVal({a:1, b:2, c:4},'d',8)
removeKey({k1:2, k2:2, k3:6, k4:18, k5:54, k6:162},'k4')
combine({a1:'fuji', a2:'redDelicious'},{a3:'grannySmith', a4:'empire'})
update({a:9, b:2, c:3, d:8, e:5, f:6, g:7},a,10)
*/
/************************************************/
/*
remove a random element in the items array
and return a new array without that item.*/
function removeRandom(items) {
    const randomIndex=Math.floor(Math.random()*[...items].length);
    return items.filter((itemVal,itemIndex,items)=>{if(itemIndex!=randomIndex) return itemVal})
}//good

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1,...array2];
}//good

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key]:val}
}//good


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    return {...obj}
    //return newObj.filter((itemVal,itemIndex,obj)=>{if(itemIndex!=key) return itemVal})
    //return obj.reduce((goodObject,currentObject)=>{if(object[key]!=key); return currentObject})
}//BROKE


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2}
}//good


/** Return a new object with a modified key and value. */

function update(obj, key, val) {

}

