import { NextComponentType } from "next";
import TeamProps from "../../interfaces/team";
import styles from "./Team.module.css";
import Image from "next/image";
import downArrow from "../../public/down-arrow.png"

const Team: NextComponentType = () => {
  return (

    <div className={styles.team} >
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
      <div className={styles.details}>
        <div className={styles.teamDetails}>
          <p>10.000</p>
        </div>
      </div>
    </div >
  )
}

export default Team
