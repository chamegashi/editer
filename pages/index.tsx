import React, { FC, useState, useEffect } from 'react';
import Head from 'next/head'
import axios from 'axios'

const Home: FC = () => {
  const [code, setCode] = useState<string>("");

  const changeCode = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setCode(event.currentTarget.value)
    console.log(code)
  }

  const uploadCode = () => {
    axios.post('http://127.0.0.1:5000/code', {
      code: code
    }).then((res) => {
      console.log(res.data)
    })
  }

  useEffect(() => {

  }, [])

  return (
    <div className="bg-gray-100">
      <Head>
        <title>テストえでぃた</title>
      </Head>


      <p className="text-center text-3xl p-3">テストえでぃた</p>

      <div className="p-4 flex justify-center">
        <div className="w-1/2 m-2">
          <p className="text-center m-2">入力</p>
          <textarea className="rounded resize border w-full h-96" onChange={changeCode}></textarea>
        </div>
        <div className="w-1/2 m-2">
          <p className="text-center m-2">出力</p>
          <textarea className="rounded resize border w-full h-96" onChange={changeCode}></textarea>
        </div>
      </div>

      <div className="flex justify-center mb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={uploadCode}>送信</button>
      </div>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
