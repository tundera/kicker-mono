import { PropsWithServerCache } from '@gqless/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import NextImage from 'next/image'
import NextLink from 'next/link'
import DarkModeToggle from 'src/components/dark-mode-toggle'
import { Player, prepareReactRender, Team, useHydrateCache } from 'src/gqless'
import { getTeamBySlug, getTeams } from 'src/lib/teams'

type TeamPageProps = PropsWithServerCache<{
  team: Team & {
    players: Player[]
  }
}>

export default function TeamPage({ cacheSnapshot, team }: TeamPageProps) {
  useHydrateCache({
    cacheSnapshot,

    // If it should refetch everything after the component is mounted
    // By default 'shouldRefetch' is `false` (You can change it in the 'defaults' option)
    shouldRefetch: false,
  })

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
        <section className="flex-col text-center py-4">
          <h2>
            {team.city} {team.name}
          </h2>
          <p>Established {team.established}</p>
          <p>
            2019-2020 Record: {team.wins} - {team.losses}
          </p>
          <NextImage
            src={team.logo as string}
            width="250px"
            height="auto"
            layout="responsive"
            objectFit="contain"
            alt={`${team.name} team logo`}
          />
        </section>

        <section>
          <h2 className="py-4">Players</h2>
          <ul className="space-y-4">
            {team.players.map((player) => (
              <li key={player.id} className="space-y-4">
                <article>
                  <h3 className="font-bold text-2xl">
                    {player.name}, {player.position}
                  </h3>
                  <p className="text-md">#{player?.number}</p>
                  <p className="text-sm italic">Height: {player?.height}</p>
                  <p className="text-sm italic">Weight: {player?.weight}</p>
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

export const getStaticProps: GetStaticProps<TeamPageProps> = async ({ params }) => {
  const slug = params?.slug as string

  const { team } = await getTeamBySlug(slug)
  const { cacheSnapshot } = await prepareReactRender(<TeamPage team={team} />)

  return {
    props: {
      cacheSnapshot,
      team,
    },
  }
}
