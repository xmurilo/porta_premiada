import styles from "@/styles/game.module.css";
import Link from "next/link";
import Door from "@/components/Door";
import { createDoors, updateDoors } from "@/functions/doors";
import { useState } from "react";

export default function Game() {
  const [doors, setDoors] = useState(createDoors(3, 2));

  function renderDoors() {
    return doors.map(door => {
      return (
        <Door
          key={door.number_}
          value={door}
          onChange={newDoor => setDoors(updateDoors(doors, newDoor))}
        />
      );
    });
  }
  return (
    <main id={styles.game}>
      <div className={styles.doors}>{renderDoors()}</div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </main>
  );
}
