import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"


function Show(props) {

  const { id } = useParams()
  const topic = props.topics.find((topic) => topic._id === id)
  console.log(props.topics)

  return (
    <div>
      <div >
        <img id = "image" src={topic.image} alt={topic.topic} /><br/>
        <div id="list">
            <p><span id="click">Click the links </span><br/> To find out the problems and be part of the solutions</p>
            <a href = {topic.urlOne} target = "_blank" rel="noreferrer">{topic.titleOne}</a><br/>
            <a href = {topic.urlTwo} target = "_blank" rel="noreferrer">{topic.titleTwo}</a><br/>
            <a href = {topic.urlThree} target = "_blank" rel="noreferrer">{topic.titleThree}</a><br/>
        </div>
        
      </div>
      
      
     
      <Link to={`/lessisgreener/${topic._id}/edit`}><button id="edit-button" className="input button">Edit</button></Link>

    </div>
  )

}

export default Show;