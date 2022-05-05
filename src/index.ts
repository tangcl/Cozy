
class Obj{
  names = "hello";
  constructor(){
    console.log("constructor")
  }
  print():string{
    return this.names;
  }
}
interface Window{
  obj:Obj;
}
window.obj=new Obj()