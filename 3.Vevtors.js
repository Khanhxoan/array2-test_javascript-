// Write a function that takes an array of 3D vectors and returns the shortest one. 
    // Each vector is represented with an array that contains 3 elements (x, y and z). 
    // If multiple vectors have the same length, the function should return any one of them.

// To determine the length of a vector use the formula:  Math.sqrt(x*x + y*y + z*z)

// For example, for the array of 3D vectors [ [1, 1, 1], [2, 2, 2], [3, 3, 3] ] findShortest should return the first vector (array [1, 1, 1]) because it is the shortest.

    var vector1 = [ [6, 6, 6], [2, 2, 2], [3, 3, 3] ];

    function shortestVector (vector3D) {
        let array = []
        for(let key1 of vector3D) {
            let lengthOfVector = key1.reduce(function (result, element) {
                let sum = element*element;
                return result += sum 
            },0)
            array.push(lengthOfVector)
            }
        for(let key2 of vector3D) {
            let lengthOfVector = key2.reduce(function (result, element) {
                let sum = element*element;
                return result += sum 
            },0)
            if(lengthOfVector === Math.min(...array)) {
                console.log(key2)
            }
        }
        }
        

    shortestVector(vector1); // [2, 2, 2]
    
