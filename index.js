// Problem 1 -> Generating array elements of a given range
function generateArrayRange(range){
    let resultArray = [];
    for(let i = 1; i <= range; i++){
        resultArray.push(i);
    }
    return resultArray;
}

console.log(generateArrayRange(10));

// Problem 2 -> sorting array with complex objects
function sortingArrayWithComplexObjects(array){
    return array.sort((a, b) => a.id-b.id);
}

arrayToBeSorted = [
    {
        id:'2',
        name:'Random',
    },
    {
        id:'1',
        name:'Random1',
    },
    {
        id:'4',
        name:'Random2',
    },
    {
        id:'3',
        name:'Random3',
    }
]

console.log(sortingArrayWithComplexObjects(arrayToBeSorted))

// Problem 3 -> checking array of equality
function checkArrayEquality(arr1 , arr2){
    arr1.sort();
    arr2.sort();
    if(arr1.length !== arr2.length) return false;
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}

console.log(checkArrayEquality([1,2,4],[4,1,2]))

// Problem 4 -> intersection of arrays
function intersectionOfArray(array1,array2){
    let res = [];
    for(let i=0;i<array1.length;i++){
        if(array2.includes(array1[i])) res.push(array1[i])
    }
    return res;
}

console.log(intersectionOfArray([1,2,3,4,5],[3,4,5,6,7]))

// Problem 5 -> array rotation
function rotateArray(arrayToBeRotated,k){
    let res = [];
    for(let i=0;i<arrayToBeRotated.length;i++){
        res[(i+k) % arrayToBeRotated.length] = arrayToBeRotated[i];
    }
    return res;
}

console.log(rotateArray([1,2,3,4],2))