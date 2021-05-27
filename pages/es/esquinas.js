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
            <p className="para"> Esquinas de la merca es un juego casual pero intenso de supervivencia callejera. Fuera de Netflix, la industria de la droga no tiene nada de romántico. ¿Cuanto te crees que durarías como peón?
            </p>          

            <p className="para"> El juego está actualmente en desarrollo y saldrá al mercado durante el último cuarto de 2021.</p>
            
        </section>
    </Pagina>)



}

export default Esquinas;