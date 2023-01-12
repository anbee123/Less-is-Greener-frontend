import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"


function Show(props) {

  const { id } = useParams()
  const topic = props.topics.find((topic) => topic._id === id)
  return (
    <div className="topics">
      <h1>{topic.topic}</h1>
      <img src={topic.image} alt={topic.topic} />
      <h2>{topic.titleOne}</h2>
      <Link to={`/topics/${topic._id}`}>
        <h2>{topic.urlOne}</h2> </Link>
      <h2>{topic.titleTwo}</h2>
      <Link to={`/topics/${topic._id}`}>
        <h2>{topic.urlTwo}</h2>
      </Link>
      <h2>{topic.titleThree}</h2>
      <Link to={`/topics/${topic._id}`}>
        <h2>{topic.urlThree}</h2>
      </Link>

    </div>
  )

}

export default Show;