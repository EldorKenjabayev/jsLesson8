let user = [
    {
        name: 'Eldor',
        lastname: 'Kenjabayev',
        age: 20,
        skills: ['Html', 'Css', 'Js', 'Sass'],
        phone: '+998904647446',
        email: 'eldorkenjabayev13@gmail.com',
    },
    {
        name: 'Eldor',
        lastname: 'Kenjabayev',
        age: 20,
        skills: ['Html', 'Css', 'Js', 'Sass'],
        phone: '+998904647446',
        email: 'eldorkenjabayev13@gmail.com',
    },
    {
        name: 'Eldor',
        lastname: 'Kenjabayev',
        age: 20,
        skills: ['Html', 'Css', 'Js', 'Sass'],
        phone: '+998904647446',
        email: 'eldorkenjabayev13@gmail.com',
    },
    {
        name: 'Eldor',
        lastname: 'Kenjabayev',
        age: 20,
        skills: ['Html', 'Css', 'Js', 'Sass'],
        phone: '+998904647446',
        email: 'eldorkenjabayev13@gmail.com',
    },
    {
        name: 'Eldor',
        lastname: 'Kenjabayev',
        age: 20,
        skills: ['Html', 'Css', 'Js', 'Sass'],
        phone: '+998904647446',
        email: 'eldorkenjabayev13@gmail.com',
    },
    {
        name: 'Eldor',
        lastname: 'Kenjabayev',
        age: 20,
        skills: ['Html', 'Css', 'Js', 'Sass'],
        phone: '+998904647446',
        email: 'eldorkenjabayev13@gmail.com',
    },
    {
        name: 'Eldor',
        lastname: 'Kenjabayev',
        age: 20,
        skills: ['Html', 'Css', 'Js', 'Sass'],
        phone: '+998904647446',
        email: 'eldorkenjabayev13@gmail.com',
    },
    {
        name: 'Eldor',
        lastname: 'Kenjabayev',
        age: 20,
        skills: ['Html', 'Css', 'Js', 'Sass'],
        phone: '+998904647446',
        email: 'eldorkenjabayev13@gmail.com',
    },
    {
        name: 'Eldor',
        lastname: 'Kenjabayev',
        age: 20,
        skills: ['Html', 'Css', 'Js', 'Sass'],
        phone: '+998904647446',
        email: 'eldorkenjabayev13@gmail.com',
    },
    {
        name: 'Sergey',
        lastname: 'Xaylov',
        age: 20,
        skills: ['Html', 'Css', 'C#', 'C++'],
        phone: '+99890999999',
        email: 'xaylovSergey12@gmail.com',
    },
]

let conteiner = document.getElementById('conteiner')
conteiner.style.width = '100%'
let table = document.createElement('table')
table.setAttribute('border', '1')
table.setAttribute('width', '80%')
table.setAttribute('style', 'border-collapse: collapse')
let thead = document.createElement('thead')
thead.style.width = '80%'
let tbody = document.createElement('tbody')
let t_val = ['id', 'Name', 'Last Name', 'Age', 'Skilss', 'Phone', 'Email']
for (let i = 0; i < t_val.length; i++) {
    let th = document.createElement('th')
    th.setAttribute('style', 'background-color: greenyellow')
    th.innerHTML += t_val[i]
    thead.append(th)
}

for (let i = 0; i < user.length; i++) {
    let tr = document.createElement('tr')
    let td_id = document.createElement('td')
    td_id.setAttribute('style', 'background-color: aquamarine')
    let td_name = document.createElement('td')
    td_name.setAttribute('style', 'background-color: red')
    let td_lastname = document.createElement('td')
    td_lastname.setAttribute('style', 'background-color: green')
    let td_age = document.createElement('td')
    td_age.setAttribute('style', 'background-color: greenyellow')
    let td_skills = document.createElement('td')
    td_skills.setAttribute('style', 'background-color: blue')
    let td_phone = document.createElement('td')
    td_phone.setAttribute('style', 'background-color: orange')
    let td_email = document.createElement('td')
    td_email.setAttribute('style', 'background-color: pink')

    td_id.innerHTML = i + 1
    td_name.innerHTML = user[i].name
    td_lastname.innerHTML = user[i].lastname
    td_age.innerHTML = user[i].age
    td_skills.innerHTML = user[i].skills
    td_phone.innerHTML = user[i].phone
    td_email.innerHTML = user[i].email

    tr.append(...[td_id, td_name, td_lastname, td_age, td_skills, td_phone, td_email])
    tbody.append(tr)
}
table.append(thead)
table.append(tbody)
conteiner.append(table)






