import { proyectos } from "../profile";

function Proyectos() {
  return (
    <div className="row" id="proyectos">
      <div className="col-md-12">
        <div className="card card-body">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Proyectos</h1>
            </div>
            {proyectos.map(({ nombre, descripcion, imagen, web }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img loading="lazy" src={`/${imagen}`}  alt="" className="card-img-top"/>
                  </div>
                  <div className="card-body ">
                    <h3>{nombre}</h3>
                    <p>{descripcion}</p>
                    <a href={web} target="blank">
                      Sitio Web o Github
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Proyectos;
