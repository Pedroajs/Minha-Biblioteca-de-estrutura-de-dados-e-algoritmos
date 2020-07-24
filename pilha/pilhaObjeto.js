class Pilha{
    constructor(){
        this.count = 0
        this.items = {}
    }

    push(element){
        this.items[this.count] = element;
        this.count++
    }

    pop(){
        if(this.items.isEmpty()) return undefined;
        this.count--
        const resultado = this.items[this.count];
        delete this.items[this.count];
        return resultado;
    }

    isEmpty(){
        this.items === 0;
    }
    
    peek(){
        if(this.items.isEmpty()) return undefined;
        return this.items[this.count -1];
    }

    clear(){
        this.item = {}
        this.count = 0;
    }

    size(){
        return this.count;
    }

    toString(){
        if(this.isEmpty()) return '';
        let objectString = `${this.items[0]}`;

        for(let i = 0; i < this.count; i++){
            objectString =  `${objectString}, ${this.items[i]}`
        }
        return objectString;
    }
}

const pilha = new Pilha();
pilha.push(10);
pilha.push(12);
pilha.push(14);

console.log(pilha);

console.log(pilha.toString());