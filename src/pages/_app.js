import 'styles/global.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-maroon-oak-700 bg-gradient-to-t from-blue-charcoal-700 min-h-full" style={{"min-height":"-webkit-fill-available","max-height":"-webkit-fill-available"}}>
      <Head>
      <title>Series of Blurs - Video Games &amp; Horror Movies</title>
        
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

export default MyApp;