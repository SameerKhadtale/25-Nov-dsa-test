const array = [1,2,3,4,5]

function reverseArray(array){
let reverse = []
for(var i = 0; i = array.length-1; i>=0; i++){
reverse.push(array[i])
}
return reverse
}
console.log(reverseArray(array))