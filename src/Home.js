import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import {Grid, Image, style, Header, Segment} from 'semantic-ui-react'

export default function Home() {
    return (
        <>
        <div className='hero'>
            <div className="hero-content">
                <h1>Welcome to HAHU</h1>
                <p>This is an example sentence</p>
                {/* <a href="" className="menu-button">Click Here</a> */}
            </div>
            
        </div>


        <div className="container">
        <div className='pah'>
                <div className='Phone'>
                    <h1>Phone</h1>
                    <h3> (206) 329-1894</h3>
                </div>
                <div className='Address'>
                    <h1>Address</h1>
                    <h3>1221 S Main St UNIT 202,<br></br> Seattle, WA 98144</h3>
                </div>
                <div className='Hours'>
                    <h1>Hours</h1>
                    <h3>Monday: 3am-4pm</h3>
                    <h3>Tuesday:5am-6pm</h3>
                    <h3>Wendsday: 3am-8pm</h3>
                    <h3>Thurday: 2am-23pm</h3>
                    <h3>Friday: 3am-2pm</h3>
                    <h3>Saturday: 4am-4pm</h3>
                    <h3>Sunday: 9am-10pm</h3>
                    
                </div>
            </div>
            <div className="container-content2">
                <img className="container-image1"></img>
                <h2>Meat Combo </h2>
                <p>This is a sentence</p>
                {/* <a href="" className="menu-button">Click Here</a> */}
            </div>

            <div className="container-content2">
                <img className="container-image2"></img>
                <h2>Veggie Combo </h2>
                <p>This is a sentence</p>
                {/* <a href="" className="menu-button">Click Here</a> */}
            </div>

            <div className="container-content2">
                <img className="container-image3"></img>
                <h2>Food One </h2>
                <p>This is a sentence</p>
                {/* <a href="" className="menu-button">Click Here</a> */}
            </div>
            
        </div>
        

        <div className='bottom'>
            <div className="bottom-content">
                <h1>Welcome to HAHU</h1>
                <p>This is an example sentence</p>
                {/* <a href="" className="menu-button">Click Here</a> */}
            </div>
            
        </div>
        </>
    )
}
