
import { useState } from "react";
import './Cp.css'
export default function Year({ data, nosem2 }) {

  const [show, setShow] = useState(false);










  return (
    <>



      <div key={1} id={data.year.year} className="Cp">
        <a href={data.year.link} target="_blank"> <span className="title_cp">{data.year.year}</span></a>
        <div className="semestres" >
          <div className="semestre_1">
            <a href={data.modules_S1.link} target="_blank"><header>Semestre 01</header></a>
            <div className="modules">
              {data.modules_S1.modules.map((module, index) => {
                if (module.module_name !== "") {
                  return (
                    <div
                      key={index}
                      className=
                      "module_container"
                    >
                      <a
                        href={module.link}
                        target="_blank"
                        data-umami-event="Link Clicked"
                        data-umami-event-to={`${data.year}-${module.module_name}`}
                      >
                        <div className="module">

                          <div className="img_name">
                            <img
                              alt="img"
                              loading="lazy"
                              className="fileImg"
                              src="/file.svg"
                            />
                            <span className="moduleName">
                              {module.module_name}
                            </span>
                          </div>
                        </div>
                      </a>

                    </div>
                  )
                } else {
                  return null
                };
              })}
            </div>
          </div>
          {data.year.year !== "2CS" && !nosem2 && <div className={data.year.year === "2CS" ? "TOBEREMOVED" : "semestre_2"}>
            <a href={data.modules_S2.link} target="_blank"><header>Semestre 02</header></a>
            <div className="modules">
              {data.modules_S2.modules.map((module, index) => {
                if (module.module_name !== "") {
                  return (
                    <div
                      key={index}
                      className="module_container"
                    >
                      <a
                        target="_blank"
                        data-umami-event="Link Clicked"
                        data-umami-event-to={`${data.year.year}-${module.module_name}`}
                        href={module.link} rel="noreferrer">
                        <div className="module">
                          <div className="img_name">
                            <img
                              alt="img"
                              loading="lazy"
                              className="fileImg"
                              src="/file.svg"
                            />
                            <span className="moduleName">
                              {module.module_name}
                            </span>
                          </div>

                        </div>
                      </a>
                    </div>
                  )
                } else {
                  return null
                };
              })}
            </div>
          </div>}
        </div>
        {/****************************************************MOBIIIIIIIIIIIILE******************************************************************************* */}

        {<div className="semestres_mobile">
          <header>
            {!show ? (
              <img className="left_icon_desactive" src="/left_icon_desactive.svg" loading="lazy" alt="img" />
            ) : (
              <img
                className="left_icon_active"
                alt="img"
                loading="lazy"
                onClick={() => {
                  setShow(false);
                }}
                src="/left_icon_active.svg"
              />
            )}
            <a href={!show ? data.modules_S1.link : data.modules_S2.link} target="_blank">
              <span className="mobile_semestre">
                {!show ? "semestre 01" : "semestre 02"}
              </span>
            </a>
            {!show ? (
              <img
                className="right_icon_active"
                alt="icon"
                src="/right_icon_active.svg"
                loading="lazy"
                onClick={() => {
                  setShow(true);
                }}
              />
            ) : (
              <img src="/right_icon_desactive.svg" className="right_icon_desactive" alt="icon" />
            )}
          </header>
          <div className="modules">
            {!show
              ? data.modules_S1.modules.map((module, index) => {
                if (module.module_name !== "") {
                  return (
                    <div
                      key={index}
                      className=
                      "module_container"

                    >
                      <a href={module.link} target="_blank">
                        <div className="module">
                          <div className="img_name">
                            <img
                              alt="img"
                              loading="lazy"
                              className="fileImg"
                              src="/file.svg"
                            />
                            <span className="moduleName">
                              {module.module_name}
                            </span>
                          </div>

                        </div>
                      </a>

                    </div>
                  )
                } else {
                  return null
                };
              })
              : data.modules_S2.modules.map((module, index) => {
                if (module.module_name !== "") {
                  return (
                    <div
                      key={index}
                      className=
                      "module_container"
                    >
                      <a href={module.link} target="_blank">
                        <div className="module">
                          <div className="img_name">
                            <img
                              alt="img"
                              loading="lazy"
                              className="fileImg"
                              src="/file.svg"
                            />
                            <span className="moduleName">
                              {module.module_name}
                            </span>
                          </div>

                        </div>
                      </a>

                    </div>
                  )
                } else {
                  return null
                };
              })}
          </div>
        </div>}



      </div>



    </>
  );



}