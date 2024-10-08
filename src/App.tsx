import { useEffect, useState } from "react";
import "./App.css";

import apiClient, { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";

// Simulazione di connessione alla chat del server - Dati
/* const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting"); */

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
  const [isLoading, setLoading] = useState(false);
  // GET
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    // Questo axios.get restituisce un 'Promise', si tratta di un oggetto
    // che restituisce il risultato o il fallimento dell'operazione async.
    return () => cancel();
  }, []);
  // DELETE
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    apiClient
      .delete("/users/" + user.id)
      /*.then()  in questo caso non succede nulla perché è collegato ad un server fantoccio */
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  // POST
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Flo" };
    setUsers([newUser, ...users]);
    apiClient
      .post("/users/", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
    /* data: savedUser è un alias che rende più leggibile il tutto */
  };
  // UPDATE
  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    /* Dipende da come è strutturato il backend, ma se si sta modificando una sola prorpietà
    si può utilizzare il metodo 'patch', altrimenti 'put' */
    apiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}{" "}
      {isLoading && <div className="spinner-border"></div>}{" "}
      {/* In una normale applicazione si creerebbe un form a parte per creare uno user */}
      <button className="btn btn-primary mb-3 d-flex" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            /* d-flex converte ogni elemento della lista in un 'container' */
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              {/* mx-1 margin orizontal (asse x) 1 px */}
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );

  // In alternativa possiamo fare anche come sotto
  /*  useEffect(() => {
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
