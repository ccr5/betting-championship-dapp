import { NextComponentType } from "next";
import ethers from "../../public/ethers.png"
import styles from './SelectToken.module.css'
import Image from "next/image"

const SelectToken: NextComponentType = () => {
  return (
    <div className={styles.selectToken}>
      <div className={styles.selectDescribe}>
        <div className={styles.selectImg}>
          <Image
            src={ethers}
            alt=""
            height={20}
            width={20}
          />
        </div>
        <div className={styles.selectTitle}>
          Ethers
        </div>
      </div>
      <input className={styles.selectAmount} style={{ width: "90%" }} type="text" placeholder="0.0" aria-label="0.0" />
    </div>
  )
}

export default SelectToken
