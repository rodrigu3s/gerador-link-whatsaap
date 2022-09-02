import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './Gerador.css'

import MaskedInput from 'react-maskedinput'

const Gerador = (props) => {

    return (


        <div className="row d-flex justify-content-center align-items-center">

            <div className="col-sm-12 col-md-9 col-lg-7 col-xl-6">

                <form className="bg-light p-5">

                    <h2 className="text-center">GERADOR DE LINK PARA WHATSAPP</h2>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                        <MaskedInput
                            mask="(11)11111-1111"
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="(99)99999-9999"
                            value={props.numero}
                            onChange={props.handleChange}
                            autoComplete="off" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                        <textarea
                            maxlength="50"
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Escrever Texto"
                            value={props.mensagem}
                            onChange={props.handleMensagem}></textarea>
                    </div>

                    <button onClick={props.handleAdd} type="button" className="btn btn-success btn-lg btn-block">GERAR LINK</button>


                </form>

            </div>
        </div>


    )


}

export default Gerador


// react-maskedinput = mascara para número de celular















