import { Link } from 'react-router-dom';

import styles from './ContactForm.module.css'

import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import Form from './Form/Form';

import {
    RiMailLine,
    RiPhoneLine
} from "react-icons/ri";


const ContactForm = () => {
    return (
        <section className={`${styles.contactForm} section-sm `}>

            <div className={`${styles.contentWrapper} container `}>
                <div className={`${styles.contentWrapperInner} `}>

                    <div className={`${styles.content} `}>
                        <div className={`${styles.contentTop} `}>

                            <Eyebrow eyebrowSub="Want" eyebrowMain="to connect?" />

                            <h2 className={`${styles.headingExtra} heading `} >Let's start a conversation</h2>

                            <p className={`${styles.descriptionExtra} description `} >Have a question, suggestion, or feedback about SkillBridge? Reach out to us and we'll be happy to hear from you.</p>
                        </div>

                        <div className={`${styles.contentBottom} `}>
                            <ul className={`${styles.quickLinks} `}>
                                <li className={`${styles.quickLinksItem} `}>

                                    <div className={`${styles.iconWrapExtra} iconWrap `} >
                                        <RiMailLine className={`${styles.iconExtra} icon `} />
                                    </div>

                                    <div className={`${styles.linkContent} `}>

                                        <h6>Queries By Mail</h6>
                                        <p className='description'>info@skillbridge.com</p>
                                    </div>

                                </li>
                                <li className={`${styles.quickLinksItem} `}>
                                    <div className={`${styles.iconWrapExtra} iconWrap `} >
                                        <RiPhoneLine className={`${styles.iconExtra} icon `} />
                                    </div>

                                    <div className={`${styles.linkContent} `}>

                                        <h6>Here To Help</h6>
                                        <p className='description'>+91 9876545678</p>
                                    </div>

                                </li>
                            </ul>

                        </div>
                    </div>


                    <div className={`${styles.formWrapper} `}>

                        <h3 className={`${styles.cardHeadingExtra} cardHeading `} >Send us a message</h3>

                        <Form />

                    </div>
                </div>

            </div>c

        </section>
    )
}

export default ContactForm
