const URL = 'http://localhost:3000/toys'

function getAllToys() {
  return fetch(URL)
    .catch(error => console.log(error))
    .then(res => res.json())
}

function postNewToy(toyName, toyImage) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      name: toyName,
      image: toyImage,
      likes: 0
    })
  })
    .then((res) => res.json())
}

function patchLikeToy(toyId, likesNum) {
  fetch(`http://localhost:3000/toys/${toyId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      likes: likesNum
    })
  })
}
