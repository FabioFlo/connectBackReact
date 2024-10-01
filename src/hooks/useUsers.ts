import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

/* Grazie a questo custom hook possiamo condividere le funzionalità a vari componenti esterni.
Si comporta in modo simile ad un service su Java, in questo modo si evita anche la duplicazione del codice e 
seguiamo il principio della "separation of concern" */
const useUsers = () => {
  // Collegamento con il back (Dati esempio)
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
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

  return { users, error, isLoading, setUsers, setError };
};
export default useUsers;
