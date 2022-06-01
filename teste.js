const buttonRposa = document.getElementById("change-raposas")
const imagemRaposa = document.getElementById("raposas")

const api = "https://randomfox.ca/floof/?ref=apilist.fun"

async function pegaImg () {
    const apiJson = await fetch(api)
    .then((x)=> x.json())
    .catch((err)=>{
        console.log(err)
    })
    return apiJson.image
}

async function trocaRaposa() {
    imagemRaposa.src = await pegaImg()
    imagemRaposa.style =  " animation: shake 0.4s;"
}