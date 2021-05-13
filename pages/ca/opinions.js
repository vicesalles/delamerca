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
            <MailChimpForm label="Subscriute al diari de desenvolupament i participa a la beta"/> 
          </div>      
        </div>      
  
        <HeroFooter/>
      </section>
    </div>
  )
}

