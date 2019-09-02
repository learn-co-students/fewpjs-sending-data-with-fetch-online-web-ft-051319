// Add your code here

function submitData(pname, pemail) {
  let configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: `${pname}`,
      email: `${pemail}`
    })

  };
  let bodyNode=document.querySelector("body");

  return fetch("http://localhost:3000/users", configurationObject)
    .then(resp => resp.json())
    .then(json => {
        bodyNode.innerHTML += `${json.id} ${json.name} ${json.email}<br>`
    })
    .catch(function(error) {
      alert("Unauthorized access");
      bodyNode.innerHTML +=  `${error.message}<br>`
    })
}
