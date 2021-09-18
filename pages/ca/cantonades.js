import Link from 'next/link';
import Head from 'next/head';
import Pagina from '../../components/Pagina';

function Cantonades() {

    return (<Pagina>
         <Head>
        <title>De la Merca - Joc gratuït de supervivència al carrer.</title>  
        <meta name="description" content="De la merca és un joc de supervivència al carrer en català només per a Android."/>    
        <meta http-equiv='content-language' content='ca-es'></meta>
        <meta property="og:description" content="Joc indie de supervivència al carrer." key="description-facebook" />
        <meta name="twitter:description" content="Joc indie de supervivència al carrer." />
        
      </Head>
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
               
            <p className="para"> De la merca Cantonades (DLM) és un joc hiper casual però intens de decissions de supervivència al carrer. En els darrers anys hem vist com la industria de l'entreteniment ha mitificat el tràfic de drogues. La indústria de la droga, però,
            en té molt poc de romàntic. Al contrari del que pot semblar de les luxoses vides que veiem a narcos, el de la droga és un món de patiment. Presó o mort. Quanta estona creus que duraries essent-ne un peó?
            </p>

            <p>El de les drogues, és un d'aquells temes en els quals la hipocresia i la incoherència de la nostra societat brillen amb més força. És per això, que he decidit localitzar el meu primer joc en aquest àmbit tan controvertit. A través de la micronarrativa i, si l'usuari així ho considera, l'humor negra, 
                intento fer evidents algunes de les disfuncions del sistema político-econòmic que donem per vàlid.</p>

            <p>Buscar-se la vida al carrer només té dues sortides: Mort o Presó. De la merca és un joc sense pels a la llengua que fa broma, amb ànims de denúncia, sobre les desgracies que es troben al carrer.</p>
            
            <p className="para"> El joc està en desenvolupament continu i actualment es troba en les primeres fases obertes al públic. De la merca és un joc gratuït disponible només per Android.</p>

            <p className="para"> Pots donar suport al projecte comprant <a href="https://delamerca.net" target="_blank"> una camiseta DLM</a></p>

            <figure class="image is-vcentered">
                    <img  style={{ width:"400px", height:"400px"}} src="/img/esquinasdelamerca.jpg"/>
            </figure>

            <p>20/07/21: Ja estem en fase beta.</p>
            <a href='https://play.google.com/store/apps/details?id=com.QueClase.Corners&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img width="200" alt='Disponible a Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/ca_badge_web_generic.png'/></a>
             
            <p>15/08/21: Llanço el canal de youtube.</p>
            <a href='https://www.youtube.com/channel/UCVYbb6OnpP8AMlWEc_BVh0A'>De la merca Youtube</a>

            <p>18/09/21: El Joc de la merca ja <a href="https://play.google.com/store/apps/details?id=com.QueClase.Corners&pcampaignid=web_vista_cantonades">està disponible</a> a Google Play.</p>
             

        </section>
    </Pagina>)



}

export default Cantonades;