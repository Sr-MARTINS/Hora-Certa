const btBack = document.querySelector("#btBack")

const hora = document.querySelector("#hora")
const min = document.querySelector("#min")
const seg = document.querySelector("#seg")

btBack.addEventListener("click", () => {
    document.body.style.backgroundColor="red"
    // if(document.style)
})

setInterval(() => {
    const horaCerta = () => {
        const horaAtual = new Date();
        const newHora = horaAtual.getHours()
        const newMin = horaAtual.getMinutes()
        const newSeg = horaAtual.getSeconds()
    
        hora.innerHTML = newHora
        min.innerHTML = newMin
        seg.innerHTML = newSeg
    }

    return horaCerta()
}, 1000)