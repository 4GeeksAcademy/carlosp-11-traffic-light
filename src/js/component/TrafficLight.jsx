import React, {useState} from "react";

export const TrafficLight= () => {
  const [color, setColor] = useState("");
  
  //1- Cuando hacemos clic en el círculo rojo hacemos que color = red.
  //2- En className del círculo rojo pregunto si color = red, en caso afirmativo agrego la clase 
  // glow-red, y si no agrego espacio vacío ("").
  //3- hacer lo mismo con yellow y green.

    return (
      <div className="box">
        <div className= {`light red-light ${color == 'red' ? 'glow-red': ''}`} onClick={ ()=> setColor("red")} ></div>
        <div className={`light yellow-light ${color == 'yellow' ? 'glow-yellow': ''}`} onClick={ ()=> setColor("yellow")}></div>
        <div className={`light green-light ${color == 'green' ? 'glow-green': '' }`} onClick={ ()=> setColor("green")}></div>
      </div>  
    );
};

