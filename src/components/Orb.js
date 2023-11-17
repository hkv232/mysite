import React, { Suspense } from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"

import styled from "styled-components"


const Section = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1635px) {
    width: 100vw;
  }
  
  @media (max-width: 1400px) {
    width: 80vw;
  }
  
  @media (max-width: 1200px) {
    width: 60vw;
  }
  
  @media (max-width: 950px) {
    width: 40vw;
  }
  
  @media (max-width: 767px) {
    width: 20vw;
  }
  
  @media (max-width: 639px) {
    /* CSS rules for sm */
  }
  
  @media (max-width: 479px) {
    /* CSS rules for xs */
  }
`;



const Orb = () => {
    return (
        <Section>
         
              <Canvas>
                  <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[7, 3, 2]} />
                    <Sphere args={[1, 300, 550]} scale={2}>
                      <MeshDistortMaterial
                        color="#85c2e0"
                        attach="material"
                        distort={0.60}
                        speed={1.75}
                      />
                    </Sphere>
                  </Suspense>
                </Canvas>

        </Section>
)
}

export default Orb
