import styles from './Contatos.module.css'
import { CiMail } from "react-icons/ci";
import { FiInstagram } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Contatos() {
    return (
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre.</p>
            <div className={styles.icones}>
                <a href='mailto:markosren@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <CiMail className={styles.icone} />
                </a>
                <a href='https://www.instagram.com/marcosrenatopinto/' target='_blank' rel='noopener noreferrer'>
                    <FiInstagram className={styles.icone} />
                </a>
                <a href='http://linkedin.com/in/marcos-renato-pinto-vicente-1b1aa498' target='_blank' rel='noopener noreferrer'>
                    <BsLinkedin className={styles.icone} />
                </a>
                <a href='http://github.com/marcos-renato' target='_blank' rel='noopener noreferrer'>
                    <BsGithub className={styles.icone} />
                </a>
            </div>
        </section>
    )
}
export default Contatos