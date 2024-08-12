import Link from 'next/link'
import { mainpage, navbarItem } from '~/constants/index'

const Navbar = () => {
    return (
        <nav className='px-10 flex justify-between items-center shadow-md py-8'>
            <div className='flex justify-start gap-4 items-center'>
                <Link href="/recipes">
                    <h3 className='text-black text-2xl tracking-wide font-normal hover:underline'>{mainpage?.banner}</h3>

                </Link>
            </div>
            <div className='flex justify-start gap-4 items-center'>
                <ul className='flex justify-start gap-4 items-end'>
                    {navbarItem?.map((nav, i) => {
                        return (
                            <li key={i} className='text-black text-sm tracking-wide hover:underline cursor-pointer'>{nav?.title}</li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar