import Head from 'next/head'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

export default function Work() {
    return (
        <div>
            <Head>
                <title>Series of Blurs - Work with me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="2xl:h-screen bg-maroon-oak-500 bg-transparent bg-gradient-to-t from-blue-charcoal-700">
                <Nav />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex max-w-7xl mx-auto justify-center">
                        <img
                            className="w-3/4 h-3/4 sm:w-1/4 sm:h-1/4"
                            src="/images/blurs_logo_2line.png"
                            alt="Series of Blurs"
                        />
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-white font-spacemono">I'm a content creator and social media influencer. I work with brands and companies to help them reach their target audience through social media and content creation. If you have any questions about what I can offer you, or about working together on a project, don't hesitate to contact me!</p>
                    </div>
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="/images/logocloud/audiotechnica.png" alt="Audio Technica" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="/images/logocloud/ubisoft.png" alt="Ubisoft" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="/images/logocloud/logitech.png" alt="Logitech" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="/images/logocloud/elgato.png" alt="Elgato" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="/images/logocloud/universal.png" alt="Universal Australia" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="/images/logocloud/xbox.png" alt="Xbox Australia" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="/images/logocloud/alienware.png" alt="Alienware" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="/images/logocloud/playstation.png" alt="Playstation Australia" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}