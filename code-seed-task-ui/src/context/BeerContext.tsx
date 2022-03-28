import axios, { AxiosResponse } from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import useApi from '../core/hooks/useApi';
import { BeerInterface } from '../core/interfaces/beer.interface';

export type BeerContextType = {
  beers: BeerInterface[];
  addBeer: (Beer: BeerInterface) => void;
  updateBeer: (beer: BeerInterface) => void;
  deleteBeer: (id: number) => void;
};

const BeerContext = React.createContext<BeerContextType | null>(null);

export const useBeerContext = () => {
  const context = useContext(BeerContext);
  if (!context) {
    throw new Error(`useBeer must be used within a BeerProvider`);
  }
  return context;
};

export const BeerProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [beers, setBeers] = useState<BeerInterface[]>([]);

  const { response } = useApi({
    method: 'GET',
    url: `http://localhost:3001/beers`,
  });

  useEffect(() => {
    if (response) {
      const fetchedBeers: BeerInterface[] = response.data;
      setBeers(fetchedBeers);
    }
  }, [response]);

  const addBeer = async (beer: BeerInterface): Promise<void> => {
    try {
      const result: AxiosResponse = await axios.request({
        method: 'POST',
        url: `http://localhost:3001/beer`,
        data: beer,
      });
      if (result.status === 200) {
        if (beers.length > 5) {
          return;
        } else {
          const newBeers: BeerInterface[] = [...beers, { ...beer }];
          setBeers(newBeers);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBeer = async (beerId: number): Promise<void> => {
    try {
      const result: AxiosResponse = await axios.request({
        method: 'DELETE',
        url: `http://localhost:3001/beer/${beerId}`,
      });
      if (result.status === 202) {
        setBeers(beers.filter((beer) => beer.id !== beerId));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateBeer = async (beer: BeerInterface): Promise<void> => {
    try {
      const result: AxiosResponse = await axios.request({
        method: 'PUT',
        url: `http://localhost:3001/beer`,
        data: beer,
      });

      if (result.status === 200) {
        const oldBeers = beers.filter((item) => item.id !== beer.id);
        setBeers([...oldBeers, { ...beer }]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const value = { beers, addBeer, deleteBeer, updateBeer };

  return <BeerContext.Provider value={value}> {children}</BeerContext.Provider>;
};

export default BeerProvider;
