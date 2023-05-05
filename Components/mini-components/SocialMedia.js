import { AiFillInstagram } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import { FaDev } from "react-icons/fa"
import { MdMarkEmailRead } from "react-icons/md"
function SocialMedia() {
    const socialLinks = [
        {
            link: "https://www.instagram.com/supremacism__shubh/",
            icon: <AiFillInstagram className="w-6 h-6 md:w-12 md:h-12 text-pink-600" />
        },
        {
            link: "https://www.linkedin.com/in/shubham-tiwari-b7544b193/",
            icon: <BsLinkedin className="w-5 h-5 md:w-9 md:h-9 text-blue-600" />
        },
        {
            link: "https://dev.to/shubhamtiwari909",
            icon: <FaDev className="w-5 h-5 md:w-10 md:h-10 text-slate-900" />
        },
        {
            link: "mailto:shubhmtiwri00@gmail.com",
            icon: <MdMarkEmailRead className="w-6 h-6 md:w-12 md:h-12 text-red-500" />
        },

    ]
    return (
        <ul className="flex flex-wrap justify-between md:justify-normal md:gap-4 items-center mb-5">
            {
                socialLinks?.map(({ link, icon }) => {
                    return (
                        <li>
                            <a href={link} target="_blank">
                                {icon}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SocialMedia