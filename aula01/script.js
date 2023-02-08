//tipos de var
var total // escopo global mto paia

let num1 = 2 // escopo local mto melhor

const num2 = 3 // const = constante, sempre o mesmo valor, n da pra mudar e escopo local

/////////////////////////////////////////////////////////////////////////////////////////

function soma(n1, n2){
    let resultado = n1+n2
    console.log(`o resultado é: ${resultado}`)
}
function subtrai(n1, n2){
    let resultado = n1-n2
    console.log(`o resultado é: ${resultado}`)
}
function multiplica(n1, n2){
    let resultado = n1*n2
    console.log(`o resultado é: ${resultado}`)
}
function divide(n1, n2){
    if(n2==0){
        console.log('não é possivel dividir por 0, altere o valor de num2.')
    }
    let resultado = n1/n2
    console.log(`o resultado é: ${resultado}`)
}
// o js n tem um sistema de input nele, ent vc vai ali em cima e muda os resultados

//soma(num1, num2)// executa a function soma
//subtrai(num1, num2)// executa a function subtrai
//multiplica(num1, num2)// sim
//divide(num1, num2)// sim tambem


//se quiser fazer uma calculadora vc cria uma let que vai armazenar algo que determine a operacao e roda um switch case:


//console.log('1-soma\n2-subtração\n3-multiplicação\n4-divisão')// isso aqui seria pro user escolher a operação

/*
const ope = 2 // n tem input sim eh mto chato, vc tem q fazer manual
switch(ope){
    case 1:
        soma(num1,num2)
        break
    case 2:
        subtrai(num1,num2)
        break
    case 3:
        multiplica(num1,num2)
        break
    case 4:
        divide(num1,num2)
        break
    default:
        console.log("batata queimada")
        break
}
*/

// agr eh o mano for, porem vou usar todos os de repeticao:
let x = 3
function EhORepetes(x){
    if(x==1){
        for(let n=0; n<11; n++){
            console.log(n)
        }
    }else if(x==2){
        let n=0
        while(n<10){
            n++
            console.log(n)
        }
    }else if(x==3){
        let n=0
        do{
            n++
            console.log(n)
        }while(n<10)
    }
}
EhORepetes(x)