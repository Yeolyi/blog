import styles from "./container.module.css"

export default function Container({ children }) {
    return (
        <div id={styles.container}>
            { children }
        </div>
    )    
}