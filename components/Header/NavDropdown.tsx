'use client'

import { Dropdown } from '../radix/Dropdown'

type CommunityDropdownItems = {
  title: string
  titleHoverColor: string
  text?: string
  linkPath?: string
}

const communityDropdownItems: CommunityDropdownItems[] = [
  {
    title: 'Newbies',
    titleHoverColor: 'group-data-[highlighted]:text-purple-400',
    text: 'פעם ראשונה בקוד פתוח',
    linkPath: '/newbies',
  },
  {
    title: 'Members',
    titleHoverColor: 'group-data-[highlighted]:text-green-200',
    text: 'מי שכבר התנסה בקוד פתוח',
    linkPath: '/members',
  },
  {
    title: 'Maintainers',
    titleHoverColor: 'group-data-[highlighted]:text-pink-500',
    text: 'בעלי פרויקטים שרוצים להצטרף',
    linkPath: '/maintainers',
  },
]

export const NavDropdown = () => {
  return (
    <Dropdown
      field={{
        label: 'קהילה',
        iconPath: '/images/polygon_white.svg',
        darkIconPath: '/images/polygon_dark.svg',
        alt: 'polygon',
        width: 10,
        height: 10,
      }}
      content={{
        align: 'start',
        sideOffset: 32,
        alignOffset: -21,
      }}
      options={communityDropdownItems}
    />
  )
}
