import { useEffect, useState } from 'react'
import './styles.css'
import Card from './components/Card'; /* precisa ser em upperCase a primeira letra */

function App() {
  const [task, setTask] = useState('');
  const[tasks, setTasks] = useState([]); /* note que para listas utiliza [] dentro do useState */

  const handleTask = (e) => { /* usei const invés de function */
    e.preventDefault(); /*  evita que a página seja recarregada quando o formulário é enviado.*/

    setTasks([...tasks, task]);
    /* Atualiza o estado tasks adicionando a nova tarefa (task) à lista existente (...tasks). 
    Isso preserva as tarefas antigas e adiciona a nova tarefa. */

    setTask('');
  }

  const handleKeyPress = (event) => { /* para utilizar o enter como submit */
    if (event.key === 'Enter') {
      event.preventDefault(); 
    }
  };

  return (
    <>
      <header>
        <h1>To do List</h1>
      </header>
      <main>
        <div className='conteudo'>
          <div className='tipos'>
            <h2 className='all'>All</h2>
            <h2 className='undone'>Undone</h2>
            <h2 className='completed'>Completed</h2>
          </div>
        <div class="minus icon"></div>
          <form onSubmit={handleTask}>
          <div class="group">
            <input 
              placeholder="Add details" 
              type="text" 
              class="input"
              onChange={(e) => setTask(e.target.value)}
              onKeyUp={handleKeyPress}
              /* notei que só aperece as funções e funciona se cada uma tiver em uma linha para cada */
              />
            
              <button class="button" onClick={handleTask}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20" fill="none" class="svg-icon"><g stroke-width="1.5" stroke-linecap="round" stroke="#de8a2a"><circle r="7.5" cy="10" cx="10"></circle><path d="m9.99998 7.5v5"></path><path d="m7.5 9.99998h5"></path></g></svg>
                <span class="lable">Add</span>
              </button>
            </div>
          </form>
          {tasks.map((item, index) => (
            <Card key={index} task={item}/>
          ))}
        </div>
      </main>
      <footer>
        <h4>Created by marcelopetroni - devChallenges.io</h4>
      </footer>
    </>
  )
}

export default App
