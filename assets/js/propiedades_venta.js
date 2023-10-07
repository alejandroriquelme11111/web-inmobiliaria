import propiedades_venta from "./data/array_ventas.js";

const propiedadesNuevas = (casas, containerId) => {
  const container = document.getElementById(containerId);
  const propiedadesActuales = casas
  propiedadesActuales.forEach((propiedadActual) => {
    const {
      src,
      nombre,
      descripcion,
      ubicacion,
      habitaciones,
      baños,
      costo,
      smoke,
      pets,

    } = propiedadActual

    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");
    card.innerHTML = `
    <div class="card">
    <img src="assets/img/${src}" class="card-img-top" alt=""/>
    <div class="card-body">
     <h5 class="card-title">${nombre}</h5> 
     <p class="card-text">${descripcion}</p>
     <p><i class="fas fa-map-marker-alt"></i> ${ubicacion}</p>
     <p><i class="fas fa-bed"></i> ${habitaciones}</p>
     <p><i class="fas fa-bath"></i> ${baños}</p>
     <p><i class="fas fa-dollar-sign"></i> ${costo}</p>
    
     <p class="${smoke ? "text-danger" : "text-success"}">
      <i class="fas ${smoke ? "fa-smoking-ban" : "fa-smoking"}"></i>
       ${smoke ? "no se puede fumar" : "se puede fumar"}
     </p>
    
     <p class="${pets ? "text-success" : "text-danger"}">
     <i class="${pets ? "fas fa-paw" : "fas fa-ban"}"></i>
     ${pets ? "se aceptan mascotas" : "no se aceptan mascotas"}
      </p>
      </div>
     </div>
     `;
  container.appendChild(card);
    
    
    
  });
};
 const init = () => {

  propiedadesNuevas(propiedades_venta, "vender")
  }


window.addEventListener("load", init);

