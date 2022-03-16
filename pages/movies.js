import Link from 'next/link';
import Icon from '@mdi/react';
import Head from 'next/head';
import HeroFooter from '../components/HeroFooter';

export default function Movies() {
    return (
        <div>
                <Head><title>De la Merca - Street survival short movies.</title>  
                <meta name="description" content="Street survival movies."/>    
                <meta property="og:description" content="De la Merca Micro Movies." key="description-facebook" />
                <meta name="twitter:description" content="De la Merca Micro Movies." />
            </Head>
            <section className="hero is-dark is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1 delamercaTitle" style={{ color: "#e7401d" }}>
                            De la Merca Micro Movies
                        </h1>
                        <div className="level">
                            <div className="level-item">
                                <div className="container">
                                    <h2 className="title is-2 delamercaTitle" style={{textAlign:"left"}}>Paga</h2>
                                    <figure class="image is-16by9">
                                        <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/a2p-mUxQhEg" title="De La Merca Pay your debts"
                                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="level">
                            <div className="level-item">
                                <div className="container">
                                    <h2 className="title is-2 delamercaTitle" style={{textAlign:"left"}}>Faraones</h2>
                                    <figure class="image is-16by9">
                                        <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/h9nf7E57Wjo" title="De La Merca Faraones"
                                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="level">
                            <div className="level-item">
                                <div className="container">
                                    <h2 className="title is-2 delamercaTitle" style={{textAlign:"left"}}>Mota</h2>
                                    <figure class="image is-16by9">
                                        <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/KbcgCHgrEN0" title="Mota"
                                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="level">
                            <div className="level-item">
                                <div className="container">
                                    <h2 className="title is-2 delamercaTitle" style={{textAlign:"left"}}>Wanted by the police</h2>
                                    <figure class="image is-16by9">
                                        <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/Nx9tP0psq5w" title="Wanted by the police"
                                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="level">
                            <div className="level-item">
                            <Link href="/">
                                <h1 className="title is-1 delamercaTitle" style={{ color: "#e7401d",  cursor:'pointer'}}>
                                    DLM
                                </h1>
                            </Link>
                            </div>
                        </div>
                        <div className="level">
                            <div className="level-item">
                                <img src="/Bigoti.svg" width="250" style={{ marginBottom: "1em" }} />
                            </div>
                        </div>
                        <div className="level">
              <div className="level-item">
              <a href='https://play.google.com/store/apps/details?id=com.QueClase.Corners&pcampaignid=delamerca.com-movies'><img width="200" alt='Disponible en Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png'/></a>    
               </div>
            </div>  
                        <div className="level">
                            <div className="level-item">
                                <Link href="/es">
                                    <a className="langLink">
                                        Español
                                    </a>
                                </Link>
                                <Link href="/en">
                                    <a className="langLink">
                                        English
                                    </a>
                                </Link>
                                <Link href="/ca">
                                    <a className="langLink">
                                        Català
                                    </a>
                                </Link>
                            </div>



                        </div>
                    </div>

                </div>
                <HeroFooter />
            </section>
        </div>
    )
}


