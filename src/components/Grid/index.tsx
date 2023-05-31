import styles from "./Grid.module.css";

const Grid = () => {
  return (
    <div className={styles.grid}>
      <a
        href="https://petersonros.com"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Como eu fiz</h2>
        <p>Meus projetos e estudos.</p>
      </a>

      <a
        href="https://petersonros.com"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Participações</h2>
        <p>Cursos e certificados.</p>
      </a>

      <a
        href="https://petersonros.com"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Demo</h2>
        <p>Repósitorios e demonstrações</p>
      </a>

      <a
        href="https://petersonros.com"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Sobre</h2>
        <p>Um pouco de história</p>
      </a>
    </div>
  );
};

export default Grid;
