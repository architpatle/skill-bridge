import React from 'react'
import Hero from '../components/sections/Hero/Hero'
import heroData from '../data/heroData'

const Analysis = () => {
    return (
        <>
            <Hero data={heroData.analyse} />
        </>
    )
}

export default Analysis
