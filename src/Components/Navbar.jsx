import React from 'react'
import globe from '../../images/globe.png'

export default function(){
    return(
        <header className='pink-background'>
        <img className='logo' src={globe} alt="picture-of-the-globe" />
        <h4 className='title'>my travel journal</h4>
        </header>
    )
}