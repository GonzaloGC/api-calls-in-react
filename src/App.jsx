import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [ima, setIma] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const infoData = async () => {
      try {
        const data = await fetch("https://dummyjson.com/products");
        if (!data.ok) {
          throw new Error("La respuesta es erronea, ACCESO DENEGADO");
        }
        const dataJson = await data.json();
        const dataProducts = dataJson.products;

        setIma(dataProducts);

      } catch (error) {
        setError(error);
        console.log("El siguiente mensaje de error es:", error);
      }
    };
    infoData();
  }, []);

  const jsonStringData = ima.map((jsonData) => (
    <div className="div-container-img" key={jsonData.id}>
      <img className="im" src={jsonData.images} alt=""></img>
    </div>
  ));

  return (
    <>
      <section className="container">{jsonStringData}</section>
    </>
  );
};

export default App;
