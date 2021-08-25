import Link from 'next/link';
import Pagina from '../../components/Pagina';

function BestStories() {

    return (<Pagina>
        <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title delamercaTitle">
                        Best drug movies
                    </h1>
                </div>
            </div>
        </section>
        <section className="container section content">
            <p className="para"> Netflix's Narcos is probably the most relevant movie/tv series about drug trafficking but it's not the first neither the best.</p>

            <p className="para">In our opinion, the best visual story ever written about the drugs world is The Wire. Set in the late 90's/early 2000's Baltimore, each of its characters is deppicted in its survival struggle. No bad guys, no good guys. 
            Just a broken society where the evil find his spot on people's misery. Each of its characters is a social icon. It's not a regular cops tv show as I was specting when I first saw it about 20 years ago. The Wire it's a master piece.</p>
            
            <p className="para"> Try our <a href="https://play.google.com/store/apps/details?id=com.QueClase.Corners">street survival game</a> De la merca and send us some feed back. 
            It has a micro narrative aim that tries to make the player think about the drugs smuggling problem. It's not easy to find movies, games, or stories in general, targeting adult people.</p>            
            
            <figure class="image is-vcentered">
                    <img  style={{ width:"400px", height:"400px"}} src="/img/esquinasdelamerca.jpg"/>
            </figure>       

        </section>
    </Pagina>)



}

export default BestStories;