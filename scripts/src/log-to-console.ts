#!/usr/bin/env ts-node-script

const logToConsole = async () => {
  console.log('Logged to console')
}

const main = async () => {
  try {
    await logToConsole()
  } catch (err) {
    throw new Error(err)
  }
}

main().finally(() => {
  console.log('Done! 🥳')
})
