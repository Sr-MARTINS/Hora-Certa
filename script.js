const box = document.querySelector(".container")
const btBack = document.querySelector(".btBack")
const btCaixa = document.querySelector("#btCaixa")
const btTela = document.querySelector("#inTela")
const icons = document.querySelectorAll(".icons")

const hora = document.querySelector("#hora")
const min = document.querySelector("#min")
const seg = document.querySelector("#seg")

const day = document.querySelector("#dia")
const month = document.querySelector("#mes")
const year = document.querySelector("#ano")

console.log(icons)
btBack.addEventListener("click", () => {
    if(box.classList.contains('hidden')) {
        box.classList.remove('hidden')
        night()

    }else {
        box.classList.add('hidden')
        dai()
    }   
})

const night = () => {
    document.body.style.background = "#fff"
        document.body.style.color = "#212529"
        btBack.style.color = "#000"
        btCaixa.style.color = "#000"
}
const dai = () => {
    document.body.style.background = "#06080F"
        document.body.style.color = "#fff"
        btBack.style.color = "#fff"
        btCaixa.style.color = "#fff"
}

btTela.addEventListener("click", () => {
    toggleFullscreen()
})


function toggleFullscreen() {
  if (!document.fullscreenElement) {
    box.requestFullscreen().catch(err => {
      console.error(`Erro ao ativar fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

// Adicionar eventos para gerenciar estilos
box.addEventListener('fullscreenchange', () => {
  if (document.requestFullscreen) {
    console.log('Entrou no modo fullscreen');
    night()

  } else {
    console.log('Saiu do modo fullscreen');
    dai()
  }
});


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
    
    const newDia = dataAtua.getDate();
    const newMes = dataAtua.getMonth() + 1;
    const newAno = dataAtua.getFullYear()
    
    day.innerHTML = newDia
    month.innerHTML = newMes
    year.innerHTML = newAno
    
    if(newDia < 10) {
        day.innerHTML = "0" + newDia   
    } else if (newMes < 10) {
        month.innerHTML = "0" + newMes
    }
}
calend()