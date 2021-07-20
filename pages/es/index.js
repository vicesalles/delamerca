import Link from 'next/link';
import Head from 'next/head';
import Icon from '@mdi/react'
import { mdiTwitter, mdiInstagram, mdiDiscord, mdiCashMultiple } from '@mdi/js'
import TopMenu from '../../components/TopMenu'
import MailChimpForm from '../../components/MailChimpForm';

import HeroFooter from '../../components/HeroFooter';

export default function Home() {
  return (
    <div>
      <Head>
        <meta property="og:description" content="Juego indie sobre supervivencia callejera." key="description-facebook" />
        <meta name="twitter:description" content="Juego indie sobre supervivencia callejera." />
      </Head>
      <section className="hero is-dark is-fullheight">
        <div className="hero-head">
          <TopMenu />
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <img className="logo" src="/delaMerca.svg" width="250" />
            <h2 className="subtitle homeSubtitle">
            <Link href="/es/esquinas"><span  className="cornersLink">"Esquinas"</span></Link> es mi primer juego. Es un juego senzillo de toma de decisiones donde nunca puedes ganar.
            </h2>  
            <h1 className="title delamercaSubtitle">
              cuanto crees que durarías?
            </h1>
            <div className="level">
              <div className="level-item">
              <a href='https://play.google.com/store/apps/details?id=com.QueClase.Corners&pcampaignid=delamerca.com-es-home'><img width="200" alt='Disponible en Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png'/></a>    
               </div>
            </div>                  
          </div>
          </div>      
  
        <HeroFooter/>
      </section>
    </div>
  )
}

