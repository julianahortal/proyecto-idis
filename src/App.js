import './globals.css'
import React, { useState, useEffect } from 'react';
import jsonData from './datap.json';


function App() {
  const [showDefaultParagraph, setShowDefaultParagraph] = useState(true);
  const [artistas, setArtistas] = useState([])
  const [dispositivos, setDispositivos] = useState([])
  const [libros, setLibros] = useState([])
  const [obras, setObras] = useState([])
  const [sitios, setSitios] = useState([])
  const [terminos, setTerminos] = useState([])
  const [resto, setResto] = useState([])


  const handleFilterChange = (filter) => {
    setShowDefaultParagraph(false);
    let filtered = jsonData.filter(item => item[filter] === "ERROR");
    let art = [];
    let dis = [];
    let lib = [];
    let obr = [];
    let sit = [];
    let ter = [];
    let res = [];

    filtered.forEach((item) => {
      if (item["CATEGORÍA"] == "ARTISTAS") {
        art.push(item)
      } else if (item["CATEGORÍA"] == "DISPOSITIVOS") {
        dis.push(item)
      } else if (item["CATEGORÍA"] == "LIBROS") {
        lib.push(item)
      } else if (item["CATEGORÍA"] == "OBRA") {
        obr.push(item)
      } else if (item["CATEGORÍA"] == "SITIOS") {
        sit.push(item)
      } else if (item["CATEGORÍA"] == "TERMINOS") {
        ter.push(item)
      } else {
        res.push(item)
      }
    });

    setArtistas(art)
    setDispositivos(dis)
    setLibros(lib)
    setObras(obr)
    setSitios(sit)
    setTerminos(ter)
    setResto(res)
  }

  const handleReset = () => {
    setShowDefaultParagraph(true);
    // Reset other state variables as needed
    setArtistas([]);
    setDispositivos([]);
    setLibros([]);
    setObras([]);
    setSitios([]);
    setTerminos([]);
    setResto([]);
  }

  return (
    
    <body className='grain'>


    <div className='container'>
     <div className="navbar">
            <nav>
              <div>
              <h1>Proyecto IDIS - Juliana Hortal</h1>
              {!showDefaultParagraph && (
                <div  className='return-main' onClick={handleReset}>
                  <p>Volver a Objetivos</p>
                </div>
              )}
              </div>

              <div className="filter-selector">
                <button className='buttonAlign' onClick={() => handleFilterChange("TEXTO")}>
                  Texto
                </button>
                <button className='buttonAlign' onClick={() => handleFilterChange("ENLACES")}>
                  Enlaces
                </button>
                <button className='buttonAlign' onClick={() => handleFilterChange("FECHA")}>
                  Fecha
                </button>

                
              </div>
            </nav>
        </div>    

        {showDefaultParagraph && (
        <div > 
         <div> 
         <h2> <u>Objetivos</u> </h2>
         <p>Durante este cuatrimestre, mi objetivo inicial era <strong>arreglar la mayor cantidad posible de posteos en el sitio web.</strong> Con el tiempo, ese objetivo se fue afinando hasta lograr el resultado actual. </p> 
         <div className='expanded-feature-1'></div>
         <p>Mi tarea fue aquella de verificar que los enlaces funcionaran correctamente, que las imágenes se vieran bien y que las fechas estuvieran correctas. En total, se revisaron alrededor de <strong>250 posteos IDIS</strong> (aproximadamente), encontrando que un <strong>11,58%</strong> tenían <u>errores de texto</u>, un <strong>15,43%</strong> <u>discrepancias en las fechas</u> y un 23,03% llevaban a <u>enlaces rotos.</u></p>
         <div className='expanded-feature-2'></div>
         <p>Este sitio cuenta con los <strong>tres filtros de errores propuestos a verificar</strong>, que al seleccionar el botón, despliega el listado por <u>categoría IDIS</u> de aquellos posteos que fui arreglando.</p>

         <div className='expanded-feature-3'></div>
       </div>
       </div>

      )}
       {!showDefaultParagraph && (
      <div className="data-display">
        <h2><u>Artistas</u></h2>
        <div className="data-display-item">
          {artistas.map((item) => (
            <div className='post' key={item.ID}>
              <a href={item["Value.post.guid"]}>
                <img src={item["Value.post.image"]} alt={item["Value.post.post_title"]} />
              </a>
            </div>
          ))}
        </div>
        <h2><u>Dispositivos</u></h2>
        <div className="data-display-item">
          {dispositivos.map((item) => (
          <div className='post' key={item.ID}>
            <a href={item["Value.post.guid"]}>
              <img src={item["Value.post.image"]} alt={item["Value.post.post_title"]} />
            </a>
          </div>
          ))}
        </div>

        <h2><u>Libros</u></h2>
        <div className="data-display-item">
          {libros.map((item) => (
            <div className='post' key={item.ID}>
              <a href={item["Value.post.guid"]}>
                <img src={item["Value.post.image"]} alt={item["Value.post.post_title"]} />
              </a>
            </div>
          ))}
        </div>
        <h2><u>Obras</u></h2>
        <div className="data-display-item">
        {obras.map((item) => (
          <div className='post' key={item.ID}>
            <a href={item["Value.post.guid"]}>
              <img src={item["Value.post.image"]} alt={item["Value.post.post_title"]} />
            </a>
          </div>
        ))}
        </div>
        
        <h2><u>Sitios</u></h2>
        <div className="data-display-item">
        {sitios.map((item) => (
          <div className='post' key={item.ID}>
            <a href={item["Value.post.guid"]}>
              <img src={item["Value.post.image"]} alt={item["Value.post.post_title"]} />
            </a>
          </div>
        ))}
        </div>
        <h2><u>Términos</u></h2>
        <div className="data-display-item">
        {terminos.map((item) => (
          <div className='post' key={item.ID}>
            <a href={item["Value.post.guid"]}>
              <img src={item["Value.post.image"]} alt={item["Value.post.post_title"]} />
            </a>
          </div>
        ))}
        </div>
      </div>
      )}

      </div>
      <footer>
        <p>Pasantía de Investigación con Crédito Académico - Proyecto IDIS. 2024. Juliana Hortal</p>
      </footer>
    </body>

  
  );
}

export default App;