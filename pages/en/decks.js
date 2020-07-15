import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Decks(){

    return(<Pagina>
            <section className="hero is-danger">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title delamercaTitle">
                            Decks
                        </h1>                   
                    </div>
                </div>
            </section>
            <section className="container section">               
                <p className="para">This is a street decision making game. The player faces scenes with different outcomes. Each situation is 
                represented as a card. I'm looking for grapich artists all around the world willing to depict the streets of their cities on this cards.</p>                    
                <p className="para"> Each game is based on a deck and I want each deck to represent a city. I'd like to have cities from all around the world.</p>
                <p className="para">Each card is divided into two graphic parts:</p>
                
                <p className="para">
                    <ul>
                        <li><b>The background</b> which is a <i>skyline</i> type illustration representing the city shared for all the deck </li>
                        <li><b>The figure</b> which depicts a given street person or situation</li>
                    </ul>
                </p>
                <p className="para">Each deck needs one background and about 20 figures.</p>
              
                <p className="para"><b>I'm actively looking for artists</b> from all around the world, contact me on social media. 
                We'll talk about business. Links bellow.</p>                    
                
           </section>
           <section className="container section ">
            <div className="level">
                <div className="level-item">
                    <iframe src="https://giphy.com/embed/MRxJqmk3MNta8" width="480" height="208" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
            </div>
        </section>
            </Pagina>)


}

export default Decks;