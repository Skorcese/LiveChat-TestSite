import React from "react";
import styles from "./StateDisplay.module.scss";

const StateDisplay = ({ state }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>State</h2>
    <div className={styles.codeBlock}>
      <code>
        <div className={styles.code}>
          <p>
            <span className={styles.var}>visitor</span>: &#123;
          </p>
          <div className={styles.indent1}>
            <p>
              <span className={styles.var}>name</span>
              {": "}
              <span className={styles.value}>
                {state.visitor.name || "null"}
              </span>
              {", "}
            </p>
            <p>
              <span className={styles.var}>email</span>
              {": "}
              <span className={styles.value}>
                {state.visitor.email || "null"}
              </span>
              {", "}
            </p>
          </div>
          <p>&#125;,</p>
          <p>
            <span className={styles.var}>group</span>
            {": "}
            <span className={styles.value}>{state.group}</span>
          </p>
        </div>
      </code>
    </div>
  </div>
);

export default StateDisplay;
