import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Js Project & Headless Wp</title>
        <meta name="description" content="Next Js Project With Headless WP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-screen w-full bg-slate-100'>
        <div className="main-container">
         <h1>Welcome</h1>
        </div>
      </main>
    </div>
  )
}
