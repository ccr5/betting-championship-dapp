import { NextComponentType } from "next";
import SelectToken from "../selectToken";
import SwapButton from "../swapButton";
import styles from './Tokens.module.css';

const Tokens: NextComponentType = () => {
  return (
    <div className={styles.tokens}>
      <div className={styles.tokensCard}>
        <div className={styles.tokensTitle}>
          <h4>BET Tokens</h4>
          <p>Buy BET tokens in an instant using ethers</p>
          <hr />
        </div>
        <SelectToken />
        <SwapButton />
        <SelectToken />
        <div className={styles.tokensButton}>
          <input className={styles.tokensBuyButton} type="button" value="Confirm and Buy" />
        </div>
      </div>
    </div>
  )
}

export default Tokens
