import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

// Simulazione di connessione alla chat del server - Dati
/* const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting"); */

// function App() {
//   /*  const ref = useRef<HTMLInputElement>(null);
//   // Side Effect - significa che questa riga di codice sta modificando
//   //qualcosa al di fuori di questo componente, quindi non è più 'Puro'
//    //if (ref.current) ref.current.focus();

//   // Invece del semplice if usato sopra, modifichiamo così:
//   // afterRender - questa funzione verrà chiamata dopo il render
//   useEffect(() => {
//     // Side Effect
//     if (ref.current) ref.current.focus();
//   });
//   // Possiamo anche chiamare più side effects che producono divrsi risultati:
//   useEffect(() => {
//     document.title = "My App";
//   });

//   return (
//     <>
//       <input ref={ref} type="text" className="form-controll"></input>
//     </>
//   ); */
//   // useEffect e il passaggio di dati da componente ProductList
//   /*   const [category, setCategory] = useState("");

//   return (
//     <div>
//       <select
//         className="form-select"
//         onChange={(event) => setCategory(event.target.value)}
//       >
//         <option value={""}></option>
//         <option value={"Clothing"}>Clothing</option>
//         <option value={"Household"}>Household</option>
//         <option></option>
//       </select>
//       <ProductList category={category} />
//     </div>
//   );*/

//   // Simulazione di connessioni alla chat del server
//   /*   useEffect(() => {
//     connect();
//     // CleanUp function
//     return () => disconnect();
//   }); */

//   // Con questa costante chiamiamo le funzioni e i dati che ci servono (un pò come chiamare un service su java)
//   const { users, error, isLoading, setUsers, setError } = useUsers();
//   // DELETE
//   const deleteUser = (user: User) => {
//     const originalUsers = [...users];
//     setUsers(users.filter((u) => u.id !== user.id));
//     userService
//       .delete(user.id)
//       /*.then()  in questo caso non succede nulla perché è collegato ad un server fantoccio */
//       .catch((err) => {
//         setError(err.message);
//         setUsers(originalUsers);
//       });
//   };
//   // POST
//   const addUser = () => {
//     const originalUsers = [...users];
//     const newUser = { id: 0, name: "Flo" };
//     setUsers([newUser, ...users]);
//     userService
//       .create(newUser)
//       .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
//       .catch((err) => {
//         setError(err.message);
//         setUsers(originalUsers);
//       });
//     /* data: savedUser è un alias che rende più leggibile il tutto */
//   };
//   // UPDATE
//   const updateUser = (user: User) => {
//     const originalUsers = [...users];
//     const updatedUser = { ...user, name: user.name + "!" };
//     setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

//     /* Dipende da come è strutturato il backend, ma se si sta modificando una sola prorpietà
//     si può utilizzare il metodo 'patch', altrimenti 'put' */
//     userService.update(updatedUser).catch((err) => {
//       setError(err.message);
//       setUsers(originalUsers);
//     });
//   };
//   return (
//     <>
//       {error && <p className="text-danger">{error}</p>}{" "}
//       {isLoading && <div className="spinner-border"></div>}{" "}
//       {/* In una normale applicazione si creerebbe un form a parte per creare uno user */}
//       <button className="btn btn-primary mb-3 d-flex" onClick={addUser}>
//         Add
//       </button>
//       <ul className="list-group">
//         {users.map((user) => (
//           <li
//             key={user.id}
//             /* d-flex converte ogni elemento della lista in un 'container' */
//             className="list-group-item d-flex justify-content-between"
//           >
//             {user.name}
//             <div>
//               {/* mx-1 margin orizontal (asse x) 1 px */}
//               <button
//                 className="btn btn-outline-secondary mx-1"
//                 onClick={() => updateUser(user)}
//               >
//                 Update
//               </button>
//               <button
//                 className="btn btn-outline-danger"
//                 onClick={() => deleteUser(user)}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );

//   // In alternativa possiamo fare anche come sotto
//   /*  useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         // get -> await promise .> res /res
//         const res = await axios.get<User[]>(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         setUsers(res.data);
//       } catch (err) {
//         setError((err as AxiosError).message);
//       }
//     };
//   }, []);
//   return (
//     <>
//       {error && <p className="text-danger">{error}</p>}
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}> {user.name}</li>
//         ))}
//       </ul>
//     </>
//   ); */
// }

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        Nav
      </GridItem>{" "}
      <Show above="lg">
        <GridItem area={"aside"} bg={"gold"}>
          Aside
        </GridItem>{" "}
      </Show>
      <GridItem area={"main"} bg={"dodgerblue"}>
        Main
      </GridItem>{" "}
    </Grid>
  );
}

export default App;

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
// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
