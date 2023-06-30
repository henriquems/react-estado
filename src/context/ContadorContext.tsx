import { createContext } from "react";

const ContadorContext = createContext({} as any);

export function ContadorProvider(props: any) {
  return (
    <ContadorContext.Provider
      value={{
        numero: 30,
      }}
    >
      {props.children}
    </ContadorContext.Provider>
  );
}

export default ContadorContext;
