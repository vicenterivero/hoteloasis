import React, { useEffect, useState } from "react";

function Bar() {
  const [bar, setBar] = useState([]);
  useEffect(() => {
    obtenerBar()
  }, []);
  const obtenerBar = async () => {
    const data = await fetch(
      "http://187.150.103.77/api/oasis/centro_consumo/bares"
    );
    const bares = await data.json();

    const categoria= bares.filter(rescat=>rescat.categoria==3);
    setBar(categoria);
  };
  

  
  const cerrado= bar.filter(rescat=>rescat.mensaje);
const abierto= bar.filter(rescat=>rescat.categoria);
  return (
    <div className="container__componente">
      <div className="container__bar">
        <div className="scrollbar">
          <h2 className="titulo__bar">BARES</h2>
        </div>
        <div className="container__contenido">

        {abierto.map((filteredres) => (
              <div className="contenido__apibar">
              <div className="titulo__bar__div">
              <h3 className="titulo__individualbar">
              {filteredres.nombre}
              </h3>

              </div>
             <div className="horario__indivual">
               <div className="horario__individual__horabar">
                    <h3 className="titulo__individual">
              ABIERTO HOY
              </h3>
              <h4 className="horario">{filteredres.horario_inicio} - {filteredres.horario_final}</h4>
               </div>

               <div className="horario__indivual__botonbar">
                  
           <button className="boton__restaurantebar">VER MÁS</button>
               </div>
           

             </div>
           
         
           
            </div>
          ))}

            {cerrado.map((filteredres) => (
            <div className="contenido__apibar">
              <p className="titulo__individualbar">
              <h1>{filteredres.mensaje}</h1>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bar;
