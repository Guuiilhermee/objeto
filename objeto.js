class Garrafa{
    constructor(tamanho, altura, raio, tampa, rotulo){
        this.tamanho = tamanho // pequeno, médio, grande
        this.altura = altura // número real
        this.raio = raio // número real
        this.tampa = tampa // cor (exemplo: azul)
        this.rotulo = rotulo // cor (exemblo: vermelho)
    }
    calcularAreaBase(){
        return Math.PI * this.raio * this.raio
    }
    calcularVolume(){
        return this.altura * this.calcularAreaBase()
    }
    imprimir(val){
        console.log(val)
    }
}

module.exports = Garrafa