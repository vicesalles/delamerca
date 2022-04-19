import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Privacidad() {

    return (<Pagina>
        <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title delamercaTitle">
                        Privacidad
                        </h1>
                </div>
            </div>
        </section>
        <section className="container section content">
            <p className="para"><b>No almacenamos información de nuestros jugadores en nuestros servidores</b>. Dependemos de servicios de proveedores externos para mostrar anuncios y captar analíticas de juego con el objetivo de mejorar la experiencia de juego. 
            Dicha información se almacena en los servidores de nuestro proveedor.
            En este momento utilizamos tres servicios distintos de Unity Technologies que captan información mientras juegas:</p>
            <ul>
                <li><a href='https://docs.unity.com/ads/GoogleDataSafety.html' target='_blank'>Unity Ads</a></li>
                <li><a href='https://docs.unity.com/mediation/GoogleDataSafety.html' target='_blank'>Unity Mediation</a></li>
                <li><a href='https://docs.unity.com/analytics/GoogleDataSafety.html' target='_blank'>Unity Analyics</a></li>
            </ul>       
            <p className="para">Clicando podrás ver qué tipo de información captan dichos servicios mientras juegas a De La Merca.</p>            
            <Link href="/en/privacy">
                  <a>
                    Read this content in English.
                  </a>
                </Link>            
                <br/>
                <Link href="/ca/privacitat">
                  <a>
                    Llegeix el contingut d'aquesta pàgina en Català.
                  </a>
                </Link> 
        </section>
    </Pagina>)



}

export default Privacidad;