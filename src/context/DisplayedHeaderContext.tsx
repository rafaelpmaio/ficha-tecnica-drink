import React, { useState } from "react";
import { IHeader } from "shared/interfaces/IHeader";
import drinkLogo from 'assets/images/drink-logo.png';

interface DisplayedHeaderContextProps {
  headerInfos: IHeader,
  setHeaderInfos: (header: IHeader) => void
}

export const DisplayedHeaderContext = React.createContext({} as DisplayedHeaderContextProps);

const defaultHeader: IHeader = {
  title: 'COLLECTIONS',
  image: drinkLogo
}

export const DislpayedHeaderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerInfos, setHeaderInfos] = useState<IHeader>(defaultHeader);

  return (
    <DisplayedHeaderContext.Provider value={{headerInfos, setHeaderInfos}} >
      {children}
    </DisplayedHeaderContext.Provider>
  )
} 