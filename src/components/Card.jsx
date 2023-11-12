import React from 'react';
import {useState } from 'react';
import { BiTrash } from 'react-icons/bi';

function Card({task, onDelete, checkbox, checked}) { /* precisa por entre {} caso queria mudar o estado do outro arquivo */

    return (
        <>
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
        <div class="card">
            <label class="container">
              <input type="checkbox" class = "checkbox" checked = {checked} onClick={() => {checkbox(task)}}/> 
              {/* o OnChange aciona a função que muda o estado do checkbox para checked/unchecked*/}

              <span class='checkmark'></span>
            </label>
            <span className = "task" style={(checked) ? {textDecoration: 'line-through 1.2px'} : {}}>
                {/* Define o estilo (style) do span a partir da variável de estado isChecked*/}

                {/* Se for verdadeira, aplica text-decoration: line-through 2px; no qual marca uma linha
                sobre o texto, caso contrário, não faz nada*/}
              {task}
              {/* para ser identificado como uma variável de estado botar entre {}*/}
            </span>
            <button className = "trash "><BiTrash 
              size = {20}
              color = "#000"
              onClick={() => onDelete(task)}
            /></button>
          </div>
        </>
    )
}
export default Card;