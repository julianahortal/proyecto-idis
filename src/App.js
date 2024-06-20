import './globals.css'
import React, { useState } from 'react';
import jsonData from './datap.json';


function App() {
  const [showDefaultParagraph, setShowDefaultParagraph] = useState(true);
  const [artistas, setArtistas] = useState([])
  const [dispositivos, setDispositivos] = useState([])
  const [libros, setLibros] = useState([])
  const [obras, setObras] = useState([])
  const [sitios, setSitios] = useState([])
  const [terminos, setTerminos] = useState([])


  const handleFilterChange = (filter) => {
    setShowDefaultParagraph(false);
    let filtered = jsonData.filter(item => item[filter] === "ERROR");
    let art = [];
    let dis = [];
    let lib = [];
    let obr = [];
    let sit = [];
    let ter = [];

    filtered.forEach((item) => {
      if (item["CATEGORÍA"] === "ARTISTAS") {
        art.push(item)
      } else if (item["CATEGORÍA"] === "DISPOSITIVOS") {
        dis.push(item)
      } else if (item["CATEGORÍA"] === "LIBROS") {
        lib.push(item)
      } else if (item["CATEGORÍA"] === "OBRA") {
        obr.push(item)
      } else if (item["CATEGORÍA"] === "SITIOS") {
        sit.push(item)
      } else if (item["CATEGORÍA"] === "TERMINOS") {
        ter.push(item)
      }
    });

    setArtistas(art)
    setDispositivos(dis)
    setLibros(lib)
    setObras(obr)
    setSitios(sit)
    setTerminos(ter)
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
                  <p><u>Volver a Inicio</u></p>
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
       <>
          <div className='two-column'> 
              <div className="left-column">
                  <p>Cuando empezó este cuatrimestre, arranqué con la inocente idea de verificar la mayor cantidad posible de posteos de proyectoidis.org, pensando en lograr arreglar, digamos… ¿todo el sitio web? Pero con el tiempo, ese objetivo se fue afinando hasta llegar a donde estamos hoy. 
En el primer encuentro, vi que mis compañeros tenían en claro lo que querían hacer desde el primer día, y me preguntaba si alguna vez encontraría un tema interesante para compartir con el grupo, del cual investigar y escribir. Me sentía bastante frustrada. Ya venía de hace rato sintiéndome perdida, buscando mi lugar en la carrera, y honestamente me faltaba motivación. Por lo que tomé la iniciativa de dedicarme solo a revisar posteos. 
</p>
              </div>      
              <div className="right-column"> 
                <img className="img-square" src="https://proyectoidis.org/wp-content/uploads/2024/06/informe_a.png" alt=" "/>
              </div>
          </div>
          <div className='two-column-2'> 
              <div className="left-column"> 
                <img className="img-square" src="https://proyectoidis.org/wp-content/uploads/2024/06/informe_b.png" alt=" "/>
              </div>
            <div className="right-column">
                    <p>Mi tarea principal se basó en revisar las entradas del blog, asegurándome que cada uno estuviera en orden: que los enlaces funcionaran, que las imágenes se vieran bien y que las fechas estuvieran correctas. Suena bastante sencillo, pero es increíble la cantidad de detalles que hay que tener en cuenta.
Revisé alrededor de 250 posteos IDIS y encontré entradas con errores de texto (desde simples erratas hasta problemas de formato), inexactitudes en las fechas (lo cual creaba inconsistencias) y un gran porcentaje de enlaces rotos (que siempre son frustrantes para cualquier usuario).</p>
            </div>      
          </div>
          <div className='two-column'> 
              <div className="left-column">
                  <p>A la hora de pensar en el formato para el informe final, me surgió la idea de crear una página desde cero. Esto no solo me dio un nuevo propósito, sino que también me permitió ver cómo mi trabajo podía hacer una diferencia real. Sabía que no era tarea fácil, pero me lo propuse de todas formas.
El sitio tiene tres filtros que permiten identificar estos errores. Al seleccionar el botón adecuado, se despliega una lista por categoría IDIS de los posteos que fui arreglando, siguiendo la lógica por categoría IDIS. Lo que más me interesaba era poder mostrar que un mismo posteo podía tener más de un solo error.</p>
              </div>      
              <div className="right-column"> 
                <img className="img-square" src="https://proyectoidis.org/wp-content/uploads/2024/06/Informe_c.png" alt=" "/>
              </div>
          </div>
          </>
      )}
       {!showDefaultParagraph && (
      <div className="data-display">
        <h2><u>Artistas</u></h2>
        <div className="data-display-item">
          {artistas.map((item) => (
            <div className='post' key={item.ID}>
              <a href={item["Value.post.guid"]}>
                <div className="post-overlay">
                      <img src={item["Value.post.image"]} alt={item["Value.post.post_title"]} title={item["Value.post.post_title"]}/>
                </div>
              </a>
            </div>
          ))}
        </div>
        <h2><u>Dispositivos</u></h2>
        <div className="data-display-item">
          {dispositivos.map((item) => (
          <div className='post' key={item.ID}>
            <a href={item["Value.post.guid"]}>
              <div className="post-overlay">
                      <img src={item["Value.post.image"]} alt={item["Value.post.post_title"]} title={item["Value.post.post_title"]}/>
                </div>
            </a>
          </div>
          ))}
        </div>

        <h2><u>Libros</u></h2>
        <div className="data-display-item">
          {libros.map((item) => (
            <div className='post' key={item.ID}>
              <a href={item["Value.post.guid"]}>
                <div className="post-overlay">
                      <img src={item["Value.post.image"]} alt={item["Value.post.post_title"]} title={item["Value.post.post_title"]}/>
                </div>
              </a>
            </div>
          ))}
        </div>
        <h2><u>Obras</u></h2>
        <div className="data-display-item">
        {obras.map((item) => (
          <div className='post' key={item.ID}>
            <a href={item["Value.post.guid"]}>
              <div className="post-overlay">
                      <img src={item["Value.post.image"]} alt={item["Value.post.post_title"]} title={item["Value.post.post_title"]}/>
                </div>
            </a>
          </div>
        ))}
        </div>
        
        <h2><u>Sitios</u></h2>
        <div className="data-display-item">
        {sitios.map((item) => (
          <div className='post' key={item.ID}>
            <a href={item["Value.post.guid"]}>
              <div className="post-overlay">
                      <img src={item["Value.post.image"]} alt={item["Value.post.post_title"]} title={item["Value.post.post_title"]}/>
                </div>
            </a>
          </div>
        ))}
        </div>
        <h2><u>Términos</u></h2>
        <div className="data-display-item">
        {terminos.map((item) => (
          <div className='post' key={item.ID}>
            <a href={item["Value.post.guid"]}>
              <div className="post-overlay">
                      <img src={item["Value.post.image"]} alt={item["Value.post.post_title"]} title={item["Value.post.post_title"]}/>
                </div>
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
