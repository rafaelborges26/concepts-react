import React, { useState } from 'react'
import Header from './components/Header'

function App() {

    const [projects ,setProjects] = useState(['teste1', 'teste2'] )

    function handleAddProject() {  
        //precisamos chamar a funcao set, para passar qual sera o novo valor de projects   
        //precisamos sempre gerar um novo valor e nao alterar o atual      
        setProjects([...projects, `projects-${Date.now()}`]) //...copia a informaçao percorrendo todos os vetores 
        console.log(projects)

    }

    return (
        <>
        <Header title="Teste1">
            <ul>
                {projects.map(project => <li key={project} > {project}  </li>)}   

            </ul>
        </Header>
        <button type="button" onClick={handleAddProject} >Create project</button>
        </>
        )
}

export default App