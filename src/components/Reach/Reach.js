import { FaTwitter, FaTwitch, FaInstagram } from 'react-icons/fa'

export default function Reach() {

    return (
        <div>
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
            
        </div>
    )
}   