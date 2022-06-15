import "./Home.css"
import { objectMethod } from "@babel/types";
import { useScroll } from "./useScroll";

export default function Home() {
    const { scrollY } = useScroll();
    return (
        <div id="scroll-container">
            <p>{scrollY}</p>
        </div>
    )
}