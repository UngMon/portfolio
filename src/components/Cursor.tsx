import { useEffect, useRef } from "react";
import "./Cursor.scss";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorMove = (e: MouseEvent) => {
      cursorRef.current!.style.top = e.pageY - window.scrollY + "px";
      cursorRef.current!.style.left = e.pageX + "px";
    };

    window.addEventListener("mousemove", cursorMove);

    return () => window.removeEventListener("mousemove", cursorMove);
  });

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Cursor;
