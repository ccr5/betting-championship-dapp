import { NextComponentType } from "next";
import styles from 'Footer.module.css'

const Footer: NextComponentType = () => {
  return (
    <footer style={{ borderTop: "1px solid", borderTopColor: "black" }}>
      Copyright © - CCR5
    </footer>
  )
}

export default Footer
