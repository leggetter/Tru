import { useRef } from 'react';
import { regions, callingCountries } from 'country-data';
const useTransformCountryCodes = () => {
  const NorthAmericanCallingCodes = useRef<
    Array<{ calling_code: string; country_code: string }>
  >([{ calling_code: '', country_code: '' }]);
  const WesternEuropeCallingCodes = useRef<
    Array<{ calling_code: string; country_code: string }>
  >([{ calling_code: '', country_code: '' }]);
  const NothernEuropeCallingCodes = useRef<
    Array<{ calling_code: string; country_code: string }>
  >([{ calling_code: '', country_code: '' }]);
  const SouthernEuropeCallingCodes = useRef<
    Array<{ calling_code: string; country_code: string }>
  >([{ calling_code: '', country_code: '' }]);
  for (const callingCountry of callingCountries.all) {
    for (const el of regions.southernEurope.countries) {
      if (el === callingCountry.alpha2) {
        const calling_code = callingCountry.countryCallingCodes[0].split(
          ' ',
        )[0];
        // immutably overwrite country calling code
        const newSouthernEuropeCallingCode = [
          ...SouthernEuropeCallingCodes.current,
          { calling_code, country_code: callingCountry.alpha3 },
        ];

        SouthernEuropeCallingCodes.current = newSouthernEuropeCallingCode;
      }
    }
    for (const el of regions.northernEurope.countries) {
      if (el === callingCountry.alpha2) {
        const calling_code = callingCountry.countryCallingCodes[0].split(
          ' ',
        )[0];
        // immutably overwrite country calling code
        const newNothernEuropeCallingCode = [
          ...NothernEuropeCallingCodes.current,
          { calling_code, country_code: callingCountry.alpha3 },
        ];

        NothernEuropeCallingCodes.current = newNothernEuropeCallingCode;
      }
    }
    for (const el of regions.westernEurope.countries) {
      if (el === callingCountry.alpha2) {
        const calling_code = callingCountry.countryCallingCodes[0].split(
          ' ',
        )[0];

        // immutably overwrite country calling code
        const newWesternEuropeCallingCode = [
          ...WesternEuropeCallingCodes.current,
          { calling_code, country_code: callingCountry.alpha3 },
        ];

        WesternEuropeCallingCodes.current = newWesternEuropeCallingCode;
      }
    }
    for (const el of regions.northernAmerica.countries) {
      if (el === callingCountry.alpha2) {
        const calling_code = callingCountry.countryCallingCodes[0].split(
          ' ',
        )[0];
        // immutably overwrite country calling code
        const newNorthAmericanCallingCode = [
          ...NorthAmericanCallingCodes.current,
          { calling_code, country_code: callingCountry.alpha3 },
        ];

        NorthAmericanCallingCodes.current = newNorthAmericanCallingCode;
      }
    }
  }
  // remove initial state from regions calling code

  const lastIndex = NorthAmericanCallingCodes.current.length - 1;
  NorthAmericanCallingCodes.current = NorthAmericanCallingCodes.current.splice(
    1,
    lastIndex,
  );
  WesternEuropeCallingCodes.current = WesternEuropeCallingCodes.current.splice(
    1,
    lastIndex,
  );
  NothernEuropeCallingCodes.current = NothernEuropeCallingCodes.current.splice(
    1,
    lastIndex,
  );
  SouthernEuropeCallingCodes.current = SouthernEuropeCallingCodes.current.splice(
    1,
    lastIndex,
  );
  return [
    ...NorthAmericanCallingCodes.current,
    ...WesternEuropeCallingCodes.current,
    ...NothernEuropeCallingCodes.current,
    ...SouthernEuropeCallingCodes.current,
  ];
};
export default useTransformCountryCodes;