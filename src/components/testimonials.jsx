import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Clientes</h2>
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="about-text">
            <h3>Generamos confianza</h3>
            <p>
              La <strong>confianza</strong> que nuestros clientes depositan en
              nosotros es, sin duda, nuestra mayor satisfacción y el motor que
              impulsa nuestro trabajo diario. Esta confianza no solo refleja el
              valor de los servicios que brindamos, sino también el vínculo que
              hemos construido a lo largo del tiempo, basado en la{" "}
              <strong>transparencia</strong>, la{" "}
              <strong>responsabilidad</strong> y los resultados obtenidos.
            </p>
            <p>
              Cada cliente que elige trabajar con <strong>R&B Asociados</strong>{" "}
              respalda nuestro compromiso con la excelencia. Nos esforzamos día
              a día para mantener y fortalecer esa confianza, ofreciéndoles{" "}
              <strong>soluciones integrales</strong> y un acompañamiento
              cercano, garantizando que cada gestión, trámite o consulta sea
              atendida con la máxima eficiencia y profesionalismo.{" "}
              <strong>
                Todo esto respaldado por nuestro compromiso total con:
              </strong>
            </p>
            <div className="list-style">
              <ul>
                {props.data
                  ? props.data.List.map((d, i) => (
                      <li style={{ marginTop: "16px" }} key={`${d}-${i}`}>
                        {d}
                      </li>
                    ))
                  : "loading"}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <h3>Nuestros Clientes</h3>
          {props.data
            ? props.data.Costumers.map((d, i) => (
                <div key={`${d.name}-${i}`}>
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={d.img} alt="" />
                    </div>
                    <div className="testimonial-content">
                      <div className="testimonial-meta">{d.name}</div>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
