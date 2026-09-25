import React from 'react'

import styles from './ProfileStage.module.css'

import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import Button from '../../ui/Button/Button'

import visual from '../../../assets/images/about/why.png'
import { MdOutlineAttachment } from "react-icons/md";

const ProfileStage = () => {
  return (
    <div className={`${styles.profileStage}`} >
      {/* Eyebrow  */}
      <Eyebrow eyebrowSub="Stage 1" eyebrowMain="Share Your Profile" />

      {/* main heading */}
      {/* <h2 className={`${styles.headingExtra}  heading`} >Enter the following details.</h2> */}

      <div className={`${styles.stageWrapper} `}>

        <div className={`${styles.formWrapper} `}>
          <form className={`${styles.form} `}>

            <div className={`${styles.fieldWrapper} `}>

              <label className={`${styles.label} `}  >Your Skills & Experience</label>

              <div className={`${styles.fieldsGroup} `}>

                <input type="text" name="skills" placeholder='Enter Your Skills' required />

                <p>OR</p>

                <label className={styles.fileUpload}>
                  <MdOutlineAttachment className={styles.icon} />
                  Upload Your Resume
                  <input type="file" name="resume" />
                </label>
              </div>
            </div>

            <div className={`${styles.fieldWrapper} `}>

              <label className={`${styles.label} `}  >Your Target Position</label>

              <div className={`${styles.fieldsGroup} `}>


                <input type="text" name="jobTitle" placeholder='Enter Job Title' required />

                <p>OR</p>

                <label className={styles.fileUpload}>
                  <MdOutlineAttachment className={styles.icon} />
                  Upload Job Description
                  <input type="file" name="jobDescription" />
                </label>

              </div>
            </div>

            <div className={`${styles.btnWrapper} `}>
              <Button value="Analyse" />
            </div>
          </form>

        </div>

        <div className={`${styles.visualWrapper} `}>

          <img src={visual} alt="" />

        </div>

      </div>

    </div>

  )
}

export default ProfileStage
