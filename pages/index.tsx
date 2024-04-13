import Card from "@/components/Card";
import styles from "@/styles/Form.module.css";
import Link from "next/link";
export default function Form() {
  return (
    <div className={styles.form} style={{ display: "flex" }}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card></Card>
      </div>

      <div>
        <Card></Card>

        <Card bgcolor="#28a085">
          <Link href={`/jogo/5/2`} className={styles.link}>
            <h2 >Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
