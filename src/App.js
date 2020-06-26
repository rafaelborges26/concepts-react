import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import './style.css'
import api from './services/api'



function App() {

    const [projects ,setProjects] = useState([])


useEffect(() => {
    api.get('projects').then(response => {
        setProjects(response.data)
}, [] // para dispararmos funcoes quando ocorrer algum evento - 1 parametro qual funcao eu quero desparar, 2 parametro quando. 2 parametro: se ficar vazio só vai ser alterado quando  
)
})


    async function handleAddProject() {  
        //precisamos chamar a funcao set, para passar qual sera o novo valor de projects   
        //precisamos sempre gerar um novo valor e nao alterar o atual      
        //setProjects([...projects, `projects-${Date.now()}`]) //...copia a informaçao percorrendo todos os vetores 
        const response = await api.post('projects', {
                title: `projects-${Date.now()}`,
                owner: "Rafael"
        })

        const project = response.data

         setProject([...projects, project])
    }




    return (
        <>
        <Header title="Teste1">
            <ul>
                {projects.map(project => <li key={project.id} > {project.title}  </li>)}   

            </ul>
        </Header>
        <button type="button" onClick={handleAddProject} >Create project</button>
        </>
        )
}

export default App