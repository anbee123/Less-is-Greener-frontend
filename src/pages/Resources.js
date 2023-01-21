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
        <section id="resource-container">
            <div className="resource-list">
            <h5 className="title">Read More About our Environment</h5>
            <ul>
                <li><a href="https://www.rainforest-alliance.org/">What do Rainforest Alliance do?</a></li>
                <li><a href="https://www.worldwildlife.org/initiatives/forests">Why Forest Matters?</a></li>
                <li><a href="https://www.globalforestwatch.org/">Global Forest Watch</a></li>
                <li><a href="https://www.oceanconservancy.org/">How to protect ocean</a></li>
                <li><a href="https://www.panda.org/oceans">WWF - Oceans</a></li>
                <li><a href="https://www.oceanhero.today/">Ocean Hero</a></li>
             </ul>
        </div>
        <div className="resource-list">
            <h5 className="title">Fun Resources!</h5>
            <ul>
                <li><a href="https://seas.umich.edu/assets/games/quiz-game/">Grow and Test Your Green Knowledge</a></li>
                <li><a href="https://seas.umich.edu/assets/games/wheel-of-sustainability/">Wheel of Sustainablity</a></li>
                <li><a href="https://games4sustainability.org/">Sustainability through serious games and social stimulation</a></li>
                <li><a href="https://berecycled.org/game/">Super Sorter Game: Sort recyclables by materials! </a></li>
                <li><a href="https://seas.umich.edu/assets/games/day-in-life/">Day In The Life </a></li>
                <li><a href="https://plays.org/design-squad-fidgit-power/">Design-Squid-Fidgit: Renewable Energy Game</a></li>
             </ul>
        </div>
        </section>
        
            
        </div>
            
    
    );
};

export default Resources;
