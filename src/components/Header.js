import Head from "next/head"

export default function Header({ title, keywords, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/logo.png" />
      </Head>
    </>
  )
}
