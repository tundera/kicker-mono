import CypressLogo from 'assets/logos/cypress.svg'
import EslintLogo from 'assets/logos/eslint.svg'
import FormspreeLogo from 'assets/logos/formspree.svg'
import JestLogo from 'assets/logos/jest.svg'
import MdxLogo from 'assets/logos/mdx.svg'
import PrismaLogo from 'assets/logos/prisma.svg'
import ReactQueryLogo from 'assets/logos/react-query.svg'
import TypeScriptLogo from 'assets/logos/typescript.svg'
import VsCodeLogo from 'assets/logos/vscode.svg'

export const mainFeatures = [
  {
    title: 'TypeScript',
    icon: TypeScriptLogo,
    description:
      'Client and server code both written in TypeScript, so you get full type safety across your stack. Code hinting and autocomplete in your IDE for top-notch developer experience.',
  },
  {
    title: 'Jest Framework',
    icon: JestLogo,
    description:
      'Write unit tests for your components using the Jest Framework. Also set up up to work with React Testing Library for writing integration tests.',
  },
  {
    title: 'ESLint and Prettier',
    icon: EslintLogo,
    description:
      'Code linting and formatting made simple with ESLint and Prettier integration. Catch errors in development and keep your code looking fresh.',
  },
  {
    title: 'Cypress',
    icon: CypressLogo,
    description:
      'Run end-to-end and integration tests with Cypress to ensure functionality and user experience.',
  },
  {
    title: 'Prisma',
    icon: PrismaLogo,
    description:
      'Connect to your PostgreSQL database instance, run migrations, and execute CRUD operations on your data during builds and at runtime.',
  },
  {
    title: 'MDX',
    icon: MdxLogo,
    description:
      'Share interactive content by combining JSX and Markdown. Easily integrate React components in your Markdown using the Next MDX package.',
  },
  {
    title: 'React Query',
    icon: ReactQueryLogo,
    description:
      'Query, update, and cache data using React Query. Works seamlessly with GraphQL for instant data fetching on both the server and client.',
  },
  {
    title: 'Formspree',
    icon: FormspreeLogo,
    description:
      'Take away the overhead of creating React forms with the Formspree CLI. Instantly integrate your forms and view results in your Formspree dashboard online.',
  },
  {
    title: 'Debugging',
    icon: VsCodeLogo,
    description:
      'Both client-side and server-side debugging set up for VSCode. Just set a breakpoint in your editor and find your errors. Simple as that.',
  },
]
