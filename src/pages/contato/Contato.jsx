import './Contato.css'
import { Menu } from '../../components/Menu/Menu'
import { Footer } from '../../components/Footer/Footer'
import contatotitle from '../../assets/images/contatotitle.png'
<div className=""></div>
function Contato() {
    return (
      <div>
        <div id='contact-header'>
        <Menu usuario={usuario}></Menu>
        <img src={contatotitle} id='fale-conosco' alt="" />
        </div>
        <div id='titulo'>
          <h2 id="titulo-entre-em-contato">ENTRE EM CONTATO</h2>
          <div id="contato-sub"></div>
          <h4 id="contato-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus, repellendus ab molestiae, adipisci a laudantium eaque laborum tenetur ratione velit aliquid voluptatum dolorem omnis neque! Earum deserunt ratione asperiores.</h4>
        </div>
        <div class="container">
          <form id="form" action="">
            <div>
              <input class="formulario" type="text" name="name" placeholder="Digite seu nome" />
              <input class="formulario" type="e-mail" name="e-mail" placeholder="Digite seu email" />
              <input class="formulario" type="tel" name="phone" placeholder="Digite seu telefone" />
              </div>
            <div id='text'>
              <textarea id='text-area' name='text' placeholder="'Podemos ajuda-lo" cols="55" rows="9"></textarea>
            </div>
              <button id='botao-enviar' type="submit">Enviar</button>
          </form>
        </div>
        <footer></footer>
      </div>
    );
  }
  const usuario = "Joãozinho"
  export default Contato;