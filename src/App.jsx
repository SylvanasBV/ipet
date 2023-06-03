/*const Button = () => <button>Aceptar</button>*/
import ItemListContainer from "./container/ItemListContainer";
import NavBar from "./components/NavBar";
import Counter from "./components/Counter";
import "./App.css";

export default function App() {
/*const screem = () => alert("Don't touch the text :(")*/

  return (

    <div className="container">
      <NavBar/>
      <ItemListContainer greeting={"Welcome to IPET"}/>
      <Counter/>
    </div>

   /* <form>
    {
      ["name","lastname","age"].map(name => <><label>{name}<input type="text" name={name} /></label><Button/></>)
    }
    <h1 onClick={screem} className="alert">Don't touch me</h1>
    </form>*/
  )
}