import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Privacitat() {

    return (<Pagina>
        <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title delamercaTitle">
                        Privacitat
                        </h1>
                </div>
            </div>
        </section>
        <section className="container section content">
            <p className="para"><b>No guardem informació dels nostres jugadors als nostres servidors.</b>. Depenem de serveis proporcionats per terces per mostrar publicitat i captar esdeveniments <i>in-game</i> amb l'objectiu de millorar l'experiència de joc.
            En aquests moments, utilitzem tres serveis diferents de Unity Technologies que són susceptibles de captar informació teva mentre jugues:</p>
            <ul>
                <li><a href='https://docs.unity.com/ads/GoogleDataSafety.html' target='_blank'>Unity Ads</a></li>
                <li><a href='https://docs.unity.com/mediation/GoogleDataSafety.html' target='_blank'>Unity Mediation</a></li>
                <li><a href='https://docs.unity.com/analytics/GoogleDataSafety.html' target='_blank'>Unity Analyics</a></li>
            </ul>       
            <p className="para">Clica al nom de cada servei per veure quina informació es guarda als servidors de Unity Technologies mentre jugues a De La Merca.</p>            
            <Link href="/en/privacy">
                  <a>
                    Read this content in English.
                  </a>
                </Link> 
                <br/>
                <Link href="/es/privacidad">
                  <a>
                    Lee el contenido de esta página en Español.
                  </a>
                </Link> 
        </section>
    </Pagina>)



}

export default Privacitat;