import React from 'react'
import styles from './index.module.scss'

interface ContentBlockProps {
  children: string | JSX.Element | JSX.Element[];
}

const ContentBlock = ({children} : ContentBlockProps) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
)
}
export default ContentBlock