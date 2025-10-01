import { type JSX } from 'react'
import { Link } from 'react-router-dom'

const GradientBg = ({ children, link, }: { children: JSX.Element, link?: string }) => {
    return (
        <Link to={link ? link : ""}>
            <div
                className='p-[0.9px] bg-[linear-gradient(175deg,#8d8d8d,#00000000,#8d8d8d)] rounded-full'
            >
                <div className='flex flex-row gap-1 items-center px-4 py-2 rounded-full bg-black'>
                    {children}
                </div>
            </div>
        </Link>
    )
}

export default GradientBg;