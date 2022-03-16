import Link from 'next/link';
import Icon from '@mdi/react';
import Head from 'next/head';
import { mdiTwitter, mdiInstagram, mdiDiscord, mdiCashMultiple } from '@mdi/js'
import HeroFooter from '../components/HeroFooter';

export default function Home() {
    return (
        <div>
            <Head>
                <meta property="og:description" content="De la Merca Real Crime." key="description-facebook" />
                <meta name="twitter:description" content="De la Merca Real Crime." />
                <meta http-equiv='content-language' content='en-gb'></meta>
            </Head>
            <section className="hero is-dark is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1 delamercaTitle" style={{ color: "#e7401d" }}>
                            De la Merca Real Crime
                        </h1>
                        <div className="level">
                            <div className="level-item">
                                <a class="twitter-timeline" href="https://twitter.com/delamerca?ref_src=twsrc%5Etfw" target="_blank">Tweets by delamerca</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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


