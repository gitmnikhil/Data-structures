function node(value, next){
    this.value = value;
    this.next = next;
}

node.prototype.getValue = function(){
    return this.value;
}

node.prototype.getNextNode = function(){
    return this.next;
}

node.prototype.setNext = function(newNode){
    this.next = newNode;
}

node.prototype.deleteKthNode = function(position,currentPos){
    if(currentPos === undefined){
        currentPos = 0;
    }
    if(position === currentPos){
        return this;
    }else{
        currentPos++;
        let deletedNode = this.next.deleteKthNode(position,currentPos);
        if(deletedNode){
            this.next = deletedNode.next;
            deletedNode.next = null;
        }
    }
}

node.prototype.insert = function(value){
    if(this.next === null){
        let newNode = new node(value,null);
        this.next = newNode;
    }else{
        this.next.insert(value);
    }
}

node.prototype.traversal = function(){
    console.log(this.value, "->");
    if(this.next){
        this.next.traversal();
    }
}


let firstNode = new node(5,null);

firstNode.insert(6);
firstNode.insert(1);
firstNode.insert(4);
firstNode.insert(8);
firstNode.insert(3);

firstNode.traversal();
firstNode.deleteKthNode(2);
firstNode.traversal();

