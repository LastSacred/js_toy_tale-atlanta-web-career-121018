function renderToy(toy) {
  const toyCard = document.createElement('div')
  toyCard.className = 'card'
  toyCard.dataset.id = toy.id
  toyCollection.appendChild(toyCard)

  const toyName = document.createElement('h2')
  toyName.textContent = toy.name
  toyCard.appendChild(toyName)

  const toyAvatar = document.createElement('img')
  toyAvatar.className = 'toy-avatar'
  toyAvatar.src = toy.image
  toyCard.appendChild(toyAvatar)

  const toyLikes = document.createElement('p')
  toyLikes.name = 'likes'
  toyLikes.textContent = toy.likes + " Likes"
  toyCard.appendChild(toyLikes)

  const likeBtn = document.createElement('button')
  likeBtn.className = 'like-btn'
  likeBtn.textContent = 'Like <3'
  toyCard.appendChild(likeBtn)
  likeBtn.addEventListener('click', likeToy)
}

function renderToys(toys) {
  toys.forEach(renderToy)
}
