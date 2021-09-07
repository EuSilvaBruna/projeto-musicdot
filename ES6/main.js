class List{
    constructor(){
        this.data = []
    }

    inserir(nome){
        this.data.push(nome)
        console.log(this.data)
    }
}


class toList extends List{
    constructor(){
        super()
        this.usuario = 'Silva'
    }

    getUsuario(){
        console.log(this.usuario)
    }

    static soma(a,b){
        return a+b
    }
   
}



const lista = new toList()
document.getElementById('todo').onclick = function(){
    lista.inserir('Bruna')
    lista.getUsuario()
}

console.log(toList.soma(1,10)) 

const nome = 'Bruna'
console.log(nome)

function teste(x){
    let y = 4
    if(x > 2){
        y=6
        console.log(x,y)
    }
}
console.log(teste(10))


var nome = 'Bruna'

nome = 'Fora Bozo'

console.log(nome)