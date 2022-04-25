
function linkedlist(){
    this.head = null; 
  }
  
  function Node (data){
    this.data = data;
    this.next = null;
  }
  
  
  linkedlist.prototype.add = function (dato){
    let nodo = new Node(dato);
     
    if ( this.head === null) {
      this.head = nodo;
    } else {
     let current = this.head
      while(current.next){
        
         current = current.next;
      }
    current.next = nodo;
    }
    return nodo;
    
  };
  
  
  var list = new linkedlist();