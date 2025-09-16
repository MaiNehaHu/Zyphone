import { type JSX } from 'react'
import NavBar from './NavBar'

const CommonLayout = ({ children }: { children: JSX.Element }) => {
    return (
        <div className='bg-black min-h-screen'>
            <NavBar />

            {children}
        </div>
    )
}

export default CommonLayout