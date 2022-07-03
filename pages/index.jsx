import styles from "./index.module.css"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Transition } from "react-transition-group"
import { FaGithub, FaInstagram } from "react-icons/fa"
import Link from "next/link"

const changingTexts = ["코드로 가치를 만드는", "아이같이 상상하는", "항상 공부하는"]

const defaultStyle = {
  transition: `opacity 500ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const categoryData = [
  { title: "TIL", description: "매일의 공부를 간단히 기록합니다", href: "/til" },
  { title: "Archive", description: "읽거나 찾은 정보를 기록합니다", href: "/archive" },
  { title: "Writing", description: "제 경험을 기록합니다", href: "/writing" },
  { title: "Dict", description: "공부한 것들을 기록합니다", href: "/dict" },
]

export default function Home() {
  const [check, setCheck] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setCheck((check + 1) % changingTexts.length)
      setShow(true);
    }, 2500);
    const id2 = setInterval(() => {
      setShow(false);
    }, 2100)
    return () => {
      clearInterval(id);
      clearInterval(id2);
    }
  }, [check])

  // https://github.com/reactjs/react-transition-group/issues/668
  const nodeRef = useRef(null)

  return (
    <div id={styles.homeContainer}>
      <div id={styles.mainIntroductionBackground}>
        <div id={styles.mainIntroduction}>
          <div id={styles.profileImage}>
            <Image src="/images/me.jpg" alt="" width="150px" height="150px" objectFit="cover"></Image>
          </div>
          <h2>{"안녕하세요,\n이성열입니다"}</h2>
          <Transition in={show} timeout={400} nodeRef={nodeRef}>
            {state => (
              <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}>
                {<h3 className={styles.changingTexts}>{changingTexts[check]}</h3>}
              </div>
            )}
          </Transition>
          <h3>스카이온의 iOS 개발자입니다.</h3>
          <div id={styles.links}>
            <a href="https://www.github.com/yeolyi"><FaGithub /></a>
            <a href="https://www.instagram.com/studyeolyi"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div id={styles.content}>
        <CategoryList />
      </div>
    </div>
  )
}

function CategoryList() {
  return categoryData.map(x => {
    return <Link href={x.href} key={x.title}>
      <div id={styles.categoryList}>
        <h2>{x.title}</h2>
        <h3>{x.description}</h3>
      </div>
    </Link>
  })
}