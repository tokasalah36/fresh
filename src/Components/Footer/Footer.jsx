import { useState } from 'react'
import Style from './Footer.module.css'
import { useEffect } from 'react'

function Footer() {
    
    const [counter, setCounter] = useState(0)
    useEffect(()=> {
        console.log('Mounting Footer');
    } , [])
    return (
        <div className='mt-10'>
            <h2>Footer</h2>
            <p></p>
        </div>
    )
}

export default Footer
