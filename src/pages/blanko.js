import React, { Suspense } from "react"
import Head from 'next/head'

import Layout from '@/components/Layout'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"

import styled from "styled-components"


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;



const blanko = () => {
    return (
        <Section>
         
              <Canvas>
                  <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <Sphere args={[1, 100, 150]} scale={2.1}>
                      <MeshDistortMaterial
                        color="#451952"
                        attach="material"
                        distort={0.50}
                        speed={1.5}
                      />
                    </Sphere>
                  </Suspense>
                </Canvas>

        </Section>
)
}

export default blanko
