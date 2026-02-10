import './App.css';
import React from 'react';
import Grainient from './component/Grainient';
import Close from './assets/Close.png';
import { Button } from '@mantine/core';
import { motion } from "framer-motion"



export default function MainPage() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <Grainient
                color1="#bbac5d"
                color2="#c75cc3"
                color3="#b493b1"
                timeSpeed={0.9}
                colorBalance={-0}
                warpStrength={1}
                warpFrequency={5}
                warpSpeed={2}
                warpAmplitude={50}
                blendAngle={0}
                blendSoftness={0.05}
                rotationAmount={500}
                noiseScale={2}
                grainAmount={0.1}
                grainScale={2}
                grainAnimated={false}
                contrast={1.5}
                gamma={1}
                saturation={1}
                centerX={0}
                centerY={0}
                zoom={0.9}
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: 0
                }}
            />
            <div style={{
                position: 'absolute',
                inset: 0,               // Fills the whole container
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,              // Ensures it sits on top
                pointerEvents: 'none'    // This allows mouse interactions to hit the background
            }}>
                <motion.img
                    className='close-envelope'
                    src={Close}
                    alt='closed-envelope'
                    whileHover={{
                        x: [0, -2, 2, -2, 2, 0], // Moves left and right
                        rotate: [0, -1, 1, -1, 1, 0], // Tilts slightly
                        transition: {
                            duration: 0.3,
                            repeat: Infinity, // Keeps shaking while hovered
                        },
                    }}

                />
            </div>
        </div>
    )
}

<>
    {envImg.map(({ id, image, text }) => {
        return (
            <React.Fragment key={id}>
                <motion.img
                    className='close-envelope'
                    src={envImg[isOpened].image}
                    alt='closed-envelope'
                    initial={{ y: 500 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", duration: 5 }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,               // Fills the whole container
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1,              // Ensures it sits on top
                        pointerEvents: 'none',
                        marginTop: '320px',
                        marginLeft: '40px'
                    }}
                >
                    <motion.button
                        className='button-style'
                        onClick={handleClick}
                    >
                        <SplitText
                            text={envImg[isOpened].text}
                            className='button-text'
                            delay={80}
                            duration={2}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                        />
                    </motion.button>
                </div>
            </React.Fragment>
        )
    })}

    --

    {envImg[isOpened].id === 2
        ? <Message data={envImg[isOpened].text} />
        : <Message1 data={envImg[isOpened].text} />}
</>