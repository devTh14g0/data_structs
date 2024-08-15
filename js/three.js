function binaryThree(){
  this.left = left
  this.right = right
  this.node == null
        

  var root = null

  this.insert= function (key){
   if(root=null){
    root = newNode
   }else{
    insertNode(root,newNode)
   }
  }
  var insertNode = function (node,newNode){
    if(node.key > newNode.key){
      if(node.left == null){
        node.ledt = newNode
      }else{
        insertNode(node.left , newNode)
      }
    }else{
      if(node.right === null){
        node.right = newNode
      }else{
        insertNode(node.right,newNode)
      }
    }
  } 
  var searchNode = function (node,key){
    if(node === null){
      return false
    }
    if(key < node.key){
      return searchNode(node.left,key)
    }else if(key > node.key) {
      return searchNode(node.right,key)
    }else{
      return true
    }
  }

  this.min = function (){
    return minNode(root)
  }

  var minNode = function (node){
    if(node){
      while(node && node.left !== null){
        node = node.left
      }
      return node.key
    }
    return null
  }

  this.max = function (){
    return maxNode(root)
  }

  var maxNode = function (node){
     if(node){
      while(node && node.right !== null){
        node = node.right
      }
      return node.key
     }
     return null
  }

  var inOrderTraverseNode = function (node,callback){
    if(node !==null){
      inOrderTraverseNode(node.left,callback)
      callback(node.key)
      inOrderTraverseNode(node.right,callback)
    }
    this.preOrderTraverse = function (callback){
      this.preOrderTraverse(root,callback)
    }
    var preOrderTraverse = function (node,callback){
      if(node !==null){
        callback(node.key)
        preOrderTraverse(node.left,callback)
        preOrderTraverse(node.right,callback)
      }

      this.postOrderTraverse = function (node,callback){
        if(node!==null){
          postOrderTraverse(node.left,callback)
          postOrderTraverse(node.right,callback)
          callback(node.key)
        }
      }
    }
  }
}