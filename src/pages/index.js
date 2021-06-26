import Head from 'next/head'
import Reach from 'components/Reach'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Series of Blurs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className="bg-maroon-oak-500">
        <div className="">
          {/* Hero card */}
          <div className="mx-auto">
              <div className="relative min-h-0">
                <div className="absolute top-0 sm:right-0 ">
                  <img
                    className="object-cover"
                    src="images/blurs-main.png"
                    alt="Series of Blurs"
                  />
                </div>
                <div className="max-w-7xl mx-auto relative px-4 py-8 sm:px-6 sm:py-24 lg:py-8 lg:px-8">
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
                  <h3 className="mt-3 text-2xl tracking-tight text-white sm:text-3xl lg:text-3xl font-sporting">Video Games &amp; Horror Movies</h3>
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
                <Reach />
              </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main> 

    </div>
  )
}
