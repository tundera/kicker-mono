#!/usr/bin/env ts-node-script

import nba from 'nba'

const logTeamData = async (teamId: number) => {
  const teamData = await nba.stats.teamInfoCommon({ TeamID: teamId })

  console.dir(teamData, {colors: true, depth: null});
};

const main = async () => {
  try {
    await logTeamData(1610612763);
  } catch (err) {
    throw new Error(err);
  }
};

main().finally(() => {
  console.log("Done! 🥳");
});
