import React, {useState, useEffect,createContext} from 'react';

import {housesData} from '../data';
import DateDrop from './DateDrop';

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  


  
   
  const [houses, setHouses] = useState(housesData)
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const allCountries = houses.map((house)=>{
      return house.country;
    });
    console.log(allCountries);
    const uniqueCountries = ['Location (any)', ... new Set(allCountries)]
    

     setCountries(uniqueCountries)
}, [])

useEffect(()=>{
  const allProperties = houses.map((house)=>{
    return house.type;
  });



  const uniqueProperties = ['Location (any)', ... new Set(allProperties)]
  

   setProperties(uniqueProperties)
}, [])

   // remove duplicates

   const handleClick = ()=>{
      const isDefault = (str)=>{
        return str.split('').includes('(any)');
      }

      console.log(parseInt(price.split(' ')[0]));

      const minPrice = parseInt(price.split(' ')[0]);

      const maxPrice = parseInt(price.split(' ')[2]);
      console.log(maxPrice);

      const newHouses = housesData.filter((house)=>{
        console.log(house.price)
        const housePrice = parseInt(house.price)

        if(house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
        if(isDefault(country) && isDefault(property) && isDefault(price)){
          return house;
         }
         if(!isDefault(country) && isDefault(property) && isDefault(price)){
          return house.country === country;
         }
      })
       

      setTimeout(()=>{
        return newHouses.length < 1 ? setHouses([]): setHouses(newHouses);
        setLoading(false);

      }, 1000)
       
      

      // get second value of price which is the maximum price and parse it to numbers
  }

  return (<HouseContext.Provider value={{
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading,
    handleClick,
    loading


  }}>{children}</HouseContext.Provider>);
};

export default HouseContextProvider;
