import Image from "next/image";
import styles from "./Center.module.css";

const Center = () => {
  return (
    <div className={styles.center}>
      <Image
        className={styles.logo}
        src="/peterson.svg"
        alt="Next.js Logo"
        width={140}
        height={40}
        priority
      />
    </div>
  );
};

export default Center;
