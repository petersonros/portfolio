import styles from "./page.module.css";
import Description from "@/components/Description";
import Grid from "@/components/Grid";
import Center from "@/components/Center";

export default function Home() {
  return (
    <main className={styles.main}>
      <Grid />
      <Center />
      <Description />
    </main>
  );
}
