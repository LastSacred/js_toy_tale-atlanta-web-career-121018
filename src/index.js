const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const toyCollection = document.querySelector('#toy-collection')
let addToy = false

document.addEventListener('DOMContentLoaded', () => {
  getAllToys()
    .then(renderToys)
})

addBtn.addEventListener('click', (event) => {
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

  const toyName = event.target.name.value
  const toyImage = event.target.image.value

  postNewToy(toyName, toyImage)
    .then(renderToy)

  event.target.reset()
}

function likeToy(event) {
  const toyId = event.target.parentElement.dataset.id
  const toyLikes = event.target.parentElement.querySelector('p')
  let likesNum = parseInt(toyLikes.textContent)

  toyLikes.textContent = ++likesNum + ' Likes'

  patchLikeToy(toyId, likesNum)
}
