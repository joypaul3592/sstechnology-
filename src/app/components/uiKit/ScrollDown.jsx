import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function ScrollDown() {
    const handleScrollDown = () => {
        window.scrollBy({
            top: 500,
            behavior: 'smooth',
            tasition: '5s ease '
        });
    };
    return (
        <button data-aos="fade-down" onClick={() => handleScrollDown()} class="mx-auto block rounded-full border-2 border-primary h-[4.8rem] w-10 relative mt-12 text-light cursor-pointer hover:bg-primary hover:text-white">
            <span class="move absolute rounded-full left-1/2 text-3xl"><MdOutlineKeyboardArrowDown /></span>
        </button>
    )
}
