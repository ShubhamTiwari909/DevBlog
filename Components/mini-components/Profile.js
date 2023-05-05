import Image from "next/image"
import ProfileImage from "../../public/images/ProfileImage.jpeg"
import SocialMedia from "./SocialMedia"
function Profile() {
    return (
        <article className='p-5 mx-auto max-w-3xl border-2 border-blue-700 rounded-lg relative bg-slate-200 grid grid-cols-1 md:grid-cols-2 justify-between'>
            <div>
                <h1 className='text-lg text-slate-800 font-semibold mb-4'>Shubham Tiwari</h1>
                <p className='text-sm md:text-base text-slate-800 mb-6'>
                    Hey Everyone, I am shubham, a Jr. Web developer at Full Creative Pvt. Ltd.,i am mostly proficient in Frontend Development.
                    I also write blogs at <a href="https://dev.to/" className="font-semibold underline">Dev</a>
                </p>
                <p className='text-sm md:text-base font-semibold text-slate-800 mb-2'>Social Links</p>
                <SocialMedia />
            </div>
            <div className="flex justify-center md:justify-end">
                <Image
                    src={ProfileImage}
                    width="0"
                    height="0"
                    sizes="50vw"
                    className="w-full md:w-3/4 h-auto block outline outline-2 outline-blue-500 outline-offset-2 rounded-lg"
                    alt='blog cover' />
            </div>
        </article>
    )
}

export default Profile