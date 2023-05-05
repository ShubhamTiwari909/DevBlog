import {FcPrevious,FcNext} from "react-icons/fc"

function Pagination({  startIndex, setStartIndex,finalPage }) {

    const handleRight = () => {
        if(finalPage === 30) {
            setStartIndex(startIndex+1)
        }
    }
    const handleLeft = () => {
        startIndex <= 0 ? setStartIndex(0) : setStartIndex(startIndex-1);
    }
    return (
        <div className='px-6 py-3 w-56 rounded-xl flex gap-4 bg-slate-900 outline outline-2 outline-blue-500 justify-between fixed bottom-2 md:bottom-6 left-1/2 -translate-x-1/2'>
            <button onClick={handleLeft} className="outline outline-1 outline-blue-500 p-2 rounded-full"><FcPrevious /></button>
            <button onClick={handleRight} className="outline outline-1 outline-blue-500 p-2 rounded-full"><FcNext /></button>
        </div>
    )
}

export default Pagination