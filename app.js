//ASYNCHRONOUS EXAMPLES

// async function myFunction(){
//     return 'Hello';
// }

// console.log(myFunction());

// async function myFunction(){
//     return 'Hello';
// }
// myFunction().then(res => console.log(res));


// async function myFunction(){
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Yuhoo'), 2000);
//     });
//     const error = false;
// if(!error){
//     const res = await promise //wait until promose is resolve
//     return res;
// } else{
//     await Promise.reject(new Error('Something went wrong'));
// }
// }
// myFunction()
// .then(res => console.log(res))
// .catch(err => console.log(err));

async function getUsers(){
    // await response of the fetch call 
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    //only proceed once second promise is resolve

    return data;

}
getUsers()
.then(users => console.log(users))
.catch(err => console.log(err));