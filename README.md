# calculo-de-aposentadoria

//dados
const nome = 'carlos'
const idade = 60
const sexo = 'F'
const contribuicao = 35

//soma
const calculoCont = idade + contribuicao
console.log(calculoCont)

homemcont = sexo == 'M' && contribuicao >= 35 && calculoCont >= 95
mulhercont = sexo == 'F' && contribuicao >= 25 && calculoCont >= 85

if(homemcont || mulhercont) {
    console.log('pode se aposentar')
} else{
    console.log('nao pode se aposentar')
}
