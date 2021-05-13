import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Cantonades() {

    return (<Pagina>
        <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title delamercaTitle">
                        Sobre mi
                        </h1>
                </div>
            </div>
        </section>
        <section className="container section content">
            <p className="para">  Sóc un creador de continguts. Explico històries de mentida. A vegades s'assemblen a la realitat però no és culpa meva. Després de deixar aparcada la creació audiovisual degut a la meva incapacitat econòmica, em vaig passar a l'escriptura.
            Vaig deixar l'escriptura degut a la seva nul·la viabilitat econòmica. Ara he canviat de format i de tema. El conte en el que treballo, s'ambienta en la indústria de la droga. Una indústria que, com en totes, el que s'espera de tu va en contra dels
            teus interessos.
            </p>      

        </section>
    </Pagina>)



}

export default Cantonades;