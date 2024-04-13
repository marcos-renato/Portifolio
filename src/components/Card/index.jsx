import styles from './Card.module.css'
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { SiApache } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";

function Card(){
    return(
        <section className={styles.card}>
            <h3>Titulo do projeto</h3>  
            <p>Texto descritivo do projeto.</p>
            <div className={styles.card_footer}>
               <div className={styles.card_icones}>
               <FaJava />
               <FaPhp />
               <GrOracle />
               <SiApache/>
               </div>
               <button className={styles.botao}>
               <BsArrowRight />
               </button>
            </div>
        </section>
    )
}
export default Card