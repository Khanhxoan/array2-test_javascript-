// The program uses a data structure with an array that can contain items and other arrays. 
    // Write a function numberOfItems that recursively passes through all arrays and counts the number of occurrences of a given item. Keep in mind that arrays can be nested within each other.
// For example, numberOfItems(arr, 25) and numberOfItems(arr, "apple") for the array below should both return 2.

    let array = [ 12, 3, 'vu', [12, 'vu']];

    function numberOfItems (arr, item1) {
        let arr1 = arr.reduce(function(acc, item) {
            return acc.concat(item)
        },[])
        
        let count = arr1.reduce(function(acc, item) {
            if(item === item1) {
                return acc += 1
            }
            return acc
        }, 0)
        console.log(count)
    }
    numberOfItems(array, 'vu') //2
