import { Command as OclifCommand } from '@oclif/command'
import Enquirer from 'enquirer'

import { workspaceRoot, getProjectWorkspaces, getProjectExamples } from './utils/workspaces'

export abstract class Command extends OclifCommand {
  protected enquirer = new Enquirer()
  protected project = {
    root: workspaceRoot,
    workspaces: getProjectWorkspaces(),
    examples: getProjectExamples(),
  }
}
