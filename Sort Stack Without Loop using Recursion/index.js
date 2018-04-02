function StackDS(){
    this.stack = [];
}

StackDS.prototype.push = function(num){
    this.stack[this.stack.length] = num;
}

StackDS.prototype.pop = function(){
    if(this.stack.length > 0){
        let popElement = this.stack[this.stack.length - 1];
        this.stack.splice(this.stack.length - 1, 1);
        return popElement;
    }    
}

StackDS.prototype.top = function(){
    if(this.stack.length > 0){
        return this.stack[this.stack.length - 1];
    }    
}

let stack = new StackDS();
stack.push(5);
stack.push(1);
stack.push(7);
stack.push(3);
stack.push(2);
stack.push(9);
stack.push(6);
stack.push(8);

function sort(element){
    let temp = stack.pop();
    if(temp){
        if(element < temp){
            sort(element);
            if(stack.top() > temp){
                sort(temp);
            }else{
                stack.push(temp);
            }
        }else{
            sort(temp);
            if(stack.top() > element){
                sort(element);
            }else{
                stack.push(element);
            }
        }
    }else{
        stack.push(element);
    }
}
