import styles from "./Aside.module.scss";

export const Aside = () => {
  
  return (
    <aside className={styles["container"]}>
      <nav>
        <ul>
          <li>Home </li>
          <li>Browse </li>
          <li>Settings </li>
        </ul>
      </nav>
    </aside>
  );
};
