import styles from "./BackgroundAnimation.module.scss";

export function BackgroundAnimation() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        {[...Array(25)].map((_, index) => {
          return <span key={index} />;
        })}
      </div>
    </div>
  );
}
