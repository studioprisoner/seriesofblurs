import 'styles/global.css'
import Head from 'next/head'
import Footer from 'components/Footer'

import siteConfig from '../../site.config'

import Nav from 'components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Head>
      <title>Series of Blurs - Video Games &amp; Horror Movies</title>
        {/* <script async="" defer="" data-website-id="963aa68d-acc9-432b-9dda-16324088a789" src="https://umami-kalani.vercel.app/umami.js"></script> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Series of Blurs" key="title" />
        <meta property="og:url" content="https://www.seriesofblurs.com" key="url" />
        <meta property="og:type" content="Personal Site" key="type"/>
        <meta property="og:image" content="#" key="image" />
        <meta property="og:description" content="VIdeo Games and Horror Movies." type="description" />
      </Head>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  ) 
}

export default MyApp
