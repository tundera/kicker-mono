import { GetStaticProps, GetStaticPaths } from 'next'
import NextLink from 'next/link'
import NextImage from 'next/image'
import Head from 'next/head'
import { Team, Player } from '@tunderadev/hoop'

import DarkModeToggle from 'src/components/dark-mode-toggle'
import { getTeams, getTeamBySlug } from 'src/lib/teams'

interface TeamPageProps {
  team: Team & {
    players: Player[]
  }
}

export default function TeamPage({ team }: TeamPageProps) {
  return (
    <>
      <Head>
        <title>Example Tailwind App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center dark:bg-gray-800 dark:text-white">
        <DarkModeToggle />
        <h1 className="text-3xl text-pink-500">Team Page</h1>
        <nav className="space-x-4">
          <NextLink href="/">Home</NextLink>
          <NextLink href="/teams">Teams</NextLink>
        </nav>
        <section className="py-4">
          <article className="flex justify-between">
            <div>
              <h2>
                {team.city} {team.name}
              </h2>
              <p>Established {team.established}</p>
              <p>
                2019-2020 Record: {team.wins} - {team.losses}
              </p>
            </div>
            <NextImage
              src={team.logo}
              width="100px"
              height="100px"
              alt={`${team.name} team logo`}
            />
          </article>
        </section>
        <section>
          <h2 className="py-4">Players</h2>
          <ul className="space-y-4">
            {team.players.map((player) => (
              <li key={player.slug} className="space-y-4">
                <article>
                  <h3 className="font-bold text-2xl">
                    {player.name}, {player.position}
                  </h3>
                  <p className="text-md">#{player.number}</p>
                  <p className="text-sm italic">Height: {player.height}</p>
                  <p className="text-sm italic">Weight: {player.weight}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { teams } = await getTeams()

  return {
    paths: teams.map(({ slug }: { slug: any }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const { team } = await getTeamBySlug(slug)

  return {
    props: {
      team,
    },
  }
}
