"use client";

import { useEffect, useState } from "react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, X as CloseIcon, ChevronUp, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import { useRouter, usePathname } from "next/navigation";
import { EnquirePopup } from "@/components/forms/EnquirePopup";

// A rectangular spinning banner component using React Three Fiber
function SpinningBanner() {
  const meshRef = useRef<THREE.Mesh>(null);
  const router = useRouter();

  // Distinct images for the 4 faces
  const texFront = useTexture("https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80");
  const texRight = useTexture("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80");
  const texBack = useTexture("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80");
  const texLeft = useTexture("https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80");

  // Define routes corresponding to each face. Order matters based on standard Three.js rotation logic.
  // When y-rotation is 0: front, PI/2: left, PI: back, 3PI/2: right
  const faceRoutes = [
    "/projects/horizon-tower", // Front face (0 rad)
    "/projects/serenity-villas", // Left face (~1.57 rad)
    "/projects/vertex", // Back face (~3.14 rad)
    "/projects/oasis", // Right face (~4.71 rad)
  ];

  // Custom rotation ref to track state
  const rotationState = useRef({ targetY: 0, currentY: 0, timeSinceLastTurn: 0, activeFaceIndex: 0 });

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    rotationState.current.timeSinceLastTurn += delta;

    // Every 3 seconds (2.5s pause + 0.5s rotation), shift target by 90 degrees (PI/2)
    if (rotationState.current.timeSinceLastTurn > 3) {
      rotationState.current.targetY += Math.PI / 2;
      rotationState.current.timeSinceLastTurn = 0;

      // Update active face index (modulo 4 for 4 sides)
      rotationState.current.activeFaceIndex = (rotationState.current.activeFaceIndex + 1) % 4;
    }

    // Smoothly interpolate current rotation to target rotation
    rotationState.current.currentY = THREE.MathUtils.lerp(
      rotationState.current.currentY,
      rotationState.current.targetY,
      Math.min(delta * 4, 1) // Ease factor
    );

    meshRef.current.rotation.y = rotationState.current.currentY;
  });

  // Calculate pointer interaction based on the current active face
  const handleBannerClick = () => {
    // We send the user to the route associated with whatever face is currently pointing at the camera
    const route = faceRoutes[rotationState.current.activeFaceIndex];
    if (route) {
      router.push(route);
    }
  };

  // Material array: [right, left, top, bottom, front, back]
  const materials = [
    new THREE.MeshStandardMaterial({ map: texRight, color: "#ffffff" }), // Right
    new THREE.MeshStandardMaterial({ map: texLeft, color: "#ffffff" }), // Left
    new THREE.MeshStandardMaterial({ color: "#111111" }), // Top
    new THREE.MeshStandardMaterial({ color: "#111111" }), // Bottom
    new THREE.MeshStandardMaterial({ map: texFront, color: "#ffffff" }), // Front
    new THREE.MeshStandardMaterial({ map: texBack, color: "#ffffff" })  // Back
  ];

  return (
    <mesh
      ref={meshRef}
      position={[0, -0.2, 0]}
      material={materials}
      onClick={handleBannerClick}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'auto'}
    >
      <boxGeometry args={[1.8, 2.5, 1.8]} />
    </mesh>
  );
}

export function FloatingElements() {
  const [mounted, setMounted] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects/");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <>
      {/* Left Vertical Social Media Icons */}
      {!isProjectPage && (
        <div className="fixed left-8 top-1/4 z-50 flex flex-col items-center hidden md:flex">
          {/* Leading vertical line */}
          <div className="w-[1px] h-32 bg-zinc-900/20 mb-6 transition-colors duration-300"></div>
          <div className="flex flex-col space-y-5 text-zinc-500">
            <Link href="#" className="hover:text-accent transition-colors duration-300"><Facebook className="w-[18px] h-[18px] fill-current" /></Link>
            <Link href="#" className="hover:text-accent transition-colors duration-300"><Instagram className="w-[18px] h-[18px]" /></Link>
            <Link href="#" className="hover:text-accent transition-colors duration-300">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.04H5.078z"></path></g></svg>
            </Link>
            <Link href="#" className="hover:text-accent transition-colors duration-300"><Youtube className="w-[18px] h-[18px]" /></Link>
            <Link href="#" className="hover:text-accent transition-colors duration-300"><Linkedin className="w-[18px] h-[18px] fill-current" /></Link>
          </div>
        </div>
      )}

      {/* Right Vertical Enquire Now Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block select-none">
        <button
          onClick={() => setIsEnquireOpen(true)}
          className="group relative bg-[#413F4C] text-white/90 group-hover:text-white hover:text-white font-bold py-5 px-3 rounded-none flex items-center justify-center gap-3 tracking-widest text-sm uppercase overflow-hidden transition-all duration-300 hover:shadow-xl"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {/* Smooth hover gradient layer */}
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#020D2F] to-[#413F4C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0"></div>

          <div className="relative z-10 flex items-center gap-3">
            <span>Enquire Now</span>
            <MessageSquare className="w-4 h-4 rotate-90" />
          </div>
        </button>
      </div>

      {/* Bottom Right Elements: 3D Cube and Scroll To Top */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {showPopup && (
          <div className="relative group">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-2 -right-2 bg-black text-white rounded-full p-1 z-10 shadow-md hover:scale-110 transition-transform"
            >
              <CloseIcon className="w-3 h-3" />
            </button>
            <div className="w-52 h-72 bg-transparent rounded-none overflow-hidden relative cursor-pointer">
              <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[2, 2, 2]} intensity={2} />
                <SpinningBanner />
              </Canvas>
            </div>
          </div>
        )}

        <button
          onClick={scrollToTop}
          className={`bg-black text-white rounded-none p-3 shadow-xl hover:-translate-y-1 transition-all group relative
            ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
          `}
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>

      <EnquirePopup
        isOpen={isEnquireOpen}
        onClose={() => setIsEnquireOpen(false)}
      />
    </>
  );
}



