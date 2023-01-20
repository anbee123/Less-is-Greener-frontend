
import { Link } from "react-router-dom"


function Home () {
    return(

        <section>
            <div className="home-text animate">
                 <h2 className="title">Less Waste Greener Earth</h2>
                <p id="text">Do you want to make changes to be more environmentally friendly? <br/> Do you want to be part of the solution to pollution? <br/>Any single action you practice today will impact our planet, let's begin!</p>
            </div>
            <div id="div11"><Link to={`/lessisgreener`}><img src="./img/greens.png" alt="reduce"></img></Link></div>
           
           
            <div className="grid-container">
                <div className="div1"><img src="./img/plastic-bag.png" alt="plastic-bag"></img></div>
                <div className="div2"><img src="./img/eco-bag.png" alt="eco-bag"></img></div>
                <div className="div3"><img src="./img/straws.png" alt="straws"></img></div>
                <div className="div4"><img src="./img/reusable-water-bottle2.png" alt="reusable-bottle"></img></div>
                <div className="div5"><img src="./img/reduce-reuse.png" alt="reduce"></img></div>
                <div className="div6"><Link to={`/lessisgreener`}><img src="./img/greens.png" alt="reduce"></img></Link></div>
                <div className="div7"><img src="./img/glass-jars.png" alt="glass-jars"></img></div>
                <div className="div8"><img src="./img/starbucks1.png" alt="takeaway-cups"></img></div>
                <div className="div9"><img src="./img/soap.png" alt="soap"></img></div>
                <div className="div10"><img src="./img/lunchbox.png" alt="lunchbox"></img></div>
            </div>
            
        </section>
        

    )
  }
  
  export default Home
  