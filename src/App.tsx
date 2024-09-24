import { useEffect, useRef, useState } from "react";
import "./App.css";
import { ProductList } from "./components/ProductList";
import axios, { AxiosError } from "axios";
// Simulazione di connessione alla chat del server - Dati
const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

interface User {
  id: number;
  name: string;
}

function App() {
  /*  const ref = useRef<HTMLInputElement>(null);
  // Side Effect - significa che questa riga di codice sta modificando
  //qualcosa al di fuori di questo componente, quindi non è più 'Puro'
   //if (ref.current) ref.current.focus();

  // Invece del semplice if usato sopra, modifichiamo così:
  // afterRender - questa funzione verrà chiamata dopo il render
  useEffect(() => {
    // Side Effect
    if (ref.current) ref.current.focus();
  });
  // Possiamo anche chiamare più side effects che producono divrsi risultati:
  useEffect(() => {
    document.title = "My App";
  });

  return (
    <>
      <input ref={ref} type="text" className="form-controll"></input>
    </>
  ); */
  // useEffect e il passaggio di dati da componente ProductList
  /*   const [category, setCategory] = useState("");

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value={""}></option>
        <option value={"Clothing"}>Clothing</option>
        <option value={"Household"}>Household</option>
        <option></option>
      </select>
      <ProductList category={category} />
    </div> 
  );*/

  // Simulazione di connessioni alla chat del server
  /*   useEffect(() => {
    connect();
    // CleanUp function
    return () => disconnect();
  }); */

  // Collegamento con il back (Dati esempio)
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // get -> await promise .> res /res
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name}</li>
        ))}
      </ul>
    </>
  );

  // In alternativa possiamo fare anche come sotto (più pulito)
  /*  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
    // Questo axios.get restituisce un 'Promise', si tratta di un oggetto
    // che restituisce il risultato o il fallimento dell'operazione async.
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name}</li>
        ))}
      </ul>
    </>
  ); */
}
// ctrl + p per la ricerca
// plugin: ES7 react permette di velocizzare alcuni processi (rafce per instanziare un componente)
// npm i bootstrap@5.3.3
// npm i react-icons
// npm i immer
//---
// npm i react-hook-form
// npm i zod
// npm i @hookform/resolvers
//---
// Libreria per recuperare dati da remoto
// npm i axios
export default App;
