import { NextComponentType } from "next";
import TeamProps from "../../interfaces/team";
import styles from "./Team.module.css";
import Image from "next/image";
import downArrow from "../../public/down-arrow.png"
import { useState } from "react";

const Team: NextComponentType = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="component">
      <button className={styles.team} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.info}>
          <div className={styles.teamInfo}>
            <p>1</p>
          </div>
          <div className={styles.teamInfo}>
            <p>São Paulo</p>
          </div>
          <div className={styles.teamInfo}>
            <p>2</p>
          </div>
          <div className={styles.teamInfo}>
            <p>10.000</p>
          </div>
          <div className={styles.teamInfo}>
            <Image
              src={downArrow}
              alt=""
              width={24}
              height={24}
              className="d-inline-block align-text-top"
            />
          </div>
        </div>
      </button>
      {isOpen &&
        <div className={styles.details}>
          <div className={styles.teamDetails}>
            <p> You have betting in {"São Paulo"} a total of: {"10.000"} BETs</p>
          </div>
          <div className={styles.teamDetails}>
            <input className={styles.selectAmount} style={{ width: "90%" }} type="text" placeholder="0.0" aria-label="0.0" />
            <button>Bet</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Team
