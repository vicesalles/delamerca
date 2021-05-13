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
            <img src="/delaMerca.svg" width="250" />
            <h2 className="subtitle homeSubtitle">
              "Cantonades" és el meu primer joc
            </h2>  
            <h1 className="title delamercaSubtitle">
              Quan et penses que duraries?
            </h1>
            <MailChimpForm label="Subscriu-te al diari de desenvolupament"/>          
          </div>
          </div>      
  
        <HeroFooter/>
      </section>
    </div>
  )
}

