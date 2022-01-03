import React from 'react';

import Hero from "../components/Hero";
import BgRoadImage from './assets/bg-road.jpg'
import BgCarImage from './assets/bg-cars.jpg'

export default {
    title: 'Hero',
    component: Hero,
}

export const usage = () => (
    <Hero title="Ganhe sua liberdade para ir e vir" image={BgRoadImage}>
        <p>A auto escola lider em aprovação.</p>
    </Hero>
);

export const withList = () => (
    <Hero title={
        <span>Ganhe sua <strong>liberdade</strong><br/> para ir e vir</span>
    } image={BgCarImage}>
        <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
        </ul>
    </Hero>
);
