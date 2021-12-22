// Write an object with field name. obj.name = 'Hovhannes, Sona'; console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]


const obj = {
  _name: [],
  set firstNames(names){
    names.trim().split(', ').forEach(el=>{
       obj._name.push([el, el.length])
    })
  },
  get firstNames(){
      return obj._name;
  },

}


// Testing for a given string
obj.firstNames = 'Hovhannes, Sona';
console.log(obj.firstNames) // [['Hovhannes', 9], ['Sona', 4]]
