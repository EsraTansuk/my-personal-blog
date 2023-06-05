import { IconDefinition, faHouse } from '@fortawesome/free-solid-svg-icons'
import React, { PropsWithChildren } from 'react'

interface TabProps extends PropsWithChildren {
  icon: IconDefinition
  title: string
}

export const Tab: React.FC<TabProps> = ({ children, title, icon }) => {
  return <>
    {children}
    </>
}

