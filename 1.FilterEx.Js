// Write a function that removes all items that are not numbers from the array. The function should modify the existing array, not create a new one.
// For example, if the input array contains values [1, 'a', 'b', 2], after processing, the array will contain only values [1, 2].


let array1 = [1, 'a', 'b', 2] 

// Cách 1:
    // function filter (array) {
    //     var arr1 = array.filter(function(value) {
    //         if(typeof value === 'number') {
    //             return true
    //         }   
    //     })
    //     return array = arr1
    // }

    // array1 = filter(array1);

// Cách 2:
    function filter (array) {
        var arr1 = []
        for (i = 0; i < array.length ; i++) {
            if (typeof array[i] === 'number') {
                arr1.push(array[i])
            }
        }
        return array = arr1
    };
    array1 = filter(array1)

    console.log(array1)

