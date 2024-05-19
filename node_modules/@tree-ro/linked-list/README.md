#A simple implementation of a linkedList in JS. 


  append(value) {} - Appends a value to the end of the list. 

  prepend(value) {} - Appends a value at index 0 /| prepends the value to the full list.

  size(node = this, count = 1) {} - Returns the size of the linked list (largest index + 1).
  
  head() {} - Useless Method. Returns 'this'.

  tail(node = this) {} - Returns the last node in the list.

  at(index) {} Returns the node that has the passed index. 

  pop() {} - Removes the last item in the list.

  contains(value) {} - Returns true if the value exists within the linkedList.

  find(value) {} - Returns the index of a value and returns null if it doesn't exist.

  toString() {} - Returns the list as a formatted string: ( Node ) -> ( Node ) -> null.

  insertAt(value, index) {} - Inserts a new node/item with the value and index passed.

  removeAt(index) {} - Removes the node/item on the index passed.