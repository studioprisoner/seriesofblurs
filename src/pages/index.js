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
    
      <main className="min-h-screen flex-row items-stretch bg-maroon-oak-500">
          {/* Hero card */}
                <div className="absolute top-0 sm:right-0 ">
                  <img
                    className="object-cover"
                    src="images/blurs-main.png"
                    alt="Series of Blurs"
                  />
                </div>
                <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-24 lg:py-8 lg:px-8">
                  <h1 className="text-6xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl">
                    <img
                      src="images/blurs_logo.png"
                      alt="Series of Blurs"
                      className="hidden sm:block lg:w-3/4"
                      />
                      <img
                        src="images/blurs_logo_2line.png"
                        alt="Series of Blurs"
                        className="block sm:hidden"
                        />
                  </h1>
                  <h3 className="mt-10 text-2xl tracking-tight text-white sm:text-3xl lg:text-3xl font-sporting">Video Games &amp; Horror Movies</h3>
                  <p className="mt-6 max-w-lg text-xl text-white sm:max-w-3xl font-spacemono">
                  Follow Series of Blurs for all your horror movie suggestions. This is the place to be for everyone who loves video games,  ghosts, aliens, monsters, flesh-eating-zombies and much more.
                  </p>
                  <div className="mt-10">
                      <a
                        href="#"
                        className="flex max-w-lg px-4 py-3 border border-transparent text-center text-base rounded-2xl text-white font-sporting bg-scarlet-500 hover:bg-maroon-oak-700 hover:text-scarlet-500 sm:px-8"
                      >
                        Work With Me
                      </a>
                  </div>
            
          </div>
          <div className="max-w-full m-auto relative bg-gradient-to-t from-blue-charcoal-700 z-10">
                <div className="max-w-7xl mx-auto px-2 py-4 sm:px-3 sm:py-12 lg:py-16 lg:px-4">
                <h2 className="text-3xl tracking-tight sm:text-4xl lg:text-5xl text-white font-sporting">Reach</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-6">
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
            </div>
            </div>
          <Footer />       
        {/* More main page content here... */}
      </main> 

    </div>
  )
}
