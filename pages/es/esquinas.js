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
            <p className="para"> Esquinas De La Merca (DLM) es un juego casual pero intenso de supervivencia callejera. Fuera de Netflix, la industria de la droga no tiene nada de romántico. Es un mundo duro y sucio en el que, difícilmente, se entra como primera opción. 
            Son muchas las voces que afirman que tras la guerra contra la droga, se esconde la guerra contra los pobres. ¿Cuanto te crees que durarías como peón?
            </p>          

            <p className="para"> El juego está actualmente en desarrollo y saldrá al mercado durante el último cuarto de 2021.</p>

            <figure class="image is-vcentered">
                    <img  style={{ width:"400px", height:"400px"}} src="/img/esquinasdelamerca.jpg"/>
            </figure>
            
        </section>
    </Pagina>)



}

export default Esquinas;