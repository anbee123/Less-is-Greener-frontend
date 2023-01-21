import {Link} from "react-router-dom"

function Index(props) {

  const loaded =()=>{

    return props.topics.map((topic) =>(
      <div  key = {topic._id}>
        <Link to={`/lessisgreener/${topic._id}`}>
          <div className="topics">
            <div id="icon">
                <img  src={topic.icon} alt="icon"/>
            </div>   
            <p>{topic.topic}</p>
          </div>
          
        </Link>
           
      </div>
    ))
 
  }
  const loading = () => {
    return <h1>Loading...</h1>
  }
  return(
  <div className="content-margin">
    <div id="content-title">
        <h3 className="title">What are you here for? </h3>
        <p>Click any items to have ideas and get inspired</p>
    </div>
    <div className="index-container">
        {props.topics ? loaded() : loading()}
    </div>
    
  </div>
  )
  }
  
  export default Index;