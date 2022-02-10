function proximo(){
    let linha1=document.getElementById('linhajogador1')
    let linha2=document.getElementById('linhajogador2')
    let linha3=document.getElementById('linhajogador3')
    let linha4=document.getElementById('linhajogador4')
    
    let p1=document.getElementById('textjogador1')
    let p2=document.getElementById('textjogador2')
    let p3=document.getElementById('textjogador3')
    let p4=document.getElementById('textjogador4')
    
    let j1=document.getElementById('player1')
    let j2=document.getElementById('player2')
    let j3=document.getElementById('player3')
    let j4=document.getElementById('player4')
    
    
    j1.innerText=`${p1.value}`
    j2.innerText=`${p2.value}`
    j3.innerText=`${p3.value}`
    j4.innerText=`${p4.value}`
    
    if(p1.value.length==0){
        linha1.style.display="none"
    }
    
    if(p2.value.length==0){
        linha2.style.display="none"
    } 
    
    if(p3.value.length==0){
        linha3.style.display="none"
    }
    
    if(p4.value.length==0){
        linha4.style.display="none"
    }

    let tabela=document.getElementById('tabelaprincipal')
    tabela.style.display="block"
    let informacoes=document.getElementById('infojogadores')
    informacoes.style.display="none"
}
let max =document.getElementById('maxpontos')
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
    if(pontosj1>=max.value){
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
    if(pontosj2>=max.value){
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
    if(pontosj3>=max.value){
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
    if(pontosj4>=max.value){
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
