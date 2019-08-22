// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
//
// // method: "POST" is missing from the object below
// let configObj = {
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
//
// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

// function submitData(name, email) {
//   fetch('http://localhost:3000/users', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify(name, email)
//   })
//   .then(res => res.json())
//   .then((newObject) => {
//     newObject.id;
//   })
// })


function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({name, email})
  })
  .then(res => res.json())
  .then((newUserObj) => {
    document.body.innerHTML = newUserObj['id'];
  })
  .catch( function ( error ) {
    document.body.innerHTML = error.message
  } )
}
