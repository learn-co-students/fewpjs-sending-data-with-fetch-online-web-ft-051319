// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     });

function createConfigObj(name, email) {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    }
    return configObj
}

function submitData(name, email) {
    let configObject = createConfigObj(name, email);

    return fetch("http://localhost:3000/users", configObject)
        .then(function(response) {
            return response.json();
        })
        .then(function(userObject) {
            let body = document.querySelector("body script")

            body.innerHTML += `<p>${userObject.id}</p>`
            // let p = document.createElement("p")

            // p.innerText = `${userObject["id"]}`
            // body.appendChild(p)
        })
        .catch(function(error) {
            let body = document.querySelector("body script")

            body.innerHTML += `<p>${error.message}</p>`
        })
}