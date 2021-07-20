import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Cantonades() {

    return (<Pagina>
        <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title delamercaTitle">
                        Cantonades
                        </h1>
                </div>
            </div>
        </section>
        <section className="container section content">
               
            <p className="para"> Cantonades de la merca (DLM) és un joc casual però intens de decissions de supervivència al carrer. En els darrers anys hem vist com la industria de l'entreteniment ha mitificat el tràfic de drogues. La indústria de la droga, però,
            en té molt poc de romàntic. Quanta estona creus que duraries essent-ne un peó?
            </p>

            <p>El de les drogues, és un d'aquells temes en els quals la hipocresia i la incoherència de la nostra societat brillen amb més força. És per això, que he decidit localitzar el meu primer joc en aquest àmbit tan controvertit. A través de la micronarrativa i, si l'usuari així ho considera, l'humor negra, 
                intento fer evidents algunes de les disfuncions del sistema político-econòmic que donem per vàlid.</p>
            
            <p className="para"> El joc està actualment en fase de desenvolupament i sortirà al mercat durant el darrer quart de 2021.</p>

            <p className="para"> Dóna suport al projecte i compra't <a href="https://delamerca.net" target="_blank"> una camiseta DLM</a></p>

            <figure class="image is-vcentered">
                    <img  style={{ width:"400px", height:"400px"}} src="/img/esquinasdelamerca.jpg"/>
            </figure>

            <p>20/07/21: Ja estem en fase beta.</p>
            <a href='https://play.google.com/store/apps/details?id=com.QueClase.Corners&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img width="200" alt='Disponible a Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/ca_badge_web_generic.png'/></a>
             
        </section>
    </Pagina>)



}

export default Cantonades;