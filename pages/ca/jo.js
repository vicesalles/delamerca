import Link from 'next/link';
import Pagina from '../../components/Pagina';

function Jo() {

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
            <p className="para">  M'invento històries. Són històries de mentida. A vegades s'assemblen a la realitat però no és pas culpa meva. Les històries bones viatgen d'un cap a l'altre sense parar. Les històries viatgen a través d'un mitjà, segueixen un camí. 
            Sempre passa que aquest camí per on ve la història i la història mateixa es perceben com una sola cosa. Diem que un llibre, un còmic o una sèrie són bons. Poca gent parla de la història. El que vull dir, és que si t'agrada explicar històries t'ha d'agradar
            prepar-los el camí. Primer vaig provar-ho amb els audiovisuals però mai no vaig comptar amb els recursos, o la constància per aconseguir-los, necessaris per explicar la història que volia explicar. Així doncs, em vaig passar a l'escriptura. Vaig explicar 
            part de la història que volia explicar però va resultar que és un món de misèria i companyia. Per aguantar imbècils a canvi de quatre molles ja hi ha altres feines. I feines, a més, que requereixen moltíssima menys dedicació i cap típus 
            d'implicació emocional. A cagar l'escriptura. 
            </p>      

            <p className="para">
            He decidit canviar-me de mitjà. He guardat la vella història en un calaix i he passat pàgina. Estic fent un joc. Vull explicar una història nova. D'una manera nova. 
            </p>

        </section>
    </Pagina>)



}

export default Jo;