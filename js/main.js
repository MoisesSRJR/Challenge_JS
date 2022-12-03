
const menuItens = document.querySelector('.btn-group-vertical')
menuItens.style.flexDirection = 'row'

const itens = menuItens.querySelectorAll('button')
for (var item of itens) {
    item.style.borderRadius = '5px'
    item.style.marginRight = '5px'
    item.style.width = 'auto'
}

const header = document.querySelector('.jumbotron')
header.style.backgroundColor = '#667480'

header.style.color = '#fff'

const buttonHeader = header.getElementsByTagName('a')
buttonHeader[0].style.backgroundColor = '#3eb031'
buttonHeader[0].style.borderColor = '#3eb031'

header.style.textAlign = 'right'

const cards = document.querySelectorAll('.col-lg-3')
cards[0].style.order = 1
cards[1].style.order = 3
cards[2].style.order = 2
cards[3].style.order = 0

const buttonCard = document.querySelectorAll('.col-lg-3')[0].getElementsByTagName('a')
buttonCard[0].style.backgroundColor = '#3eb031'
buttonCard[0].style.borderColor = '#3eb031'

const firstItem = document.querySelector('.list-group').firstElementChild
firstItem.classList.remove('active')

const fourthItem = document.createElement('li')
fourthItem.innerHTML = 'Quarto item';
fourthItem.className = 'list-group-item active'
document.querySelector('.list-group').appendChild(fourthItem)

const fifthItem = document.createElement('li')
fifthItem.innerHTML = 'Quinto item';
fifthItem.className = 'list-group-item'
document.querySelector('.list-group').appendChild(fifthItem)

