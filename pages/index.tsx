import Card from "@/components/Card";
import NumericEntry from "@/components/NumericEntry";
import styles from "@/styles/Form.module.css";
import Link from "next/link";
import { useState } from "react";
export default function Form() {
  const [doorsQtt, setDoorsQtt] = useState(3);
  const [withGift, setWithGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumericEntry
            text="Qtde Portas?"
            value={doorsQtt}
            onChange={newQuantity => setDoorsQtt(newQuantity)}
          />
        </Card>
      </div>

      <div>
        <Card>
          <NumericEntry
            text="Porta com Presente?"
            value={withGift}
            onChange={newDoorWithGift => setWithGift(newDoorWithGift)}
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${doorsQtt}/${withGift}`} className={styles.link} passHref>
            <h2>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
