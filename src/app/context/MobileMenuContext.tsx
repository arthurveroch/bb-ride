'use client'

import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

const MobileMenuContext = createContext<Values | null>(null)

type Props = {
  children: React.ReactNode
}

type Values = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const MobileMenuContextProvider = ({ children }: Props) => {
  const [open, setOpen] = useState<NonNullable<boolean>>(false)

  return (
    <MobileMenuContext.Provider value={{ open, setOpen }}>{children}</MobileMenuContext.Provider>
  )
}

export const useMenu = () => {
  const context = useContext(MobileMenuContext)

  if (!context) {
    throw new Error('useMenu doit être utilisé dans MobileMenuContextProvider')
  }
  return context
}
