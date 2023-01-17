import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"


function Show(props) {

  const { id } = useParams()
  const topic = props.topics.find((topic) => topic._id === id)
  console.log(props.topics)

//   console.log(topic.urlOne)
  return (
    <div className="list">
      <h1>{topic.topic}</h1>
      <img src={topic.image} alt={topic.topic} /><br/>
      <a href = {topic.urlOne} target = "_blank">{topic.titleOne}</a><br/>
      <a href = {topic.urlTwo} target = "_blank">{topic.titleTwo}</a><br/>
      <a href = {topic.urlThree} target = "_blank">{topic.titleThree}</a><br/>
     
      <Link to={`/lessisgreener/${topic._id}/edit`}>edit</Link>

    </div>
  )

}

export default Show;