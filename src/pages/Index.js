import {Link} from "react-router-dom"

function Index(props) {

  const loaded =()=>{

    return props.topics.map((topic) =>(
      <div className="topics" key = {topic._id}>
        <Link to={`/lessisgreener/${topic._id}`}>
          <h2>{topic.topic}</h2>
        </Link>
           <img src={topic.icon} alt="icon"/>
      </div>
    ))
 
  }
  const loading = () => {
    return <h1>Loading...</h1>
  }
  return(
  <div>
    {props.topics ? loaded() : loading()}
  </div>
  )
  }
  
  export default Index;