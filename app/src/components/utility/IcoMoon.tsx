import { chakra } from '@chakra-ui/react'
import IcomoonReact from 'icomoon-react'
import { FC } from 'react'
import iconSet from 'selection.json'

const IcoMoon: FC<{
  color?: string
  size: string | number
  icon: string
  className?: string
}> = (props) => {
  const { color, size = '100%', icon, className = '' } = props
  return (
    <IcomoonReact className={className} iconSet={iconSet} color={color} size={size} icon={icon} />
  )
}

const Icon = chakra(IcoMoon)

export default Icon
