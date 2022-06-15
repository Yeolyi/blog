/**
 * https://gist.github.com/joshuacerbito/ea318a6a7ca4336e9fadb9ae5bbb87f4
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

 import { useState, useEffect } from "react";

 export function useScroll() {
   const [lastScrollTop, setLastScrollTop] = useState(0);
   const [bodyOffset, setBodyOffset] = useState(
     document.body.getBoundingClientRect()
   );
   const [scrollY, setScrollY] = useState(bodyOffset.top);
   const [scrollX, setScrollX] = useState(bodyOffset.left);
   const [scrollDirection, setScrollDirection] = useState();
 
   const listener = e => {
     setBodyOffset(document.body.getBoundingClientRect());
     setScrollY(-bodyOffset.top);
     setScrollX(bodyOffset.left);
     setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
     setLastScrollTop(-bodyOffset.top);
   };
 
   useEffect(() => {
     window.addEventListener("scroll", listener);
     return () => {
       window.removeEventListener("scroll", listener);
     };
   });
 
   return {
     scrollY,
     scrollX,
     scrollDirection
   };
 }
 