import React from 'react'
import styles from './Login.module.css'
import icon from '../../../assets/img/pcLogo.svg'

function Login () {
  return (
    <header className={styles.header}>
      <section className={styles.section}>
        
          <h1 className={styles.heading}>InfoTástica</h1>
          <img 
          className={styles.logo}
          src={icon} 
          />
      </section>
    </header>
  )
}

export default Login