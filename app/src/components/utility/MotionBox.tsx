import type { BoxProps } from '@chakra-ui/react'
import { Box, forwardRef } from '@chakra-ui/react'
import type { MotionProps } from 'framer-motion'
import { isValidMotionProp, m } from 'framer-motion'

type CombinedProps = BoxProps & MotionProps

export const MotionBox = m<CombinedProps>(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
    )
    return <Box ref={ref} {...chakraProps} />
  }),
)
