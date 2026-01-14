'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import randomColor from 'randomcolor';
import { gsap } from 'gsap';
import './background.css';
import { BUBBLE_SRC } from '@/lib/utils';

interface SpriteObject {
  sprite: THREE.Sprite;
  material: THREE.SpriteMaterial;
}

export function Background() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nbObjects = 800;
    const conf = { opacity: 0.8 };

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 20, 30);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.touchAction = 'none'; // importante para touch
    containerRef.current?.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 5;
    controls.enableDamping = true; // suaviza la rotación
    controls.dampingFactor = 0.05;

    // Texture de los sprites
    const spriteMap = new THREE.Texture();
    const bubble = new Image();
    bubble.src = BUBBLE_SRC;
    bubble.onload = () => {
      spriteMap.image = bubble;
      spriteMap.needsUpdate = true;
    };

    // Crear objetos
    const objects: SpriteObject[] = [];
    for (let i = 0; i < nbObjects; i++) {
      const object = createSprite();
      objects.push(object);
      scene.add(object.sprite);
    }

    function createSprite(): SpriteObject {
      const material = new THREE.SpriteMaterial({
        color: randomColor({ luminosity: 'light' }),
        map: spriteMap,
        transparent: true,
        opacity: 1,
        depthTest: false,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });

      const sprite = new THREE.Sprite(material);
      shuffleSprite(sprite, material);
      return { sprite, material };
    }

    function shuffleSprite(sprite: THREE.Sprite, material: THREE.SpriteMaterial) {
      const scale1 = 0.1;
      const scale2 = 2 + Math.random() * 3;
      sprite.scale.set(scale1, scale1, 1);

      const pos = getRandomVec3();
      sprite.position.set(pos.x * 50, pos.y * 50 - 25, pos.z * 50);

      material.opacity = conf.opacity;

      gsap.to(sprite.scale, {
        duration: 1,
        x: scale2,
        y: scale2,
        ease: 'power2.in'
      });
      gsap.to(sprite.position, {
        duration: scale2,
        y: sprite.position.y + 100,
        ease: 'power2.in'
      });
      gsap.to(sprite.position, {
        duration: 1,
        x: sprite.position.x + (Math.random() * 20 - 10),
        z: sprite.position.z + (Math.random() * 20 - 10),
        repeat: Math.floor(scale2 / 2),
        yoyo: true,
        ease: 'linear'
      });
      gsap.to(material, {
        duration: 1,
        opacity: 0,
        delay: scale2 - 1,
        ease: 'power2.in',
        onComplete: () => shuffleSprite(sprite, material)
      });
    }

    function getRandomVec3(): { x: number; y: number; z: number } {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2 * Math.PI;
      const phi = Math.acos(2 * v - 1);
      const r = Math.cbrt(Math.random());
      return {
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi)
      };
    }

    function animate() {
      requestAnimationFrame(animate);
      controls.update(); // importante para touch y damping
      renderer.render(scene, camera);
    }
    animate();

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      controls.dispose();
      renderer.dispose();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className='background'></div>;
}
