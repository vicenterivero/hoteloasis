import React, { useEffect, useState, Component } from "react";

function Restaurantes() {
  const [restaurante, setRestaurante] = useState([]);
/*   const [dias, setDia] = useState([]); */
  useEffect(() => {
    obtenerDatos()
 /*    obtenerDia() */
  }, []);
  const obtenerDatos = async () => {
    const data = await fetch(
      "http://127.0.0.1:8000/api/oasis/centro_consumo/restaurantes"  
    );
    const restaurantes = await data.json();
    const categoriares= restaurantes.filter(rescat=>rescat.categoria==2||rescat.mensaje);
    setRestaurante(categoriares);
  };
/*   const obtenerDia = async () => {
    const horarios = await fetch(
      "http://hoteloasis.vicentealdhair.com/api/oasis/centro_consumo/horario"
    );
    var fecha = new Date();
    var diahoy = fecha.getDay();
    var horahoy = fecha.getHours();
    if (horahoy < 10)  horahoy = '0'+horahoy;
    var minutoshoy = fecha.getMinutes();
    var segundoshoy = fecha.getSeconds();
    var horactual = horahoy+ ":" + minutoshoy + ":" + segundoshoy;
        console.log(horactual);
    const fechas = await horarios.json();
    const buscardia = fechas.filter(hoy=>hoy.dia==diahoy && hoy.hora_inicio<horactual&&hoy.hora_final>horactual);
    setDia(buscardia);
  }; */
/*   let json1=dias;
  let json2=restaurante;
  let unidos= json2.concat(json1);
  let talvez= unidos.filter(datos=>datos.centro_consumo_id) */
/*   console.log(json1.length) */
/* while(json2.length<=1){
console.log("hola")
} */
const cerrado= restaurante.filter(rescat=>rescat.mensaje);
const abierto= restaurante.filter(rescat=>rescat.categoria);

  return (
    <div className="container__componente">
      <div className="container__restaurantes">
        <div className="scroll">
          <h2 className="titulo__restaurante">RESTAURANTES</h2>
        </div>
        <div className="container__contenido">
 
       {abierto.map((filteredres,) => (
            <div className="contenido__api">
              <div className="titulo__restaurante__div">
              <h3 className="titulo__individual">
              {filteredres.nombre}
              </h3>
              <div className="titulo__individual__concepto">
                 <h4 className="concepto">{filteredres.concepto}</h4>
              </div>
             

              </div>
             <div className="horario__indivual">
               <div className="horario__individual__hora">
                    <h3 className="titulo__individual">
              ABIERTO HOY
              </h3>
              <h4 className="horario">{filteredres.horario_inicio} - {filteredres.horario_final}</h4>
               </div>

               <div className="horario__indivual__boton">
                  
           <button className="boton__restaurante">VER MÁS</button>
               </div>
           

             </div>
           
         
           
            </div>
          ))}

            {cerrado.map((filteredres,) => (
            <div className="contenido__api">
              <p className="titulo__individual">
              <h1>{filteredres.mensaje}</h1>
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Restaurantes;
