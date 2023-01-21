import {Routes, Route} from "react-router-dom"
import {useEffect, useState} from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"
import Add from "../pages/Add"
import Edit from "../pages/Edit"
import Home from "../pages/Home"
import Resources from "../pages/Resources"




function Main(props) {

    const URL = "https://less-is-green.herokuapp.com/lessisgreener"
    
    const [topics, setTopics] = useState([])

    const getTopics = async () =>{
        const res = await fetch (URL)
        const data = await res.json()
        setTopics(data)
        console.log(data)
    }

    const createTopics = async (topic) => {
        await fetch(URL, {
            method: "POST", 
            headers:{
                "Content-Type": "Application/json", 
            }, 
            body: JSON.stringify(topic), 
            
        })
        getTopics()

    }

    const updateTopics = async (topic, id) => {

        await fetch (URL + id, {
            method: "PUT", 
            headers:{
                "Content-Type": "Application/json", 
            }, 
            body: JSON.stringify(topic), 
        })
        getTopics()
    }

    const deleteTopics = async(id) => {

        await fetch (URL + id, {
            method: "DELETE"
        })
        getTopics()
    }

    useEffect ( () => {
        getTopics()

    }, [])
   
    return (
        <main>

            <Routes>
                <Route
                   exact path ="/"
                   element={<Home/>}
                   />
                <Route 
                    exact path="/lessisgreener" 
                    element={<Index topics = {topics} />} />
                <Route 
                    path="/lessisgreener/:id" 
                    element={<Show topics = {topics}/>} />
                <Route
                    path="/lessisgreener/add" 
                    element = {<Add topics = {topics} createTopics = {createTopics} />}/>
                <Route
                    path="/lessisgreener/:id/edit" 
                    element = {<Edit topics = {topics} updateTopics = {updateTopics} deleteTopics = {deleteTopics}/>}/>    
        
            <Route
                    path="/lessisgreener/resources" 
                    element = {<Resources/>}/>    
            </Routes>


        </main>
    )
    
  }
  
  export default Main;