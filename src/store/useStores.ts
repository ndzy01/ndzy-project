import { useContext } from 'react';
import { StoreContext } from '.';

export const useStores = () => {
  const { state } = useContext(StoreContext);

  return state;
};
