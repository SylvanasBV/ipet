const Button = () => <button>Aceptar</button>

export default function App() {
const screem = () => alert("Don't touch the text :(")

  return (
    <form>
      {
        ["name","lastname","age"].map(name => <><label>{name}<input type="text" name={name} /></label><Button/></>)
      }
      <h1 onClick={screem} className="alert">Don't touch me</h1>
    </form>
  )
}