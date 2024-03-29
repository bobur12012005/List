let form = document.forms.namedItem('addBody')
let elements = document.querySelector('.elements')
let modal = document.querySelector('#modal')
let closeModal = document.querySelector('#ok')
let users = []
let nameRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/

form.onsubmit = (e) => {
    e.preventDefault()

    let user = {
        id: Math.random(),
        name: new FormData(form).get('name'),
        year: new Date().getFullYear() - new FormData(form).get('age')
    }

    if (user.name !== '' && user.year >= 1900 && nameRegex.test(user.name)) {
        users.push(user)
        reload(users, elements)
    } else {
        modal.style.display = 'flex'

        closeModal.onclick = () => {
            modal.style.display = 'none'
        }
    }

    form.reset()
}

function reload(arr, place) {
    place.innerHTML = ''
    let idx = 0

    for (let item of arr) {
        let el = document.createElement('div')
        let num = document.createElement('span')
        let namee = document.createElement('span')
        let year = document.createElement('span')
        let btns = document.createElement('div')
        let edit = document.createElement('button')
        let del = document.createElement('button')
        let edit_img = document.createElement('img')
        let del_img = document.createElement('img')

        el.classList.add('el')
        num.classList.add('num')
        namee.classList.add('name')
        year.classList.add('year')
        btns.classList.add('btns')
        setTimeout(() => {
            el.classList.add('animate')
        }, 100 * idx)

        num.innerHTML = idx += 1
        namee.innerHTML = item.name
        year.innerHTML = item.year

        edit_img.src = './icons/edit.png'
        del_img.src = './icons/delete.png'

        place.append(el)
        el.append(num, namee, year, btns)
        btns.append(edit, del)
        edit.append(edit_img)
        del.append(del_img)
    }
}