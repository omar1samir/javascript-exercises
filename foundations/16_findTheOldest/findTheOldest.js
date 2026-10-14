const findTheOldest = function(people) {
    // sort them by age 
    return people.sort((a, b) => {

        const currentYear = new Date().getFullYear();

        // // if there is no yearOfDeath   // not readable code
        // const aBirth = a.yearOfBirth
        // const aDeath = a.yearOfDeath;

        // const bBirth = b.yearOfBirth
        // const bDeath = b.yearOfDeath;

        // if (aBirth === undefined){
        //     aBirth = currentYear;
        // } else if (bBirth === undefined){
        //     bBirth = currentYear;
        // }

        // const aAge = aDeath - aBirth;
        // const bAge = bDeath - bBirth;
        // return bAge - aAge;
        /////////////////////////////////////
        // a shorter way 
        
        const aDeath = a.yearOfDeath ?? currentYear;
        const bDeath = b.yearOfDeath ?? currentYear;

        const aAge = aDeath - a.yearOfBirth;
        const bAge = bDeath - b.yearOfBirth;

        return bAge - aAge;
    })[0]// take the first one 
    
    // .splice(0, 1).map(person => person.name).join('');
};

// const people = [
//     {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         // yearOfDeath: 1941, // he is the oldest if this is commented 
//     },
// ]

// console.log(findTheOldest(people)); // ray
// Do not edit below this line
module.exports = findTheOldest;
