import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Trámites</h2>
          <p>
            Si no encuentras el servicio específico que necesitas en nuestra
            lista, no dudes en contactarnos. En R&B Asociados, estamos
            comprometidos en ofrecer soluciones personalizadas y flexibles para
            cubrir todas tus necesidades contables y de gestoría. Nos adaptamos
            a cada situación para brindarte el apoyo que requieras. ¡Estamos
            aquí para ayudarte!
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
