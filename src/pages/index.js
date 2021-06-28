import Head from 'next/head'
import { FaTwitter, FaTwitch, FaInstagram } from 'react-icons/fa'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Series of Blurs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="">
        <div className="relative h-screen bg-gradient-to-t from-blue-charcoal-700">
            <div className="absolute right-auto sm:right-0 w-full sm:w-1/2">
                <img
                    className="w-full h-screen object-cover"
                    src="images/blurs-main.png"
                    alt="Series of Blurs"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-blue-charcoal-700" aria-hidden="true"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:py-16 sm:px-6 lg:px-8">
                <h1 className="grid justify-items-center sm:justify-items-start">
                    <img
                        className="hidden sm:block w-2/3"
                        src="images/blurs_logo.png"
                        alt="Series of Blurs"
                    />
                    <img
                        className="block sm:hidden w-full"
                        src="images/blurs_logo_2line.png"
                        alt="Series of Blurs"
                    />
                </h1>
                <p className="mt-6 max-w-3xl text-3xl text-white font-sporting">Video Games &amp; Horror Movies</p>
                <p className="mt-6 max-w-3xl text-xl text-white font-spacemono">Follow Series of Blurs for all your horror movie suggestions. This is the place to be for everyone who loves video games,  ghosts, aliens, monsters, flesh-eating-zombies and much more.</p>
                <div class="py-6">
                  <a
                    href="#" 
                    className="w-full sm:w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-2xl text-white bg-scarlet-500 hover:bg-scarlet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-scarlet-500 font-sporting">
                    Work With Me
                </a>
                </div>
            </div>
            <section className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8" aria-labelledby="reach-heading">
            <h2 className="text-3xl tracking-tight sm:text-4xl lg:text-5xl text-white font-sporting">Reach</h2>
            <div className="pt-10 grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            <div className="relative rounded-lg border border-scarlet-500 px-6 py-5 flex items-center space-x-3 hover:bg-scarlet-500 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-scarlet-500">
                    <div className="flex-shrink-0">
                        <FaTwitch className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <a href="https://www.twitch.tv/seriesofblurs/" className="focus:outline-none" title="Follow Series of Blurs on Twitch">
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        <h2 className="text-white font-sporting text-3xl">Twitch</h2>
                        <p className="text-white font-sporting">33.3K <span className="font-spacemono">Followers</span></p>
                        </a>
                    </div>
                </div>
                <div className="relative rounded-lg border border-scarlet-500 px-6 py-5 flex items-center space-x-3 hover:bg-scarlet-500 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-scarlet-500">
                    <div className="flex-shrink-0">
                        <FaInstagram className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <a href="https://www.instagram.com/seriesofblurs/" className="focus:outline-none" title="Follow Series of Blurs on Instagram">
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        <h2 className="text-white font-sporting text-3xl">Instgram</h2>
                        <p className="text-white font-sporting">11.3K <span className="font-spacemono">Followers</span></p>
                        </a>
                    </div>
                </div>
                <div className="relative rounded-lg border border-scarlet-500 px-6 py-5 flex items-center space-x-3 hover:bg-scarlet-500 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-scarlet-500">
                    <div className="flex-shrink-0">
                        <FaTwitter className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <a href="https://twitter.com/seriesofblursx" className="focus:outline-none" title="Follow Sereis of Blurs on Twitter">
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        <h2 className="text-white font-sporting text-3xl">Twitter</h2>
                        <p className="text-white font-sporting">4.1K <span className="font-spacemono">Followers</span></p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <Footer /> 
        </div>
           
    </div>
   
    
    </div>
  )
}
