import SplitText from "./component/splitText";
import React, { useState, useEffect } from 'react';
import { Button, Flex } from '@mantine/core';
import { motion, scale } from "framer-motion";
import PixelTransition from './component/pixelTranslation';
import BlurText from "./component/BlurText";



export default function Message1({ data }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);
    const [isAnswerVisible, setIsAnswerVisible] = useState(true);
    const [show, setShow] = useState(false);

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    const dodge = () => {
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;
        setPosition({ x: randomX, y: randomY });
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnswerVisible(false);
        }, 5000);
        const timer2 = setTimeout(() => {
            setShow(true);
        }, 5500);
        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        };
    }, []);


    return (
        <>
            <div
                className="main-q"
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,              // Ensures it sits on top
                    pointerEvents: 'none',

                }}
            >
                <section>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: isVisible ? 1 : 0,
                            y: isVisible ? 0 : 20
                        }}
                        transition={{ delay: 0.5, duration: 1.5 }}
                        style={{
                            fontSize: '50px',
                            backgroundColor: 'white'
                        }}
                    >
                        Will you be my valentine?
                    </motion.h1>
                </section>
                <section
                    style={{
                        pointerEvents: 'auto',
                        display: 'flex',
                        gap: '50px'
                    }}
                    className='y-n'
                >
                    <motion.button
                        className='button-style'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: isVisible ? 1 : 0,
                            y: isVisible ? 0 : 20
                        }}
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: 'transparent',
                            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: 1, duration: 1.5 }}
                        style={{
                            padding: "12px 24px",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontSize: "20px"
                        }}
                        onClick={() => setIsVisible(false)}
                    >
                        Yes
                    </motion.button>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: isVisible ? 1 : 0,
                            x: position.x,
                            y: position.y
                        }}
                        transition={{
                            delay: 1,
                            duration: 1.5,
                            x: { type: "spring", stiffness: 300, damping: 20 },
                            y: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                        onMouseEnter={dodge}
                        style={{
                            padding: "12px 24px",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            backgroundColor: "transparent",
                            fontSize: "20px",
                        }}
                    >
                        No
                    </motion.button>
                </section>
                {!isVisible &&
                    <section
                        style={{
                            justifyContent: 'center',
                            alignContent: 'center',
                            pointerEvents: 'none'
                        }}>
                        {isAnswerVisible && (
                            <motion.h1
                                animate={{ opacity: isAnswerVisible ? 1 : 0 }}
                                transition={{ delay: 1, duration: 3 }}
                                style={{
                                    pointerEvents: 'none',
                                    fontSize: '80px',
                                    backgroundColor: "white"
                                }}>
                                <BlurText
                                    text="No take back!"
                                    delay={200}
                                    animateBy="words"
                                    direction="top"
                                    animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
                                    animationTo={[
                                        {
                                            filter: 'blur(5px)',
                                            opacity: 0.5,
                                            y: 5
                                        },
                                        { filter: 'blur(0px)', opacity: 1, y: 0 }
                                    ]}
                                    onAnimationComplete={handleAnimationComplete}
                                />
                            </motion.h1>
                        )}
                        {show && (
                            <motion.h1
                                animate={{ opacity: show ? 0 : 1 }}
                                transition={{ delay: 10, duration: 1.5 }}
                                style={{
                                    pointerEvents: 'none',
                                    fontSize: '80px',
                                    backgroundColor: "white"
                                }}>
                                <BlurText
                                    text="Now, where's our date?"
                                    delay={400}
                                    animateBy="words"
                                    direction="top"
                                    animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
                                    animationTo={[
                                        {
                                            filter: 'blur(5px)',
                                            opacity: 0.5,
                                            y: 5
                                        },
                                        { filter: 'blur(0px)', opacity: 1, y: 0 }
                                    ]}
                                    onAnimationComplete={handleAnimationComplete}
                                />
                            </motion.h1>
                        )}
                    </section>
                }
            </div>
        </>
    )
}