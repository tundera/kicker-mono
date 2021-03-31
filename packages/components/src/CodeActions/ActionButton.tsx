import { IconButton, Tooltip } from '@chakra-ui/react'
import type { FC, ReactElement, ReactEventHandler } from 'react'

interface Props {
  color?: string
  icon: ReactElement
  label: string
  value?: string
  onClick: ReactEventHandler
}

export const ActionButton: FC<Props> = ({ color, icon, label, value, onClick }) => {
  return (
    <Tooltip hasArrow placement="top" label={label}>
      <IconButton
        fontSize="xl"
        color={color}
        icon={icon}
        aria-label={value ?? 'Action button'}
        variant="ghost"
        rounded="full"
        onClick={onClick}
        _focus={{ boxShadow: 'none' }}
      />
    </Tooltip>
  )
}

export type { Props as ActionButtonProps }
