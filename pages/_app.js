import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

import '../style/main.scss';

function DelaMerca({ Component, pageProps, router }) {
    return <div >
                <Head>
                    <title>De la merca</title>  
                    <meta name="description" content="Sàvies és una plataforma divulgativa d'educació en el lleure."/>    
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>                                 
                    <meta name="mobile-wep-app-capable" content="yes"/>
                    <meta name="apple-mobile-wep-app-capable" content="yes"/>
                  
                    <meta name="robots" content="index,follow"/>
                    <meta name="AdsBot-Google" content="noindex" />
                    
                    {/* Tags Facebook*/}
                    <meta property="og:url" content="https://delamerca.com/" key="url-facebook" />
                    <meta property="og:type" content="web" key="type-facebook" />
                    <meta property="og:title" content="delamerca.com" key="title-facebook"/>
                    <meta property="og:description" content="Sàvies és una plataforma divulgativa d'educació en el lleure." key="description-facebook" />
                    <meta property="og:image" content="https://savies.cat/img/saviesPoster.jpg"  key="image-facebook"/>
                    
                    {/* Tags Twitter*/}
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="De la merca"/>
                    <meta name="twitter:description" content="Sàvies és una plataforma divulgativa d'educació en el lleure."/>
                    <meta name="twitter:site" content="@delamerca" />     
                    <meta name="twitter:image" content="https://savies.cat/img/saviesPoster.jpg" />  
                    <meta name="twitter:image:alt" content="El logotip de Sàvies és una gran essa majúscula situada al damunt de tres barres que s'uneixen formant un triangle cap per avall. Cada barra és d'un color diferent: Blau, vermell i verd." />  
                </Head>         
                <Component {...pageProps} key={router.route} />
            </div>
}

export default DelaMerca;

/*
  <link rel="manifest" href="/manifest.json" />     
                    <link rel="manifest" href="manifest.webmanifest"/>
                    */