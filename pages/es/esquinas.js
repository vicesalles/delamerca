import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Esquinas() {

    return (<Pagina>
        <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title delamercaTitle">
                        Esquinas
                        </h1>
                </div>
            </div>
        </section>
        <section className="container section content">
            <p className="para"> De La Merca Esquinas (DLM) es un juego hiper casual pero intenso de supervivencia callejera. Fuera de los narcos de Netflix, la industria de la droga no tiene nada de romántico. Es un mundo duro y sucio en el que, difícilmente, se entra como primera opción. 
            Son muchas las voces que afirman que tras la guerra contra la droga, se esconde la guerra contra los pobres. ¿Cuanto te crees que durarías como peón?
            </p>          

            <p className="para">En este juego, empezarás la partida con 20 pavos y 3 pollos de merca. Tendrás que ser listo y tener suerte para sobrevivir a las calles salvajes.</p>

            <p className="para"> El juego está actualmente en desarrollo y saldrá al mercado durante el último cuarto de 2021. De la merca es un juego gratis para Android. No se contemplan otras plataformas.</p>

            <p className="para"> Da soporte al proyecto y píllate <a href="https://delamerca.net" target="_blank"> una camiseta DLM</a></p>


            <figure class="image is-vcentered">
                    <img  style={{ width:"400px", height:"400px"}} src="/img/esquinasdelamerca.jpg"/>
            </figure>
            
            <p>20/07/21: Ya estamos en fase beta.</p>

            <a href='https://play.google.com/store/apps/details?id=com.QueClase.Corners&pcampaignid=delamerca.com-es-esquinas'><img width="200" alt='Disponible en Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png'/></a>    
             
            <p>15/08/21: Lanzo el canal de youtube.</p>
            <a href='https://www.youtube.com/channel/UCVYbb6OnpP8AMlWEc_BVh0A'>De la merca Youtube</a>
        </section>
    </Pagina>)



}

export default Esquinas;