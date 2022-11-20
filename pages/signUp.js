export default function signUp() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <h1 className={styles.title}>
          <a href="/signUp">Start Your Journey</a>
        </h1>
      </div>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
      </div>
    </main>
  );
}
