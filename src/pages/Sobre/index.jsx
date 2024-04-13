import styles from './Sobre.module.css'
import avatar from './images/renato4.jpeg'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import sql from './images/icon-sql.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
function Sobre() {
    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>Sou <span>Marcos Renato</span> <br />
                        <strong>Dev Full Stack</strong></p>

                    <p>Profissional de tecnologia da informação altamente qualificado e motivado, com experiência comprovada <br />
                        no desenvolvimento de soluções de software inovadoras para o setor de saúde. Especializado em análise <br />
                        de requisitos, solução de problemas e desenvolvimento de código de alto desempenho, tenho um histórico <br />
                        e sucesso em liderar projetos complexos desde a concepção até a implementação.</p>
                    <p>Com um forte compromisso com a excelência técnica e a satisfação do cliente, contribuí significativamente <br />
                        para o sucesso operacional de organizações anteriores, incluindo a obtenção de importantes certificações e <br />
                        a implementação de práticas sustentáveis de gerenciamento de recursos.</p>
                    <p>Estou em busca de uma oportunidade desafiadora onde possa aplicar minha experiência e habilidades para <br />
                        impulsionar a inovação e agregar valor a uma equipe dinâmica. Sou apaixonado por resolver problemas complexos <br />
                        e estou sempre buscando aprender e me desenvolver profissionalmente.</p>
                </div>
            </div >

            <div className={styles.techs}>
                <h3>Techs</h3>
                
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do HTML" />
                    <img src={js} alt="Ícone do JS" />
                    <img src={sql} alt="Ícone do SQL" />
                    <img src={react} alt="Ícone do REACT" />
                    <img src={node} alt="Ícone do NODE" />
                    <img src={css} alt="Ícone do CSS" />
                </div>
            </div>
        </section >
    );
}
export default Sobre