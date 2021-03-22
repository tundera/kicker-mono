import { mount } from '@cypress/react'
import { CtaWithDescription } from '@tunderadev/components'

describe('CTA w/ Description component (CtaWithDescription.tsx)', () => {
  it('works', () => {
    mount(
      <CtaWithDescription
        title="Kicker Monorepo"
        subtitle="E2E testing with cypress"
        description="Test everything in your monorepo"
        link={{ href: '/', label: 'Learn more' }}
      />,
    )
  })

  it('findByText', () => {
    cy.findByText('Learn more')
  })
})
