import Link from 'next/link';
import Icon from '@mdi/react';
import Head from 'next/head';
import HeroFooter from '../components/HeroFooter';

export default function Movies() {
    return (
        <div>
            <Head>
                <meta property="og:description" content="De la Merca Short Movies." key="description-facebook" />
                <meta name="twitter:description" content="De la Merca Short Movies." />
            </Head>
            <section className="hero is-dark is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1 delamercaTitle" style={{ color: "#e7401d" }}>
                            De la Merca Short Movies
                        </h1>
                        <div className="level">
                            <div className="level-item">
                                <div className="container">
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
                                    <figure class="image is-16by9">
                                        <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/h9nf7E57Wjo" title="De La Merca Faraones"
                                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="level">
                            <div className="level-item">
                                <h1 className="title is-1 delamercaTitle" style={{ color: "#e7401d" }}>
                                    DLM
                                </h1>
                            </div>
                        </div>
                        <div className="level">
                            <div className="level-item">
                                <img src="/Bigoti.svg" width="250" style={{ marginBottom: "1em" }} />
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


