import Link from 'next/link';
import Head from 'next/head';
import Icon from '@mdi/react'
import { mdiTwitter, mdiInstagram, mdiDiscord, mdiCashMultiple } from '@mdi/js'
import TopMenu from '../../components/TopMenu'
import MailChimpForm from '../../components/MailChimpForm';

import HeroFooter from '../../components/HeroFooter';

export default function Opinions() {
  return (
    <div>
      <Head>
        <title>De la Merca - Opinions joc de supervivència al carrer.</title>  
        <meta name="description" content="Opinions de la merca, joc android de supervivència al carrer en català."/>    
        <meta http-equiv='content-language' content='ca-es'></meta>
        <meta property="og:description" content="Opinions joc indie de supervivència al carrer." key="description-facebook" />
        <meta name="twitter:description" content="Opinions joc indie de supervivència al carrer." />
      </Head>
      <TopMenu />
      <section className="hero is-danger is-fullheight-with-navbar">
        <div className="hero-head is-dark">
         
        </div>
        <div className="hero-body">
           
          <div className="container has-text-centered">
          <p class="title">
                Opinions
            </p>
            <div className="container opinio">
                <h1 className="">
                "El fill bastard del GTA i el Reigns"
                </h1>
                <h2 className=" ">
                - un senyor savi
                </h2>   
            </div>
            <div className="container opinio">
                <h1 className="">
                "Si algun subnormal et diu que li agrada, és que és més subnormal que tu"
                </h1>
                <h2 className=" ">
                - la meva dona
                </h2>   
            </div>
            <div className="container opinio">
                <h1 className="">
                "Què collons és això?"
                </h1>
                <h2 className="">
                - un ex-amic
                </h2>  
            </div>
            <div className="container opinio">
                <h1 className="">
                "Ha quedat molt maco"
                </h1>
                <h2 className="">
                - la meu mare
                </h2>    
            </div>
            <a href='https://play.google.com/store/apps/details?id=com.QueClase.Corners&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img width="200" alt='Disponible a Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/ca_badge_web_generic.png'/></a>
             
          </div>      
        </div>      
  
        <HeroFooter/>
      </section>
    </div>
  )
}

