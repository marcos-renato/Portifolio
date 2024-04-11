import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import styles from './Home.module.css'

function Home() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.home}>
                    <div className={styles.apresentacao}>
                        <p>
                            Olá sou <br />
                            <span>Marcos Renato</span><br />
                            Dev Full Stack
                        </p>
                        <Link to='/sobre' className={`${styles.btn} ${styles.btn_red}`}>
                            Saiba mais
                        </Link>
                    </div>
                    <figure>
                        <img className={styles.img_home} src='/programming-red.svg' alt='Imagem de Home' />
                    </figure>
                </section>
            </Container>

            <Footer />
        </>
    )
}
export default Home
