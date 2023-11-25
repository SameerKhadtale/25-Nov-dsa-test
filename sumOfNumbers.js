const array = [ 1,-2,13,-4,15];
function sumPositivieNumber(array){
    var sum = 0 ;
    for(var i = 0; i < array.length; i++)
    { if (array[i] > 0){
      sum+= array[i];
    //   console.log(sum)
    }
}
return sum;
}
console.log(sumPositivieNumber(array));