const form = document.querySelector("form")

const InputUser = document.querySelector(".nome")

const InputAge = document.querySelector(".idade")

const result = document.querySelector(".result")


let pessoas = [];


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const user = InputUser.value

    const age = InputAge.value

    pessoas.push(
        { nome: user, idade: age }
    )

        result.innerHTML = ""

    pessoas.map((item) => {

        let NewUser = document.createElement("div")
        NewUser.classList.add("content")
        NewUser.innerHTML = `
            <p>Usuário: ${item.nome}</p>
            <p>Idade: ${item.idade} anos</p>
     `
        result.appendChild(NewUser)
    })


})


