import styles from "./AureoMenu.module.css";

const AureoMenu = ({ menuItems, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.centerCircle}>
        <h2>Aureo Menu</h2>
        <p>{title}</p>
      </div>

      {menuItems.map((item, index) => (
        <div
          key={index}
          className={styles.menuItem}
          style={{ transform: `rotate(${index * 60}deg)` }}
        >
          <div
            className={styles.itemText}
            style={{ transform: `rotate(-${index * 60}deg)` }}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AureoMenu; 