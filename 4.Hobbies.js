// Implement the findAllHobbyists function that takes a hobby, and an object consisting of peoples names mapped to their respective hobbies. 
    // The function should return an Array containing the names of the people (in any order) that enjoy the hobby.

    var hobbies = {
        "Steve": ['Fashion', 'Piano', 'Reading'],
        "Patty": ['Drama', 'Magic', 'Pets', 'Yoga'],
        "Chad": ['Puzzles', 'Pets', 'Yoga']
      };

        function findAllHobbyists(hobby, objectHobbies) {
            let array =[]
            for(var name in objectHobbies) {
                for(let item of objectHobbies[name]) {
                    if(hobby === item) {
                        array.push(name)
                    }
                }
            }
            console.log(array)
        }
        
    findAllHobbyists('Yoga' ,hobbies) // ['Patty', 'Chad']

