import styles from './Card.module.css'
import { FaJava , FaPhp , FaNode} from "react-icons/fa";
//import { FaPhp } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { SiApache } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
//import { FaNode } from "react-icons/fa";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Card({name,description,html_url}) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaNode />
                    <FaJava />
                    <FaPhp />
                    <GrOracle />
                    <SiApache />
                </div>
                <Link to={html_url} className={styles.botao}>
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    )
}
export default Card