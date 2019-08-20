// Add your code here
const destinationURL = "http://localhost:3000/dogs";
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
    })
};

fetch(destinationURL, configurationObject)
.then(response => response.json())
.then(object => console.log(object));

function submitData(userName, userEmail) {
    let url = "http://localhost:3000/users";
    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }
    let body = document.querySelector("body");
    return fetch(url, configObject)
    .then(response => response.json())
    .then(object => body.innerHTML = object.id)
    .catch(function(error){
        alert("Error detected!");
        body.innerHTML = error.message;
    });
};