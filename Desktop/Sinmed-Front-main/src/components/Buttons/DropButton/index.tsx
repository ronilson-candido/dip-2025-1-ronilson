import styles from "./styles.module.scss";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

interface DropButtonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  description: string;
}

function DropButton({
  src,
  alt,
  width,
  height,
  title,
  description,
}: DropButtonProps) {
  gsap.registerPlugin(ScrollTrigger);

  const dropContainerRef = useRef(null);
  const dropContentRef = useRef(null);

  useEffect(() => {
    const contentRef = dropContainerRef.current;

    gsap.to(dropContentRef.current, {
      opacity: 1,
      y: 0,
      duration: 2,

      scrollTrigger: {
        trigger: dropContainerRef.current,
        start: "top 600px",
        end: "bottom 500px",
        scrub: 1.5,
      },
    });

    return () => {
      gsap.killTweensOf(contentRef);
    };
  }, []);

  return (
    <div className={styles.dropBtnContainer} ref={dropContainerRef}>
      <div className={styles.dropBtnContent} ref={dropContentRef}>
        <button className={styles.dropBtn}>
          <Image src={src} alt={alt} width={width} height={height} />
        </button>
        <b>{title}</b>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DropButton;
