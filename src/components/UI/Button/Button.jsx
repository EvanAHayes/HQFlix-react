import React from 'react';
import styles from './Button.module.css'

const button = (props) => (
    <div className={"col-12"}>
        <button disabled={props.disable} 
                onClick={props.clicked}
                className={styles.button}>{props.children}</button>
    </div>

);

export default button;