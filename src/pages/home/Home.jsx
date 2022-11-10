import { Footer } from '../../components/Footer/Footer';
import { Menu } from '../../components/Menu/Menu';
import './Home.css'
function Home() {
    return (
      <div>
        <Menu usuario={usuario}></Menu>
        <h1 class="titulo">Controle de Tarefas</h1>
        <Footer></Footer>
      </div>
    );
  }
  
  export default Home;

  const usuario = "Joãozinho";
  