import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Callejero() {

    return (<Pagina>
        <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title delamercaTitle">
                        Supervivencia Callejera
                        </h1>
                </div>
            </div>
        </section>
        <section className="container section content">
            <p className="para"> De la merca es un juego casual pero intenso de toma de decisiones callejeras. Cómo traficante de bajo nivel, deberás decidir como ganarte el pan y sobrevivir a las duras calles.
            </p>
            
        </section>
    </Pagina>)



}

export default Callejero;