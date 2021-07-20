import Link from 'next/link';
import Head from 'next/head';
import Icon from '@mdi/react'
import { mdiTwitter, mdiInstagram, mdiDiscord, mdiCashMultiple } from '@mdi/js'
import TopMenu from '../../components/TopMenu'
import MailChimpForm from '../../components/MailChimpForm';

import HeroFooter from '../../components/HeroFooter';

export default function Reviews() {
  return (
    <div>
      <Head>
        <meta property="og:description" content="Joc indie de supervivència al carrer." key="description-facebook" />
        <meta name="twitter:description" content="Joc indie de supervivència al carrer." />
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
                "If any dumbass says he likes it, he's dumber than you"
                </h1>
                <h2 className=" ">
                - my wife
                </h2>   
            </div>
            <div className="container opinio">
                <h1 className="">
                "WTF is this?"
                </h1>
                <h2 className="">
                - a former friend
                </h2>  
            </div>
            <div className="container opinio">
                <h1 className="">
                "The bastard son of GTA and Reigns"
                </h1>
                <h2 className=" ">
                - a wise man
                </h2>   
            </div>
            <div className="container opinio">
                <h1 className="">
                "It's very nice"
                </h1>
                <h2 className="">
                - my mom
                </h2>    
            </div>           
             <a href='https://play.google.com/store/apps/details?id=com.QueClase.Corners&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img width="200" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
             
          </div>      
        </div>      
  
        <HeroFooter/>
      </section>
    </div>
  )
}

