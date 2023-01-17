import {Link} from "react-router-dom"

function Index(props) {

  const loaded =()=>{

    return props.topics.map((topic) =>(
      <div className="topics" key = {topic._id}>
        <img id = "icon" src={topic.icon} alt="icon"/>
        <Link to={`/lessisgreener/${topic._id}`}>
          <p>{topic.topic}</p>
        </Link>
           
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