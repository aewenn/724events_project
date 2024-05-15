import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext({});

export const api = {
  loadData: async () => {
    const json = await fetch("/events.json");
    return json.json();
  },
};

export const DataProvider = ({ children }) => {
    // États pour gérer les données, les erreurs et le dernier événement
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [last, setLast] = useState(null);

  const getData = useCallback(async () => { // Fonction pour charger les données depuis l'API
    try {
      const dataLoaded = await api.loadData()
      setData(dataLoaded); // Mise à jour des données dans l'état
      setLast(dataLoaded?.events.sort((evtA, evtB) => // Sélection de l'évènement le plus récent en triant les événements par date décroissante
        new Date(evtB.date) - new Date(evtA.date))[0]) 
    } catch (err) {
      setError(err);
    }
  }, []);
  useEffect(() => {
    if (data) return;
    getData();
  });
  
  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        error,
      last,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useData = () => useContext(DataContext);

export default DataContext;
