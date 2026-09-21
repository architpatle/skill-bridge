import styles from './Why.module.css'

import Eyebrow from '../../ui/Eyebrow/Eyebrow'

import whyImg from '../../../assets/images/about/why.png'

const Why = () => {
    return (
        <section className={`${styles.why} section-sm `}>

            <div className={`${styles.contentWrapper} container `}>

                {/* Eyebrow  */}
                <Eyebrow eyebrowSub="Why" eyebrowMain="was SkillBridge created?" />

                <h2 className={`${styles.headingExtra} heading `} >Career decisions shouldn't be based on guesswork.</h2>

                <div className={`${styles.content}`}>
                    <p className={`${styles.descriptionExtra} description `} >Students and freshers often know where they want to go, but not what it takes to get there. SkillBridge was created to bridge that gap by turning skills, role requirements, and career goals into clear, actionable direction.
                        <br /><br />

                        Choosing a career path can feel overwhelming when you don't know which skills matter or where your current abilities stand. SkillBridge brings these pieces together to help you understand your position and make more informed career decisions.
                        <br /><br />
                        Learning without a clear direction can lead to wasted time, scattered efforts, and uncertainty about what comes next. SkillBridge helps turn that uncertainty into a focused path by showing you what to improve and where to go from there.
                    </p>
                    <div className={`${styles.imageWrapper}`}>
                        <img src={whyImg} alt="whyImg" />
                    </div>
                </div>


            </div>

        </section>
    )
}

export default Why
