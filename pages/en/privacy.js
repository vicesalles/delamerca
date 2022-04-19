import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Privacy() {

    return (<Pagina>
        <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title delamercaTitle">
                        Privacy
                        </h1>
                </div>
            </div>
        </section>
        <section className="container section content">
            <p className="para"><b>We don't host any data related with our players</b>. We rely on third-party providers to display ads and to collect in-game events aiming to improve the game experience. 
            At this moment we use three different services from Unity Technologies that are collecting your data while playing:</p>
            <ul>
                <li><a href='https://docs.unity.com/ads/GoogleDataSafety.html' target='_blank'>Unity Ads</a></li>
                <li><a href='https://docs.unity.com/mediation/GoogleDataSafety.html' target='_blank'>Unity Mediation</a></li>
                <li><a href='https://docs.unity.com/analytics/GoogleDataSafety.html' target='_blank'>Unity Analyics</a></li>
            </ul>       
            <p className="para">By clicking each service you'll know which data is collected by Unity when you're playing De La Merca.</p>            
            <Link href="/ca/privacitat">
                  <a>
                    Llegeix el contingut d'aquesta pàgina en Català.
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

export default Privacy;