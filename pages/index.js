import styles from "./index.module.css"
import Image from "next/image"

export default function Home() {
  return (
    <div id={styles.homeContainer}>
        <div id={styles.profileImage}>
            <Image src="/images/me.jpg" alt="" width="150px" height="150px" objectFit="cover"></Image>
        </div>
        <h2>{"안녕하세요,\n이성열입니다"}</h2>
        <h3>{"코드로 가치를 만드는\n스카이온의 iOS 개발자입니다."}</h3>
        <li>
            <a href="https://www.github.com/yeolyi">Github</a>
            <a href="https://www.instagram.com/studyeolyi">Instagram</a>
        </li>
    </div>
  )
}
