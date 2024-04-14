import { useEffect, useState } from "react"
import Card from "../../components/Card"
import styles from './Projetos.module.css'

function Projetos() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        const buscaRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/marcos-renato/repos')
            const data = await response.json()
            setRepositories(data)
        }
        buscaRepositorios()
    }, [])

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo)=>(
                                <Card 
                                    key={repo.id} 
                                    name={repo.name} 
                                    description={repo.description} 
                                    html_url={repo.html_url}
                                />
                            ))
                        }

                    </section>
                ):(
                    <p>Carregando respositórios....</p>
                )
           }
        </section >
    )
}
export default Projetos