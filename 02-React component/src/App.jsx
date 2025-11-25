import cards from "./components/cards"
const App = () =>{

const user ="Prashant"
const age = 20
return(
  <div>
    <h1>Hello Guys, I am {user}</h1>
    <h2>and I am {age} year old </h2>
    {cards()}
  </div>
)
}

export default App
