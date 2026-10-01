import React from 'react'

import styles from './ResultsStage.module.css'

import Eyebrow from '../../ui/Eyebrow/Eyebrow.jsx'

const ResultsStage = () => {
  return (
    <div className={`${styles.resultsStage}`} >

      <Eyebrow eyebrowSub="Stage 3" eyebrowMain="Your Analysed results" />
    </div>
  )
}

export default ResultsStage
