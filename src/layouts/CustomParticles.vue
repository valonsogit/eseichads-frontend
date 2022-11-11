<script setup lang="ts">
import { loadFull } from "tsparticles";

const particlesInit = async (engine: any) => {
    await loadFull(engine);
};
</script>

<template>
    <Particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :options="{
            fullScreen: false,
            fpsLimit: 60,
            interactivity: {
                detectsOn: 'window',
                events: {
                    onDiv: {
                        elementId: 'repulse-div',
                        enable: true,
                        mode: 'repulse',
                        type: 'circle',
                    },
                    resize: true,
                },
                modes: {
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                        speed: 1,
                    },
                },
            },
            particles: {
                color: {
                    value: '#ffffff',
                },
                links: {
                    color: '#ffffff',
                    distance: 100,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                    mode: 'absorb',
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outMode: 'bounce',
                    random: true,
                    speed: 2,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 70,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: 'polygon',
                    options: {
                        polygon: {
                            sides: 6,
                        },
                    },
                },
                size: {
                    random: true,
                    value: 7,
                },
            },
        }"
    />
</template>
