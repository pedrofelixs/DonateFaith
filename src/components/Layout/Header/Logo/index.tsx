import Image from "next/image";
import Link from "next/link";
const Logo = () => {
    return(
        <Link href='/' className='flex items-center text-black dark:text-white text-2xl font-semibold gap-4'>
            <Image src={'./images/Logo/Logo.svg'}
                   alt='logo'
                   width={50}
                   height={20}
                   quality={100}
                   className={'py-1'}
            />
            DonateFaith
        </Link>
    )
}
export default Logo