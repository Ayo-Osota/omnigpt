import Image from "next/image";
import star from "../public/assets/star.svg"

const TesimonyCard = ({ name, body }) => {
    return (
        <div className="p-9 w-fit bg-gray-600 rounded-xl">
            <div className="flex my-2 gap-1">
                {[1, 2, 3, 4, 5].map((rating, i) => {
                    return (
                        <Image key={i} src={star} alt="star" />
                    )
                })}
            </div>
            <h6>
                OmniGPT has completely <br />
                transformed the way my team works together.
            </h6>
            <p className="text-sm w-[64ch] mt-3">
                {body}
            </p>
            <footer className="mt-8">
                <p className="text-sm">{name}</p>
            </footer>
        </div>
    )
}

export default TesimonyCard;