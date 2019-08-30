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
