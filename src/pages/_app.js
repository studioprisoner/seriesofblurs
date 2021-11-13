import 'styles/global.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-maroon-oak-700 bg-gradient-to-t from-blue-charcoal-700 min-h-full" style={{"min-height":"-webkit-fill-available","max-height":"-webkit-fill-available"}}>
      <Head>
      <title>Series of Blurs - Video Games &amp; Horror Movies</title>
        
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Series of Blurs" key="ogtitle" />
        <meta property="og:site_name" content="Series of Blurs" key="ogsitename" />
        <meta property="og:url" content="https://www.seriesofblurs.com" key="ogurl" />
        <meta property="og:image" content="https://seriesofblurs.vercel.app/images/twitter-card.png" key="ogimage" />
        <meta property="og:description" content="VIdeo Games and Horror Movies." type="ogdesc" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="seriesofblurs" key="twhandle" />

      </Head>

        <Component {...pageProps} />
      
    </div>
  ) 
}

export default MyApp;