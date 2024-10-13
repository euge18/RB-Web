import { useState } from "react";
import React from "react";

const initialState = {
  name: "",
  message: "",
};
export const Contact = (props) => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:Estudiocontablerybasociados@gmail.com?subject=Consulta web: ${state.name}&body=${state.message}`;
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contáctenos</h2>
                <p>
                  Por favor, rellene el siguiente formulario para enviarnos un
                  correo electrónico y nos pondremos en contacto con usted lo
                  antes posible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nombre"
                        required
                        onChange={handleChange}
                        value={state.name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensaje"
                    required
                    value={state.message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar mensaje
                </button>
                <button
                  type="button"
                  className="btn btn-custom btn-lg"
                  style={{ marginLeft: "16px" }}
                  onClick={() => {
                    clearState();
                  }}
                >
                  Limpiar
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3 style={{ fontWeight: "600" }}>Información de contacto</h3>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i>Teléfono
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.whatsapp : "/"}>
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} Estudio contable y gestoria
            integral R&B Asociados. Web por EF paginas webs.
          </p>
        </div>
      </div>
    </div>
  );
};
