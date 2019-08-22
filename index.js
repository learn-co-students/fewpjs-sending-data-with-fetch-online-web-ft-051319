// Add your code here

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
     .then(function(response) {
        return response.json();
       })
       .then(function(object) {
           let bodyNode = document.querySelector('body');
           let paragraph = document.createElement('p');
           paragraph.innerHTML = `${object.id}`;
           bodyNode.append(paragraph);
       })
       .catch(function(error) {
        let bodyNode = document.querySelector('body');
        let paragraph = document.createElement('p');
        alert("Unauthorized Access");
        paragraph.innerHTML = error.message;
        bodyNode.append(paragraph)
      });
};

submitData();