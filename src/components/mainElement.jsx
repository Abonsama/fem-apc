import Nav from "./nav"
import image from '../assets/drawers.jpg'
import avatar from '../assets/avatar-michelle.jpg'
import i from '../assets/icon-share.svg'
import j from '../assets/white.svg'
import { useState } from "react";
export default function Main(){
    const [active, setactive]=useState(false);
    const style = {
        backgroundColor: "hsl(212, 23%, 69%)"
        };
        const buttonStyle = active ? style : {};
    let HandleClick =()=>setactive(prevActive=>!prevActive)
    return(
        <main>
            <div className="container">
            <figure>
                <img src={image} alt="drawers" />
            </figure>
            <section className="data">
            <p className="bold">Shift the overall look and feel by adding these wonderful touches to furniture in your home</p>
            <p className="norm">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
            <div className="avatar">
                <div className="post">
                    <img src={avatar} alt="michelle" />
                    <div className="det">
                        <span className="name">Michelle Appleton</span>
                        <span className="date">28 Jun 2020</span>
                    </div>
                </div>
                <div className="btn">
                    <button style={buttonStyle} className="share" onClick={HandleClick}>{active?<Nav />:""}<img src={active?j:i} alt="links" /></button>
                </div>
            </div>
            </section>
            </div>
        </main>
    )
}