import { features } from "@/data";
import collaboration from "../public/assets/collaboration.svg";
import iphone from "../public/assets/apple-iphone.png";
import iphoneBg from "../public/assets/iphone_bg.png";
import messenger from "../public/assets/facebook_messenger_logo.svg";
import whatsapp from "../public/assets/whatsapp.svg";
import Image from "next/image";

const SubHero = () => {
    return (
        <section className="-container even-columns my-11">
            <div className="relative grid items-center justify-items-center">
                <Image src={iphone} placeholder="blur" className="col-start-1 row-start-1"/>
                <Image src={iphoneBg} placeholder="blur" className="col-start-1 row-start-1 -z-10"/>
                <div className="absolute w-[108px] h-[108px] bg-yellow-400 rounded-chatBox rounded-bl-none right-16 top-48 -z-20"></div>
                <div className="absolute w-[108px] h-[108px] bg-green-400 rounded-chatBox rounded-bl-none left-16 bottom-48 -z-20"></div>
                <div className="absolute w-[147px] h-[147px] bg-white rounded-full flex items-center justify-center top-24 left-16 ">
                    <Image src={messenger}/>
                </div>
                <div className="absolute w-[147px] h-[147px] bg-white rounded-full flex items-center justify-center bottom-24 right-16">
                    <Image src={whatsapp}/>
                </div>
            </div>
            <div>
                <h1 className="font-header text-7xl max-w-[14ch] leading-[6rem]">
                    The <span className="text-green-400">All-in-One</span> Solution for
                    Conversational AI
                </h1>
                <div className="bg-white flex items-center justify-between rounded-xl p-6 w-10/12 mt-7">
                <article>
                    <h6 className="text-black">Seamless Collaboration</h6>
                    <p className="text-black text-sm max-w-[36ch] mt-3">
                        You can easily collaborate with friends and
                        colleagues on projects, whether it's for work
                        or personal use.
                    </p>
                </article>
                <div className="bg-green-400 p-3 rounded-xl">
                    <Image src={collaboration} alt="collaboration"/>
                </div>
                </div>
                <div className="mt-7 flex flex-col gap-4 w-10/12">
                    {features.map((feature, i) => {
                        return (
                            <article key={i} className="bg-gray-600 p-6 rounded-xl">
                                {feature}
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SubHero;