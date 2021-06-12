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
            <p className="para">  M'invento històries. Són històries de mentida. A vegades s'assemblen a la realitat però no és pas culpa meva. Les històries bones viatgen d'un cap a l'altre sense parar. Les històries viatgen a través d'un mitjà. Vull dir, que per arribar dins dels
            caps, necessàriament han de seguir un camí. Entren pels ulls, per les orelles... I ho fan prenent forma de paraules, sons o imatges... Vehicles polimòrfics que aspiren a arribar a un únic destí: El cap de la persona. Llavors, un cop arribats,
            intentaran fer-ne una de grossa, i miraran de contactar amb els sentiments, els valors, els records que hi habiten. Si la interacció és fructífera, es despertaran emocions. Res de tot això no passarà si el vehicle que transporta la teva història,
            no és capaç de superar la legítima barrera d'indiferència i escepticisme pròpia de la ment contemporània. Una ment permanent assetjada per informació irrellevant o directament nociva.</p> 
            
            <p className="para">Si els teus convoys de vehicles narratius no aconsegueixen arribar al cap de la gent, la teva història no existeix. Si t'agrada explicar històries, t'has de convertir en un mestre fabricant de vehicles. Porto anys provant-ho sense èxit.
             Primer vaig provar-ho amb els audiovisuals. Mai no vaig comptar amb els recursos, o la constància per aconseguir-los, necessaris per materialitzar la història. Així doncs, em vaig passar a l'escriptura.  Vaig explicar 
            part de la història que volia explicar però va resultar que, el de l'escriptura, és un món de misèria i companyia. Per aguantar imbècils a canvi de quatre molles, ja hi ha altres feines. Feines, per cert, que requereixen moltíssima menys dedicació i cap típus 
            d'implicació emocional. A cagar l'escriptura. 
            </p>      

            <p className="para">
            He decidit canviar-me de mitjà. He guardat la vella història en un calaix i he passat pàgina. <Link href="/ca/cantonades">Estic fent un joc.</Link>  
            </p>

        </section>
    </Pagina>)



}

export default Jo;