const box = document.querySelector(".container")
const btBack = document.querySelector(".btBack")
const btTela = document.querySelector("#inTela")

const hora = document.querySelector("#hora")
const min = document.querySelector("#min")
const seg = document.querySelector("#seg")

const day = document.querySelector("#dia")
const month = document.querySelector("#mes")
const year = document.querySelector("#ano")

btBack.addEventListener("click", () => {
    if(box.classList.contains('hidden')) {
        box.classList.remove('hidden')
        document.body.style.background = "#fff"
        document.body.style.color = "#212529"
        btBack.style.color = "#000"
    }else {
        box.classList.add('hidden')
        document.body.style.background = "#06080F"
        document.body.style.color = "#fff"
        btBack.style.color = "#fff"
    }   
})

btTela.addEventListener("click", () => {
    console.log("oi")
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
    
        if(newHora <= 9 ) {
            hora.innerHTML = "0" + newHora
        }
        if(newMin <= 9 ) {
            min.innerHTML = "0" + newMin
        }
        if(newSeg <= 9 ) {
            seg.innerHTML = "0" + newSeg
        }
    }

    return horaCerta()
}, 1000)

const calend = () => {
    const dataAtua = new Date();
    
    const newDia = dataAtua.getDay();
    const newMes = dataAtua.getMonth();
    const newAno = dataAtua.getFullYear()
    
    console.log(newAno,newDia, newMes)
}
calend()