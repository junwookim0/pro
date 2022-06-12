// Intro view
import { useEffect } from 'react';
import './IntroView.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const IntroView = () => {
    useEffect(()=> {
        gsap.to(".hero", {
            scrollTrigger: {
            trigger: ".hero",
            scrub: true,
            pin: true,
            start: "center center",
            end: "bottom -100%",
            toggleClass: "active",
            ease: "power2"
            }
        });
        
        gsap.to(".hero__image", {
            scrollTrigger: {
            trigger: ".hero",
            scrub: 0.5,
            start: "top bottom",
            end: "bottom -300%",
            ease: "power2"
            },
            y: "-30%"
        });
    })
    return (
        <div>
            <header className="container">
                <h2 className="container__headline"> 
                <p className='animate__animated animate__fadeInDownBig'>Upgrade + Recycling</p>
                </h2>
            </header>
            <section className="container hero">
                <div className="hero__inner">
                    <div className="hero__images"><img class="hero__image" src="../../images/background1.jpg" alt='img1'/></div>
                    <div className="hero__content">
                        <div className="hero__headline"><span className='u'>UPCYCLING!</span></div>
                    </div>
                </div>
            </section>
            <footer className="container">
                <h2 className="container__headline">Upcycling do it yourself.</h2>
            </footer>
        </div>
    );
};
export default IntroView;
