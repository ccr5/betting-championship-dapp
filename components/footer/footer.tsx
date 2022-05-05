import { NextComponentType } from "next";
import styles from 'Footer.module.css'

const Footer: NextComponentType = () => {
  return (
    <footer className="flex justify-center items-center text-white bg-black opacity-90 min-h-[50px] border-t-2 border-solid border-t-black">
      Copyright © - CCR5
    </footer>
  )
}

export default Footer
