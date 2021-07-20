import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Corners() {

    return (<Pagina>
        <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title delamercaTitle">
                        Corners
                        </h1>
                </div>
            </div>
        </section>
        <section className="container section content">
            <p className="para"> Corners de la merca (DLM) is a casual but intense game. We all have seen how the entertainment industry is depicting the drugs industry. Far from Netflix, the drugs world ain't romantic at all. 
            For how long you thing you'd gonna last?</p>

            <p className="para">In this game, you'll start with 20 bucks and a little of merca. You'll need to be smart and lucky to survive the wild streets.</p>
            
            <p className="para"> The game is currently on active development and its release it's expected for Q4 2021</p>

            <p className="para"> Support this project and get yourself <a href="https://delamerca.net" target="_blank">a DLM t-shirt</a></p>
            
            <figure class="image is-vcentered">
                    <img  style={{ width:"400px", height:"400px"}} src="/img/esquinasdelamerca.jpg"/>
            </figure>

            <p>20/07/21: We're on closed beta.</p>

            <a href='https://play.google.com/store/apps/details?id=com.QueClase.Corners&pcampaignid=delamerca.com-corners-en'><img width="200" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
            

        </section>
    </Pagina>)



}

export default Corners;