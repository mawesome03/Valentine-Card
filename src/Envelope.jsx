import './App.css';
import React, { Component, useState } from 'react';
import Close from './assets/Close.png';
import Open from './assets/openeddd.png';
import Letter from './assets/Letter.png'
import { motion, scale } from "framer-motion"
import Message1 from "./Message 1";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';


export default function Envelope() {
    const [isOpened, setIsOpened] = useState(0)
    const envImg = [
        {
            id: 0,
            image: Close,
            text: "Open Me!"
        },
        {
            id: 1,
            image: Open,
            text: "Read it!"
        },
        {
            id: 2,
            image: Letter,
            text: "Keep it!"
        }
    ]
    const handleClick = () => {
        setIsOpened((prev) => (prev + 1) % envImg.length);
    };

    return (
        <>
            <motion.img
                className='close-envelope'
                src={envImg[isOpened].image}
                alt='closed-envelope'
                initial={{ y: 500 }}
                animate={{ y: 100 }}
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
                    marginTop: '520px',
                    marginLeft: '40px'
                }}
            >
                <motion.button
                    className='button-style'
                    onClick={() => {
                        handleClick();
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{
                        scale: 1.20,
                        backgroundColor: 'transparent',
                        boxShadow: "0px 5px 15px rgba(0,0,0,0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        padding: "12px 24px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "15px"
                    }}
                >
                    {envImg[isOpened].text}
                </motion.button>
            </div>

            {envImg[isOpened].id === 2 &&
                <Message1 />
            }
        </>
    )
};
