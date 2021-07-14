import React, { useEffect, useState } from "react";

function Detalles(props) {
  return (
    <div className="container__componente">
      <div className="container__detalles">
        <div className="scrolldetalle">
          <h2 className="titulo__detalle">La placita</h2>
        </div>
        <div className="container__contenido">
          <div className="titulo__restaurante__div">
            <img
              className="logo"
              src="https://api-onow.oasishoteles.net/public/uploads/centros_consumo/restaurantes/la-placita/logo-1525371432505.png"
              alt="imagen"
            ></img>
            <img className="portada" src={props.mensaje} alt="" />
          </div>
          <div className="informacion__detalle">
            <div className="titulo__detalle__div">
            <h3 className="titulo__individual__detalle">
            LA PLACITA
              </h3>
              <div className="titulo__individual__concepto">
                 <h4 className="concepto__detalle">Mr. Whimpy/Happy Chicken/Tacos & Tortas</h4>
              </div>
            </div>
            <div className="horario__ detalle">
              <h3 className="titulo__individual">ABIERTO HOY</h3>
           
              <h4 className="horario__detalle__text">
              11:00 AM - 06:00 PM
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalles;
