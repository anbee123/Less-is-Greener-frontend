// import './Resources.css';

const Resources = () => {
    return (
       
        <div className="resources-container">
            <div id="home-container"> 
            <iframe width="800" height="515" src="https://www.youtube.com/embed/D-0QStAzmBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            {/* <p id="intro">
            Making changes to be more environmentally friendly doesn't need to be the life altering decision that the media tends to display.  Small actions like minimizing our use of paper towels, taking the bus to school, or even bringing your lunch in reusable plastics can make a huge difference in our school's environmental footprint. </p>
            */}
        </div>

        <div id="resource-list">
            <p>Read more about our environment</p>
            <ul>
                <li><a href="https://www.rainforest-alliance.org/">What do Rainforest Alliance do?</a></li>
                <li><a href="https://www.worldwildlife.org/initiatives/forests">Why Forest Matters?</a></li>
                <li><a href="https://www.globalforestwatch.org/">Global Forest Watch</a></li>
                <li><a href="https://www.oceanconservancy.org/">How to protect ocean</a></li>
                <li><a href="https://www.panda.org/oceans">WWF - Oceans</a></li>
                <li><a href="https://www.oceanhero.today/">Ocean Hero</a></li>
             </ul>
        </div>
            
        </div>
            
    
    );
};

export default Resources;
