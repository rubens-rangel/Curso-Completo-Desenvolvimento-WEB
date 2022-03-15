import React from "react";
import './Comentario.css'
import imagemUsuario from './user.png'

//JSX
const Comentario = props =>  {

          // const estilo = {
          //      color: 'red',
          //      padding: '10px',
          //      fontSize: '30px'
          // };

          return <div className="Comentario">  
                <img className="avatar" src={imagemUsuario} alt={props.nome} />
                <div className="conteudo">
                    <h2 className="nome">{props.nome}: </h2>
                    <p className="email">{props.email}</p>
                    <p className="mensagem">{props.children}</p>
                    <p className="data">{props.data.toString()}</p>
                    <button onClick={props.onRemove}>x</button>
                </div>     
           </div>
          }

export default Comentario


