import styles from "@/styles/game.module.css";
import Link from "next/link";
import Door from "@/components/Door";
import { createDoors, updateDoors } from "@/functions/doors";
import { useEffect, useState } from "react";
import {useRouter} from "next/router";
import DoorModel from "@/model/Door";

export default function Game() {
  const router = useRouter()
  const [doors, setDoors] = useState<DoorModel[]>([]);
  useEffect(() => {
    let doors = 0;
    let hasGift = 0;
    if(router.query.doors && router.query.hasGift) {
      doors = +router.query.doors
      hasGift = +router.query.hasGift
    }
    setDoors(createDoors(doors, hasGift))
  },[router?.query])

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
