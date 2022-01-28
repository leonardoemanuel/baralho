/*perguntas*/
let p1=window.prompt('Jogador 1 :')
let p2=window.prompt('Jogador 2 :')
let p3=window.prompt('Jogador 3 :')
let p4=window.prompt('Jogador 4 :')
let max =window.prompt('Pontos maximos por partidas')
if(max.valueOf.length==0){
    max=4
}

let j1=document.getElementById('player1')
let j2=document.getElementById('player2')
let j3=document.getElementById('player3')
let j4=document.getElementById('player4')

j1.innerText=`${p1}`
j2.innerText=`${p2}`
j3.innerText=`${p3}`
j4.innerText=`${p4}`
/*pontos iniciais*/
let pontosj1=0
let pontosj2=0
let quedasj1=0
let quedasj2=0
let pontosj3=0
let pontosj4=0
let quedasj3=0
let quedasj4=0

let pj2=document.getElementById('pontosj2')
let qj2=document.getElementById('quedasj2')
let pj1=document.getElementById('pontosj1')
let qj1=document.getElementById('quedasj1')
let pj3=document.getElementById('pontosj3')
let qj3=document.getElementById('quedasj3')
let pj4=document.getElementById('pontosj4')
let qj4=document.getElementById('quedasj4')

function adicionarj1(){
    pontosj1+=1
    if(pontosj1>=max){
        quedasj1++
        pontosj1-=pontosj1
        pontosj2-=pontosj2
        pontosj3-=pontosj3
        pontosj4-=pontosj4
        pj2.innerText=`${pontosj2}`
        pj1.innerText=`${pontosj1}`
        pj3.innerText=`${pontosj3}`
        pj4.innerText=`${pontosj4}`
    }
    pj1.innerText=`${pontosj1}`
    qj1.innerText=`${quedasj1}`
}
function adicionarj2(){
    pontosj2+=1
    if(pontosj2>=max){
        quedasj2++
        pontosj1-=pontosj1
        pontosj2-=pontosj2
        pontosj3-=pontosj3
        pontosj4-=pontosj4
        pj2.innerText=`${pontosj2}`
        pj1.innerText=`${pontosj1}`
        pj3.innerText=`${pontosj3}`
        pj4.innerText=`${pontosj4}`
    }
    pj2.innerText=`${pontosj2}`
    qj2.innerText=`${quedasj2}`
}
function adicionarj3(){
    pontosj3+=1
    if(pontosj3>=max){
        quedasj3++
        pontosj1-=pontosj1
        pontosj2-=pontosj2
        pontosj3-=pontosj3
        pontosj4-=pontosj4
        pj2.innerText=`${pontosj2}`
        pj1.innerText=`${pontosj1}`
        pj3.innerText=`${pontosj3}`
        pj4.innerText=`${pontosj4}`
    }
    pj3.innerText=`${pontosj3}`
    qj3.innerText=`${quedasj3}`
}
function adicionarj4(){
    pontosj4+=1
    if(pontosj4>=max){
        quedasj4++
        pontosj1-=pontosj1
        pontosj2-=pontosj2
        pontosj3-=pontosj3
        pontosj4-=pontosj4
        pj2.innerText=`${pontosj2}`
        pj1.innerText=`${pontosj1}`
        pj3.innerText=`${pontosj3}`
        pj4.innerText=`${pontosj4}`
    }
    pj4.innerText=`${pontosj4}`
    qj4.innerText=`${quedasj4}`
}
