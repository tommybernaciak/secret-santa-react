import { createContext, useState, FC, PropsWithChildren, Dispatch } from 'react';

export type Page = 'start' | 'form' | 'result';

export interface IPagesProvider {
  page: Page;
  setPage: Dispatch<React.SetStateAction<Page>>;
}

export const usePages = (): IPagesProvider => {
  const [page, setPage] = useState<Page>('start');

  return { page, setPage };
};

export const PageContext = createContext<IPagesProvider>({
  page: 'start',
  setPage: () => {
    return;
  }
});

export const PageContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const pageProvider: IPagesProvider = usePages();
  return <PageContext.Provider value={pageProvider}>{children}</PageContext.Provider>;
};
