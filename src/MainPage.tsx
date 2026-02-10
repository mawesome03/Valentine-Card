import './App.css';
import React from 'react';
import Grainient from './component/Grainient';
import { motion, scale } from "framer-motion"
import Envelope from './Envelope';



export default function MainPage() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
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
        <Envelope />
      </div>

    </div>
  )
}