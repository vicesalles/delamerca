import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

import '../style/main.scss';

function DelaMerca({ Component, pageProps, router }) {
    return <div >
                <Head>
                    <title>De la merca</title>  
                    <meta name="description" content="Free android card game about drugs and street survival."/>    
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>                                 
                    <meta name="mobile-wep-app-capable" content="yes"/>
                    <meta name="apple-mobile-wep-app-capable" content="yes"/>
                  
                    <meta name="robots" content="index,follow"/>  

                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" href="/favicon.ico?v=2" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="theme-color" content="#3d3d3d"/>
                    
                    {/* Tags Facebook*/}
                    <meta property="og:url" content="https://delamerca.com/" key="url-facebook" />
                    <meta property="og:type" content="web" key="type-facebook" />
                    <meta property="og:title" content="delamerca.com" key="title-facebook"/>
                    <meta property="og:description" content="Indie game about street decision making." key="description-facebook" />
                    <meta property="og:image" content="https://delamerca.com/socialmedia/delamerca.png"  key="image-facebook"/>
                    
                    {/* Tags Twitter*/}
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="De la merca"/>
                    <meta name="twitter:description" content="Indie game about street decision making."/>
                    <meta name="twitter:site" content="@delamerca" />     
                    <meta name="twitter:image" content="https://delamerca.com/socialmedia/delamerca.png" />  
                    <meta name="twitter:image:alt" content="De la merca logo." />  
                </Head>         
                <Component {...pageProps} key={router.route} />
            </div>
}

export default DelaMerca;

/*
  <link rel="manifest" href="/manifest.json" />     
                    <link rel="manifest" href="manifest.webmanifest"/>
                    */