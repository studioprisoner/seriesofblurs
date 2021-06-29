import 'styles/global.css'
import Head from 'next/head'

import siteConfig from '../../site.config'


function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen bg-maroon-oak-500">
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

        <Component {...pageProps} />
      
    </div>
  ) 
}

export default MyApp
