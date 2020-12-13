import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TaskContainer from '../components/TaskContainer'

export default function Home() {
  
  
  return (
    <div>
      <Head>
        <title>Tasks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TaskContainer/>
      </main>

    </div>
  )
}
