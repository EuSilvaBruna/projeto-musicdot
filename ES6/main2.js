const arr = [1,2,3,4,5,8,9]

const newArr = arr.map(function(item){
    return item * 2;
})

console.log(newArr)


const soma = arr.reduce(function(total,next){
    return total + next;
})

console.log(soma)


const filter = arr.filter(function(item){
    return item % 2 ===0;
})

console.log(filter)

const find = arr.find(function(item){
    return item === 4;
})

console.log(find)


const newArr = arr.map(item => item *2)

console.log(newArr)

const teste = () => [1,2,3]

console.log(teste())
 

const test = () => {return {nome:'Bruna'}}

console.log(teste())

function soma (a,b){
    return a + b
}

console.log(1) //Vai aparecer undefine

function soma2(a=1,b=2){
    return a + b
}

console.log(soma(1,5))


/* Desestruturação*/

const usuario ={
    nome: 'Bruna',
    idade:24,
    endereco:{
        rua: 'Av. Lomanto',
        cidade:'Jequié'
    }
}

const nome = usuario.nome
const idade = usuario.idade


const {nome,idade} =  usuario

const {nome,idade, endereco:{cidade}} =  usuario


function mostraNome(usuario){
    console.log(usuario.nome)
}
mostraNome(usuario)

function mostraNome2({nome}){
    console.log(nome)
}
mostraNome2(usuario)

/* Rest */

const {nome,...resto} = usuario
console.log(nome)
console.log(resto)



const arr = [1,2,3,4]

const [a,b, ...c] = arr

console.log(c)


function soma(a,b,c,d){
    return a + b + c + d
}
console.log(soma(1,2,3,4))

function soma2(...params){
    return params.reduce((total,next) => total + next)
}

console.log(soma2(1,2,3,4,5,6,7))



/* Spread */

const usuario1 = {
    nome:'Bruna',
    idade: 24,
    empresa: 'VASP'
}

const usuario2 = {...usuario1, nome: 'LULA'}
console.log(usuario2)


/* Templates */

const idade = 24
const nome = 'Bruna'

console.log('Meu nome é:' + nome + ' minha idade é: '+ idade + 'anos') // da forma normal

console.log(`Meu nome é ${nome} e minha idade é ${idade}`)


/* short */

const usuario_short = {
    nome : nome,
    idade: idade,
    empresa: 'hello telecomunicações'
}

const usuario_short = {
    nome,
    idade, 
    empresa: 'uesb'
}

console.log(usuario_short)