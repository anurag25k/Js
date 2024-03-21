// const promiseOne=new Promise(function(resolve,reject) {
//     //Do an async task
//     //Db calls,cryptography,network
//     setTimeout(function () {
//         console.log('Async task is complete');
//         resolve()
//     },1000)

// });
// promiseOne.then(function(){
//     console.log("promise consumed")
// })

// //another method
// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("async task 2")
//         resolve();
//     }, 1000);
// }).then(function(){[
//     console.log('async 2 resolved')
// ]})

// //third promise
// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(() => {
//        resolve({
//         username:"chai",email:"chai@example.com"
//        })
//     }, 1000);
// })
// promiseThree.then(function(user){
//   console.log(user)
// })

//fourth
// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "hitesh", password: "123" });
//     } else {
//       reject("ERROR:something went wrong");
//     }
//   }, 1000);
// });
// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(()=>{
//     console.log("The promise is either resolved or rejected")
//   })
//promise five
// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let error = true;
//       if (!error) {
//         resolve({ username: "javascript", password: "123" });
//       } else {
//         reject("ERROR:jswent wrong");
//       }
//     }, 1000);
//   });

//   async function consumePromiseFive(){
//     try {
//         const reponse=await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
    
//   }
//   consumePromiseFive()

  //example
//   async function getAllUsers(){
//     try {
//         const response=await fetch("https:/jsonplaceholder.typicode.com/users")
//     const data=await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:",error)
//     }
    
//   }
//   getAllUsers()

//same in then catch format
fetch('https://jsonp')
.then(()=>{
    return response.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>{console.log(error)})