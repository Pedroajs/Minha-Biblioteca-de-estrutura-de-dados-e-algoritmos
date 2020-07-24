class Pilha{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        this.items.pop()
    }

    peek(){
        this.items[this.items.length - 1]
    }

    isEmpty(){
        this.items.length === 0;
    }
    
    clear(){
        this.items = []
    }

    size(){
        return this.items.length
    }
}

const pilha = new Pilha();
console.log(pilha);
pilha.push(10);
console.log(pilha);
pilha.push(12);
console.log(pilha);
pilha.push(14);
console.log(pilha);

console.log(pilha.toString());

// pilha.pop()
// console.log(pilha);
// pilha.pop();
// console.log(pilha);
// pilha.pop()
// console.log(pilha);

