/** @format */
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../firebase";

import Platillo from "../components/ui/Platillo";
const Menu = () => {
  // definir el state para los platillos
  const [platillos, guadarPlatillos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { firebase } = useContext(FirebaseContext);

  // consultar la base de datos al cargar
  useEffect(() => {
    obtenerPlatillos();
  }, []);

  const obtenerPlatillos = () => {
    // setLoading(true);
    firebase.db.collection("productos").onSnapshot(manejarSnapshot);
    // setLoading(false);
  };

  function manejarSnapshot(snapshot) {
    const platillos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    // almacenar los resultados en el state
    guadarPlatillos(platillos);
  }

  // if (loading) return <h1>Cargando platillos...</h1>;

  return (
    <>
      <h1 className='text-3xl font-light mb-4'>Menu</h1>

      <Link
        to='/new-plate'
        className='bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold rounded-lg'>
        Agregar Platillo
      </Link>

      {platillos.map((platillo) => (
        <Platillo key={platillo.id} platillo={platillo} />
      ))}
    </>
  );
};

export default Menu;
