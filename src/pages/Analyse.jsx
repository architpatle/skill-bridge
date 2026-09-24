import React from 'react'

import Hero from '../components/sections/Hero/Hero'
import Analysis from '../components/analyse/Analysis/Analysis'

import heroData from '../data/heroData'

const Analyse = () => {
    return (
        <>
            <Hero data={heroData.analyse} />
            <Analysis />
        </>
    )
}

export default Analyse
