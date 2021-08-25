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
        <meta property="og:description" content="Joc indie de supervivència al carrer." key="description-facebook" />
        <meta name="twitter:description" content="Joc indie de supervivència al carrer." />
      </Head>
      <section className="hero is-dark is-fullheight">
        <div className="hero-head">
          <TopMenu />
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <img className="logo" src="/delaMerca.svg" width="250" />
            <h2 className="subtitle homeSubtitle">
              <Link href="/ca/cantonades"><span  className="cornersLink">De la merca</span></Link> és un joc de supervivència de carrer on mai no pots guanyar.
            </h2>  
            <h1 className="title delamercaSubtitle">
              Quants dies creus que duraràs?
            </h1>
            <div className="level">
              <div className="level-item">
              <a href='https://play.google.com/store/apps/details?id=com.QueClase.Corners&pcampaignid=delamerca.com-ca-home'><img width="200" alt='Disponible a Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/ca_badge_web_generic.png'/></a>
              </div>
            </div>          
          </div>
          </div>      
  
        <HeroFooter/>
      </section>
    </div>
  )
}

