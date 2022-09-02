import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

import './Gerador.css'

const MostraLink = (props) => {


    return (


        <div className="row d-flex justify-content-center align-items-center">

            <div className="col-sm-12 col-md-9 col-lg-7 col-xl-6">

                <form className="bg-light p-5">

                    <h2 className="text-center">GERADOR DE LINK PARA WHATSAPP</h2>


                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            id="myInp"
                            rows="3"
                            defaultValue={props.mostraMensagem}
                            readOnly="readOnly"
                        ></textarea>
                    </div>

                    <button onClick={props.copiarLink} id="btnCopy" type="button" className="btn btn-success btn-lg btn-block">COPIAR LINK</button>

                    <button onClick={props.voltar} type="button" className="btn btn-success btn-lg btn-block">VOLTAR</button>
                </form>

            </div>
        </div>


    )

}

export default MostraLink