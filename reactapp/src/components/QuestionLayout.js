import React from "react";
import styles from "../styles/Quiz.module.scss";

function QuestionLayout(props) {
  return <div className={styles.layout}>{props.children}</div>;
}

export default QuestionLayout;
