/*===================
CALCULAR APOSENTADORIA
=====================*/

//dados dos clientes


const nome = 'Silvana'
const idade = 60
const sexo = 'F'
const contribuicao = 25

const calculoCont = idade + contribuicao

console.log(calculoCont)
//esse so funciona com um dos dois, so com mulher ou so com homem

//mulher
if(calculoCont >= 85) {
    if(sexo == 'F') {
        console.log('você pode se aposentar!')
    } else{
        console.log('você não é mulher!')
    }
}else{
    console.log('você não atingiu a soma de 85 anos')
}


