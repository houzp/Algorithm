function Stack(){
      this.items = [];
    }
    Stack.prototype = {
      constructor:Stack,
      push:function(element){
        this.items.push(element);
      },
      pop:function(){
        return this.items.pop();
      },
      peek:function(){
        return this.items[this.items.length - 1];
      },
      isEmpty:function(){
        return this.items.length == 0;
      },
      clear:function(){
        this.items = [];
      },
      size:function(){
        return this.items.length;
      },
      print:function(){
        console.log(this.items.toString());
      }
}
