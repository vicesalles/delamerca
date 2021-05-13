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
            <p className="para"> Cantonades és un joc casual però intens de decissions de supervivència al carrer. En els darrers anys hem vist com la industria de l'entreteniment ha mitificat el tràfic de drogues. La indústria de la droga, però,
            en té molt poc de romàntic. Quanta estona creus que duraries essent-ne un peó?
            </p>
            
            <p className="para"> El joc està actualment en fase de desenvolupament i sortirà al mercat durant el darrer quart de 2021.</p>

        </section>
    </Pagina>)



}

export default Cantonades;