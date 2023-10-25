import { useState } from 'react'
import './styles.css'

function App() {
  const [count, setCount] = useState(0);

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
        <div>
        <div class="minus icon"></div>
        <div class="group">
            <input placeholder="Add details" type="text" class="input"/>
            <button class="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20" fill="none" class="svg-icon"><g stroke-width="1.5" stroke-linecap="round" stroke="#de8a2a"><circle r="7.5" cy="10" cx="10"></circle><path d="m9.99998 7.5v5"></path><path d="m7.5 9.99998h5"></path></g></svg>
              <span class="lable">Add</span>
            </button>
        </div>
          </div>
        </div>
      </main>
      <footer>
        <h4>Created by marcelopetroni - devChallenges.io</h4>
      </footer>
    </>
  )
}

export default App
