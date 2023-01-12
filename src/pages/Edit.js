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
        console.log("button clicked")
        navigate("/")
    }
    return (
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={editForm.topic}
              name="topic"
              placeholder="topic"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editForm.icon}
              name="icon"
              placeholder="icon"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editForm.image}
              name="image"
              placeholder="image"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editForm.titleOne}
              name="titleOne"
              placeholder="title"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editForm.urlOne}
              name="urlOne"
              placeholder="url"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editForm.titleTwo}
              name="titleTwo"
              placeholder="title"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editForm.urlTwo}
              name="urlTwo"
              placeholder="url"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editForm.titleThree}
              name="titleThree"
              placeholder="title"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editForm.urlThree}
              name="urlThree"
              placeholder="url"
              onChange={handleChange}
            />
            <input type="submit" value="Update" />
          </form>
        </section>
      );
  }
  
  export default Edit;