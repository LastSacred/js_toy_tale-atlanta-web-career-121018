const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const toyCollection = document.querySelector('#toy-collection')
let addToy = false

document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(displayToys)
})

function renderToy(toy) {
  const toyCard = document.createElement('div')
  toyCard.className = 'card'
  toyCard.dataset.id = toy.id
  toyCollection.appendChild(toyCard)

  const toyName = document.createElement('h2')
  toyName.innerHTML = toy.name
  toyCard.appendChild(toyName)

  const toyAvatar = document.createElement('img')
  toyAvatar.className = 'toy-avatar'
  toyAvatar.src = toy.image
  toyCard.appendChild(toyAvatar)

  const toyLikes = document.createElement('p')
  toyLikes.name = 'likes'
  toyLikes.innerHTML = toy.likes + " Likes"
  toyCard.appendChild(toyLikes)

  const likeBtn = document.createElement('button')
  likeBtn.className = 'like-btn'
  likeBtn.innerHTML = 'Like <3'
  toyCard.appendChild(likeBtn)

  likeBtn.addEventListener('click', likeToy)
}

function displayToys(toys) {
  toys.forEach(renderToy)
}

addBtn.addEventListener('click', (event) => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'

    toyForm.addEventListener('submit', newToy)
  } else {
    toyForm.style.display = 'none'
  }
})

function newToy(event) {
  event.preventDefault()

  const name = event.target.name.value
  const image = event.target.image.value

  fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      name: name,
      image: image,
      likes: 0
    })
  })
    .then((res) => res.json())
    .then(renderToy)

    event.target.reset()
}

function likeToy(event) {
  const toyId = event.target.parentNode.dataset.id
  const toyLikes = event.target.parentNode.children[2]
  let likesNum = parseInt(toyLikes.innerHTML)
  toyLikes.innerHTML = ++likesNum + ' Likes'


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


// OR HERE!
