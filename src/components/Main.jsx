import React, { Component } from 'react'

import Gerador from './Gerador'
import MostraLink from './MostraLink'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


var msg
export default class Main extends Component {

    constructor(props) {
        super(props)
        this.state = { numero: '', mensagem: '', m: true , linkGerado: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleMensagem = this.handleMensagem.bind(this)

        this.handleAdd = this.handleAdd.bind(this)
        this.copiarLink = this.copiarLink.bind(this)
        this.voltar = this.voltar.bind(this)
        
    }

    handleChange(e) {
        this.setState({ ...this.state, numero: e.target.value })
    }

    handleMensagem(e) {
        this.setState({ ...this.state, mensagem: e.target.value })
    }

    handleAdd() {
        this.setState(this.state.linkGerado = 
            {link: `https://api.whatsapp.com/send?phone=${this.state.numero}&text=${this.state.mensagem.replaceAll(' ', '%20')}`}) 
        this.setState({m: false})
        msg = this.state.linkGerado.link
        console.log(msg);

        if(!this.state.numero){
            this.setState({m: true})
            toast.configure()
            toast.error('Preencha Com Seu Número!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        
    }

    copiarLink(){
        document.querySelector('#myInp').select()
        document.execCommand('copy')

        toast.success('Link Copiado Com Sucesso!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    voltar(){
        this.setState({m: true})
        this.state.numero = ""
        this.state.mensagem = ""
    }

    
    render() {
        
        const m = this.state.m

        if (m) {
            return (
                <div className="container">
                    <Gerador
                        numero={this.state.numero}
                        mensagem={this.state.mensagem}
                        handleChange={this.handleChange}
                        handleMensagem={this.handleMensagem}
                        handleAdd={this.handleAdd}
                    />


                </div>
            )
        }

        else {
            return (
                <div className="container">
                    <MostraLink
                        mostraMensagem={msg}
                        copiarLink={this.copiarLink}
                        voltar={this.voltar}
                    />
                </div>
            )
        }

    }
}

