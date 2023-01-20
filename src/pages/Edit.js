import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'



function Edit(props) {
    const {id} = useParams(); 
    const topic = props.topics.find((topic)=>topic._id === id)
    let navigate = useNavigate()

    const[editForm, setEditForm] = useState(topic)

    const handleChange =(event) =>{
        setEditForm((prevState) => ({
             ...prevState, [event.target.name]: event.target.value,
        }))
        console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateTopics(editForm, topic._id)
        console.log(editForm)
        navigate("/lessisgreener")
    }

    const removeTopic = () => {
        props.deleteTopics(topic._id)
        navigate("/lessisgreener")
    }
    return(
        <section className="content-layout">
            
          <form onSubmit={handleSubmit}>
            <div>
              Topic:<input
              className="input"
              type="text"
              value={editForm.topic}
              name="topic"
              placeholder="topic"
              onChange={handleChange}
            />
            </div>
            <div>
              Icon:<input
              className="input"
              type="text"
              value={editForm.icon}
              name="icon"
              placeholder="icon"
              onChange={handleChange}
            /> 
            </div>
            
            <div>
              Image:<input
              className="input"
              type="text"
              value={editForm.image}
              name="image"
              placeholder="image"
              onChange={handleChange}
            />  
            </div>
            
            <div>
              Title 1:<input
              className="input"
              type="text"
              value={editForm.titleOne}
              name="titleOne"
              placeholder="title"
              onChange={handleChange}
            />
            </div>
            
            <div>
              URL 1: <input
              className="input"
              type="text"
              value={editForm.urlOne}
              name="urlOne"
              placeholder="url"
              onChange={handleChange}
            /> 
            </div>
            
            <div>
              Title 2:<input
              className="input"
              type="text"
              value={editForm.titleTwo}
              name="titleTwo"
              placeholder="title"
              onChange={handleChange}
            /> 
            </div>
           
            <div>
              URL 2:<input
              className="input"
              type="text"
              value={editForm.urlTwo}
              name="urlTwo"
              placeholder="url"
              onChange={handleChange}
            />
            </div>
      
            <div>
              Title 3:<input
              className="input"
              type="text"
              value={editForm.titleThree}
              name="titleThree"
              placeholder="title"
              onChange={handleChange}
            /> 
            </div>
            
            <div>
              URL 3:<input
              className="input"
              type="text"
              value={editForm.urlThree}
              name="urlThree"
              placeholder="url"
              onChange={handleChange}
            /> 
            </div>
            
            <div><input id = "update-button"className="input" type="submit" value="Update"/></div>
            <button id="delete-button" className="input button" onClick = {()=>removeTopic(topic._id)}>Delete</button>

          </form>
        </section>
      )
  }
  
  export default Edit;