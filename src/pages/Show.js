import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"


function Show(props) {

  const { id } = useParams()
  const topic = props.topics.find((topic) => topic._id === id)

  console.log(topic.urlOne)
  return (
    <div className="topics">
      <h1>{topic.topic}</h1>
      <img src={topic.image} alt={topic.topic} />
      <Link to={`/topics/${topic.urlOne}`}>
      <h2>{topic.titleOne}</h2>
    </Link>
    <Link to={`/topics/${topic.urlTwo}`}>
      <h2>{topic.titleTwo}</h2>
      </Link>
      <Link to={`/topics/${topic.urlThree}`}>
      <h2>{topic.titleThree}</h2>
    
      </Link>

    </div>
  )

}

export default Show;