import React from 'react';
import '../styles/Social.css'
import img1 from '../img/pessoa1.jpg'
import img2 from '../img/pessoa2.jpg'


function Social() {
return ( 
    <div className="box">
      <div className="BlocoMensagem">
        <div className="mensagemAlinhada">
          <img src={img1} alt="Icone/Foto" className="rounded-circle" width="50px" height="50px"></img>
            <div className="mensagemRecebida rec">mensagem mensagem mensagem</div>
        </div>
        <span className="rec">08:41</span>
      </div>
       <div className="BlocoMensagem">
          <div className="mensagemAlinhada rev">
            <img src={img2} alt="Icone/Foto" className="rounded-circle" width="70px"height="50px"></img>
            <div className ="mensagemEnviada rev">mensagem mensagem mensagem</div>
          </div>
          <span className ="rev">08:55</span>
      </div>
      <div className="BlocoMensagem">
        <div className="mensagemAlinhada">
          <img src={img1} alt="Icone/Foto" width="70px" className ="rouded-circle" height="50px"></img>
          <div className="mensagemRecebida">mensagem mensagem mensagem</div>
        </div>
        <span className="rec">10:13</span>
      </div>
      <div className="BlocoMensagem">
        <div className="mensagemAlinhada rev">
          <img src={img2} alt="Icone/Foto"class="rounded-circle" width="70px" height="50px"></img>
          <div className="mensagemEnviada rec">mensagem mensagem mensagem</div>
        </div>
        <span className="rev">11:07</span>
      </div>
      <div className="BlocoMensagem">
        <div className="mensagemAlinhada">
          <img src={img1}  alt="Iconea/Foto" className="rounded-circle"width="70px" height="50px"></img>
          <div className="mensagemRecebida rec">mensagem mensagem mensagem</div>
        </div>
          <span className="rec">11:11</span>
      </div>
      <br />
      <div className ="enviar">
        <textarea placeholder="Enviar Mensagem..." />
        <input type="submit" value="Enviar"/> 
      </div>
    </div>
   
  );
  }


  export default Social;
