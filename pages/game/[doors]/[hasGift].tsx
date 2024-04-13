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
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if(!router.query.doors || !router.query.hasGift) return
    const doors = +router.query.doors
    const hasGift = +router.query.hasGift

    if(doors && hasGift) {
      const qttValiddDoors = doors >= 3 && doors <= 100
      const qttValidGift = hasGift >= 1 && hasGift <= doors
      setValid(qttValiddDoors && qttValidGift)
    } else {
      setValid(false)
    }
  },[doors, router?.query.doors, router?.query.hasGift])

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
    return valid && doors.map(door => {
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
      <div className={styles.doors}>
        {valid ? renderDoors() : <h1>Valores inválidos</h1>}
        </div>
      <div className={styles.buttons}>
        <Link href="/" passHref>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </main>
  );
}
