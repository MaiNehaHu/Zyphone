import { type JSX } from 'react'
import NavBar from './NavBar'

const CommonLayout = ({ children }: { children: JSX.Element }) => {
    return (
        <div className='min-h-screen relative'>
            <NavBar />

            {children}
        </div>
    )
}

export default CommonLayout