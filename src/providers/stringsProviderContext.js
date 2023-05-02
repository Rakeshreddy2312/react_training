import React, { createContext, useEffect, useState } from 'react';
import { EnglishStrings } from 'resources/strings/en';
import { SwedishStrings } from 'resources/strings/swedish';

const StringsContext = createContext();
const StringsProvider = ({ children }) => {
  const [stringsLanguage, setStringsLanguage] = useState();
  useEffect(() => {
    const localLan = localStorage.getItem('language');
    setStringsLanguage(localLan);
  }, [stringsLanguage]);

  const strings = () => {
    switch (stringsLanguage) {
      case 'english':
        localStorage.setItem('language', stringsLanguage);
        return EnglishStrings;

      case 'swedish':
        localStorage.setItem('language', stringsLanguage);
        return SwedishStrings;

      default:
        return EnglishStrings;
    }
  };
  const value = {
    stringsLanguage,
    setStringsLanguage,
    strings: strings(),
  };
  return (
    <StringsContext.Provider value={value}>{children}</StringsContext.Provider>
  );
};
export { StringsProvider, StringsContext };
