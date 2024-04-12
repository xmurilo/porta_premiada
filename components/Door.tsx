import DoorModel from "@/model/Door";
import styles from "../styles/Door.module.css";

type DoorProps = {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
};

export default function Door(props: DoorProps) {
  const door = props.value; // Porta original
  const selected = door.selected_ ? styles.selected : "";

  const toggleSelection = (e: any) => {
    props.onChange(door.alterSelected()); // gerando a nova porta
  }

  return (
    <div className={styles.area} onClick={toggleSelection}>
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
