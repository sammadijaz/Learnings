import Navbar from "./components/Navbar"

const App = () => {

const users = ["Sam", "Nina", "Albert"];

const displayUsers = users.map((eachUser) => { return (
  <h1 key={eachUser}>{ eachUser }</h1>
)});

const data = "Sam";

  return (
    <>
    <div>
      App
      <Navbar/>
    </div>

    
    <div>
      { displayUsers }
    </div>

    {/* Conditional rendering */}
    <div>
      { data === "Sam" ? <h1>He is Sam</h1>: <h1>She is Nina</h1> }
    </div>
    </>
  )
}

export default App
