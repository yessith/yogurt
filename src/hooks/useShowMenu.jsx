import { useState } from 'react'

export function useShowMenu() {
  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }

  return { active, showMenu }
}
