import NextLink from 'next/link'
import Head from 'next/head'
import { Team } from '@tunderadev/hoop'

import DarkModeToggle from 'src/components/dark-mode-toggle'
import { getTeams } from 'src/lib/teams'

interface TeamsPageProps {
  teams: Team[]
}

export default function TeamsPage({ teams }: TeamsPageProps) {
  return (
    <>
      <Head>
        <title>Example Tailwind App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center dark:bg-gray-800">
        <DarkModeToggle />
        <h1 className="text-3xl text-pink-500">Teams Page</h1>
        <nav className="space-x-4">
          <NextLink href="/">Home</NextLink>
          <NextLink href="/teams">Teams</NextLink>
        </nav>
        <article className="py-4">
          <ul className="space-y-2">
            {teams.map((team) => {
              return (
                <li key={team.slug} className="space-y-4 dark:text-white">
                  <NextLink href={`/teams/${team.slug}`}>{team.name}</NextLink>
                </li>
              )
            })}
          </ul>
        </article>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { teams } = await getTeams()

  return {
    props: {
      teams,
    },
  }
}
