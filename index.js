// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
 
// method: "POST" is missing from the object below
// let configObj = {
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({name: name, email:email})
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


function submitData(name,email){
  return fetch('http://localhost:3000/users',{
    method: 'POST',
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify({name: name, email: email})
  })
  .then(function(response){
    return response.json();
  })
  .then(function(object){
    let id = object.id
    document.body.innerHTML+=`<p>${id}</p>`
  })
  .catch(function(error){
    alert('Bad things!')
    document.body.innerHTML+=`<div>${error.message}</div>`
  });
}
