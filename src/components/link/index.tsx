import { FC } from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

interface IProps extends LinkProps {
  to: string
}

const Link: FC<IProps> = ({ to, children, ...props }) => {
  return (
    <RouterLink to={to} {...props}>
      {children}
    </RouterLink>
  )
}

export default Link
