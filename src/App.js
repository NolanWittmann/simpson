import axios from "axios";
import React, {useState , useEffect} from "react"

function App() {

const [quote, setQuote] = useState("Salut Coco")

const [count, setCounter] = useState(0)

useEffect(() => {
  axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
  
  .then(resp => setQuote(resp.data[0]))
  
}, [count])

  return (
    <div className="App">
      <p>{quote.character}</p>
      <p>{quote.quote}</p>
      <img src={quote.image} alt="" />
     <button onClick={() => setCounter(count =>count +1)}>Clique</button>
    </div>
  );
}

export default App;
