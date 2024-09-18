// //  let name = 'Max';
// //  let age = 29;
// //  let hasHobbies = true;

const { text } = require("stream/consumers");

// //  age = 30;

// //  const summarizeUser = (userName, userAge, hasHobbies) => {
// //     return 'Name is' + userName + ',age is' + userAge + 'and the user has hobbies: ' + userHasHobby;
// //  }

// //  const add = (a, b) => a + b;
 
// // //  function summarizeUser(userName, userAge, userHasHobby){
// // //     return 'Name is' + userName + ',age is' + userAge + 'and the user has hobbies: ' + userHasHobby;
// // //  }
// //  console.log(summarizeUser(name, age, hasHobbies));

// const person  = {
//     name: 'Max',
//     age: 29,
//     greet() {
//         console.log('Hi, I am ' + this.name )
//     }
// }

// const printName = ({ name  }) => {
//     console.log(name);
// }

// printName(person);
// const { name} = person;
// console.log(name);

// // const copiedPerson = {...person};
// // console.log(copiedPerson);


// // const hobbies = ['Sports', 'Cooking', 1, true , {}];
// // // for ( let hobby of hobbies){
// // //     console.log(hobby);
// // // }
// // // console.log(hobbies.map(hobby => 'Hobby: ' + hobby))
// // // console.log(hobbies)
// // // hobbies.push('Programming');
// // // console.log(hobbies);

// // const copiedArray = [...hobbies];
// // console.log(copiedArray);

// // const toArray = (...args) => {
// //     return args;
// // }
// // console.log(toArray(1, 2, 3,4,6));

const fetchData = () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Done');
            },1500);
            
        });
        return promise;
}

setTimeout(() => {
    console.log('Timer is done');
    fetchData().then (text => {
        console.log(text);
        return fetchData();
    }
    )
},2000);