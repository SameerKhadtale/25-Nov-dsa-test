const array = [1,2,2,3,4,5,4,1]

function removeDuplicate(array){
let unique =0
let uniqueArr= []
for(var i = 1; i < array.length+1; i++){
    if (array[i] !== array[i-1]){
        unique = array[i-1]
        if(!uniqueArr.includes(unique)){
            uniqueArr.push(unique)
            console.log(unique)
        }

    }
}
return uniqueArr
}

console.log(removeDuplicate(array))