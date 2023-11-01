import React from 'react';

function Card({task}) { /* precisa por entre {} caso queria mudar o estado */
    return (
        <>
        <div class="card">
            <label class="container">
              <input type="checkbox"/>
              <span className='checkmark'></span>
            </label>
            <span className = "task">{task}</span> {/* para ser identificado como uma variável de estado botar entre {}*/}
          </div>
        </>
    )
}
export default Card;