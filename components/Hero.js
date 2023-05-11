import Image from "next/image";
import Link from "next/link";
import image1 from "../public/assets/fauxels.png";
import image2 from "../public/assets/kindel.png";
import image3 from "../public/assets/andrea.png";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
    return (
        <div className="-container even-columns my-28">
            <div>
                <h1 className="font-header text-7xl max-w-[14ch] leading-[6rem]">Bring the power of AI to your <span className="effect-text">conversations</span> </h1>
                <h5 className="text-3xl mt-3.5">Work Faster, Smarter, and Better Together</h5>
                <p className="text-xl mt-5 max-w-[50ch]">
                    Experience the power of AI language models with OmniGPT.
                </p>
                <p className="text-xl max-w-[48ch]">
                    Our chat platform provides seamless communication
                    across multiple channels.
                </p>
                <p className="text-xl mt-8">Try the OmniGPT for free. 15-day trial, no credit card required.</p>
                <Link href="/signin" className="mt-5 button">Start your free trial</Link>
            </div>
            <div className="flex flex-col justify-between row-start-1">
                <div className="h-[107px] grid grid-cols-[minmax(333px,_3fr)_minmax(107px,_1fr)] gap-8">
                    <div className="relative w-full h-full bg-yellow-400 rounded-chatBox rounded-tr-none">
                        <Image src={image1} placeholder="blur" className="absolute bottom-0" />
                    </div>
                    <div className="w-full h-full bg-purple-600 rounded-full flex items-center justify-center -rotate-90">
                        <FiArrowUpRight className="text-8xl"/>
                    </div>
                </div>
                <div className="relative h-[107px] hidden grid-cols-[minmax(107px,_1fr)_minmax(333px,_3fr)] gap-8 lg:grid">
                    <div className="w-full h-full bg-green-400 rounded-full flex items-center justify-center">
                        <FiArrowUpRight className="text-8xl"/>
                    </div>
                    <div className="w-full h-full bg-gray-200 rounded-chatBox">
                        <Image src={image2} placeholder="blur" className="absolute bottom-0" />
                    </div>
                </div>
                <div className="h-[107px] hidden grid-cols-1 gap-8 lg:grid">
                    <div className="w-full h-full bg-purple-600 rounded-chatBox rounded-bl-none px-6 flex justify-end items-center">
                        <p className="text-lg max-w-[24ch] font-medium">
                            @OmniGPT Can you give us 
                            an update on the latest project
                            status?
                        </p>
                    </div>
                </div>
                <div className="relative h-[107px] hidden grid-cols-[minmax(333px,_3fr)_minmax(107px,_1fr)] gap-8 lg:grid">
                    <div className="w-full h-full bg-green-400 rounded-chatBox rounded-tr-none">
                        <Image src={image3} placeholder="blur" className="absolute bottom-0" />
                    </div>
                    <div className="w-full h-full bg-yellow-400 rounded-chatBox rounded-bl-none"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero;