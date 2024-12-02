import Link from "next/link";

export default function Button({ text, icon, isFill, href, isNewTab, ...res }) {
    return (
        <Link href={href ? href : ''}
            target={isNewTab && '_blank'}
            className={` ${isFill ? "bg-primary border border-primary text-white hover:bg-transparent hover:text-light" : "border border-primary hover:text-gray-0 text-light hover:bg-primary"}     text-center inline-block  transition-all ease-linear duration-100 md:py-[5px] py-1 md:px-[18px] px-3 text-[14px] md:text-base  rounded-full`}
            {...res}
        >
            <span className="relative font-medium flex items-center justify-center gap-1.5">
                {icon}
                {text}
            </span>
        </Link>
    );
}