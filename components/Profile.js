import React from 'react'
import styles from '../styles/Profile.module.css'

const Profile = ({name}) => {
  return (
    <div className={styles.profile}>
      <p>
        {name}
      </p>
    </div>
  )
}

export default Profile