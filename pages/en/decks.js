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
                <p className="para">De la merca is a decision making sequence. The player faces scenes with three possible outcomes. I see each scene as an illustrated card. Each card depicts a dayly situation 
                    with it's embeded consequences. The art is decisive here. The text presence is crucial but it will be minimalist. Each card will have less characters than a tweet. So most of the part
                    of the storytelling will be in charge of the graphic artist. The artist will set the field where the user imagination will create the actual story.</p>                    
                <p className="para">My aim is to create thematic decks with artists of all around the world. All the decks will share events but with cultural tones. We can see the same street traffiking drama all around the world.
                    I'd like the player to visit the cultural diversity through the artist expression.</p>
                <p className="para">Each card is divided into two parts: <b>The background</b> which is a <i>skyline</i> type illustration shared for all the deck and the <b>figure</b>, which actually depicts the escene</p>
                <p className="para">I'm activelly looking for artists all around the world, contact me on social media. Links bellow.</p>
            </section>
            </Pagina>)


}

export default Decks;