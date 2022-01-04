import React from 'react';

import Hero from "./Hero";
import BgRoadImage from '../stories/assets/bg-road.jpg'
import BgCarImage from '../stories/assets/bg-cars.jpg'
import Heading from './Heading';

export default {
    title: 'Hero',
    component: Hero,
}

export const usage = () => (
    <Hero image={BgRoadImage}>
        <h1>Ganhe sua liberdade para ir e vir</h1>
        <p>A auto escola lider em aprovação.</p>
    </Hero>
);

export const withList = () => (
    <Hero image={BgCarImage}>
        <Heading>
            <h1>Ganhe sua <strong>liberdade</strong><br/> para ir e vir</h1>
        </Heading>
        <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
        </ul>
    </Hero>
);
