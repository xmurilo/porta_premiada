import DoorModel from "@/model/Door";
import styles from "../styles/Door.module.css";

type DoorProps = {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
};

export default function Door(props: DoorProps) {
  const door = props.value; // Porta original
  const selected = door.selected_ && !door.open_ ? styles.selected : "";

  const toggleSelection = (e: React.MouseEvent) => {
    props.onChange(door.alterSelected()); // gerando a nova porta
  };

  const openDoor = (e: React.MouseEvent) => {
    e.stopPropagation(); // evita que ao clicar em um elemento pai abra a porta
    props.onChange(door.openDoor());
  };

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number_}</div>
        <div className={styles.door__knob} onClick={openDoor}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={toggleSelection}>
      <div className={`${styles.structure} ${selected}`}>{door.open_ ? false : renderDoor()}</div>
      <div className={styles.floor}></div>
    </div>
  );
}
