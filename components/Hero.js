import Link from "next/link";

const Hero = () => {
    return (
        <div className="-container even-columns">
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
            <div>fine</div>
        </div>
    )
}

export default Hero;