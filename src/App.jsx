
import { useEffect, useState } from 'react';
import './App.css';
import Restaurantes from './components/Restaurantes'
import Bar from './components/Bar'
import Detalles from './components/Detalles'

function App() {




var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();
var hours = f.getHours();
var minutes = f.getMinutes();
var ampm = hours >= 12 ? 'pm'   : 'am';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0'+minutes : minutes;
var strTime = hours + ':' + minutes + ' ' + ampm;

var fecha=(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

  return (
    
    <div className="App">
      <script>
        
      </script>
      <div className="barra">
        <div className="barra__contenido">
          <h1 className="barra__titulo">GRAND OASIS CANCÚN</h1>
          <p className="barra__texto">{strTime}</p>
          <p className="barra__texto__fecha"> {fecha} </p>
          <img className="barra__logo" src="../oasislogo.png" alt="" />
        </div>
      </div>
<Restaurantes/>
<Bar/>
<Detalles mensaje="https://api-onow.oasishoteles.net/public/uploads/centros_consumo/restaurantes/la-placita/portada-1525371432575.jpg"/>
   

     
    </div>
  );
}

export default App;
