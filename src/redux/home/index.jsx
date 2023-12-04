import React from 'react'
import mcLogo from "../../image/mcdonalds-logo.jpg"

function Home() {
    return (
        <div className="container">
            <header className='header-mc'>
                <nav className='nav-mc'>
        
                    <div className='globel-div-mc'>
                   
                   
                     
                            <div className='top-headers'>
                            <img className='image-mc' src={mcLogo} alt="" />
                                <div className='language'><h4>Dil</h4></div>
                                <div className='email-div'><h4>E-məktublara abunəlik</h4></div>
                                <div className='karier-div'><h4>Kariyera</h4></div>
                               <div><button className='header-btn'>İndi sifariş edin</button></div>
                            
                                
                            </div>
               
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Home