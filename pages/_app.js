// import { Provider, } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import withReduxSaga from 'next-redux-saga'
import { wrapper } from '../redux/store'
import { Component, useEffect, } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gaTag'

/**
 *  Main app component
 * @returns {Component} Returns app component.
 */
function MyApp({ Component, pageProps, },) {
  const router = useRouter()
  useEffect(() => {

    let deferredPrompt

    window.addEventListener('beforeinstallprompt', (e) => {
      // Stash the event so it can be triggered later.
      deferredPrompt = e
      // Update UI notify the user they can add to home screen
      // showInstallPromotion();
    })

    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Samudra App</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </>)
}

export default wrapper.withRedux(withReduxSaga(MyApp,),)
