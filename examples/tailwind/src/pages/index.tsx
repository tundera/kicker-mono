import NextLink from 'next/link'
import Head from 'next/head'
import DarkModeToggle from '../components/dark-mode-toggle'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Example Tailwind App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center dark:bg-gray-800">
        <DarkModeToggle />
        <h1 className="text-3xl text-pink-500">Home Page</h1>
        <nav className="space-x-4">
          <NextLink href="/">Home</NextLink>
          <NextLink href="/teams">Teams</NextLink>
        </nav>
      </div>
    </>
  )
}
