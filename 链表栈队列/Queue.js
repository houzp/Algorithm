function Queue(){
  this.items = [];
}
Queue.prototype = {
  constructor:Queue,
  enqueue:function(elements){
    this.items.push(elements);
  },
  dequeue:function(){
    return this.items.shift();
  },
  front:function(){
    return this.items[0];
  },
  isEmpty:function(){
    return this.items.length == 0;
  },
  size:function(){
    return this.items.length;
  },
  clear:function(){
    this.items = [];
  },
  print:function(){
    console.log(this.items.toString());
  }
}
