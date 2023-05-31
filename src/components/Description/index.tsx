import Image from "next/image";
import styles from "./Description.module.css"

const Description = () => {
  return (
    <div className={styles.description}>
      <p>
        Create your account:&nbsp;
        <code className={styles.code}>Sign Up</code>
      </p>
      <div>
        <a
          href="https://petersonros.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Peterson{" "}
          <Image
            src="/github.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
};

export default Description;
