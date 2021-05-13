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
                Opiniones
            </p>
            <div className="container opinio">
                <h1 className="">
                "Si algún subnormal te dice que le gusta, es que es más subnormal que tu"
                </h1>
                <h2 className=" ">
                - mi mujer
                </h2>   
            </div>
            <div className="container opinio">
                <h1 className="">
                "¿Qué coño es esto?"
                </h1>
                <h2 className="">
                - un ex-amigo
                </h2>  
            </div>
            <div className="container opinio">
                <h1 className="">
                "Ha quedado muy bonito"
                </h1>
                <h2 className="">
                - mi mamá
                </h2>    
            </div>
            <MailChimpForm label="Suscríbete al diario de desarrollo y participa en la beta"/>  
          </div>      
        </div>      
  
        <HeroFooter/>
      </section>
    </div>
  )
}

