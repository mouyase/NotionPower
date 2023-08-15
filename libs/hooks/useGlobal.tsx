import React, { useContext } from 'react'

const Global = React.createContext({})

const useGlobal = () => {
  return useContext(Global)
}

export const GlobalContext: React.FC<any> = ({ children }) => {
  return <Global.Provider value={{}}>{children}</Global.Provider>
}

export default useGlobal
