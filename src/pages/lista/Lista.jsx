import { Footer } from "../../components/Footer/Footer";
import { Menu } from "../../components/Menu/Menu";

function Lista({usuario}) {
  return (
    <div>
      <Menu usuario={usuario}></Menu>
      <h1>Lista de tarefas</h1>
      <ul>
        <li>Tarefa 01</li>
        <li>Tarefa 02</li>
        <li>Tarefa 03</li>
      </ul>
      <Footer></Footer>
    </div>

  );
}

export default Lista;
