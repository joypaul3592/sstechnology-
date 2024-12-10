import Link from "next/link";
import Image from "next/image";
import logo from '../../../../assets/image/logo/sslogo2.png'

export default function Logo() {
    return (
        <Link href={`/`}>
            <Image
                src={logo}
                alt="logo image"
                className="w-40"
            />
        </Link>
    )
}
