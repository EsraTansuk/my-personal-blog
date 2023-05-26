import { IconDefinition, faHouse } from '@fortawesome/free-solid-svg-icons'
import React, { PropsWithChildren } from 'react'

interface TabProps extends PropsWithChildren {
  title: IconDefinition
}

export const Tab: React.FC<TabProps> = ({ children, title }) => {
  return <div>
    {children}
    </div>
}

