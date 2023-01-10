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

    pessoas.map((item) =>  {

     
    })


})


