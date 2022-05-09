class Obj{
  names = "hello";
  constructor(){
    console.log("constructor")
  }
  print(){
    let container = document.getElementById("box");
    container.setAttribute("style", "background-color:yellow");
  }
}
interface Window{
  obj:Obj;
}
window.obj=new Obj();