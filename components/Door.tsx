import DoorModel from "@/model/Door";
import styles from "../styles/Door.module.css";

type DoorProps = {
  door: DoorModel;
};

export default function Door(props: DoorProps) {
  const {door} = props
  const selected = door.selected_ ? styles.selected : "";

  return (
    <div className={styles.area}>
      <div className={`${styles.structure} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>{door.number_}</div>
          <div className={styles.door__knob}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
