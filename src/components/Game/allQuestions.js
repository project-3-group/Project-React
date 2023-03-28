import DefaultQus from "./DefaultQuestiones";
import FlagQus from './FlagsQuestiones';

export async function createCapitalQuestion( allCountryData ) {
  const country = allCountryData[Math.floor(Math.random() * allCountryData.length)];

  const question = `What country's capital city is ${country.capital[0]}?`;
  const answers = [country];

  const Component = <DefaultQus question={question}/>

  return {answers, Component };
}

export async function createLanguageQuestion( allCountryData ) {
  // get random country
  const country = allCountryData[Math.floor(Math.random() * allCountryData.length)];

  let countriesWithLanguage = [];
  let officialLanguages = Object.values(country.languages);
  let language = officialLanguages[0];

  for (let i = 0; i < allCountryData.length; i++) {
    if (allCountryData[i].languages) {
      const currCountryLanguages = Object.values(allCountryData[i].languages);
      if (currCountryLanguages.includes(language)) {
        countriesWithLanguage.push(allCountryData[i]);
      }
    }
  }
  const question = `Select one country that has ${language} as its official language.`;

  const Component = <DefaultQus question={question}/>

  return {answers: countriesWithLanguage, Component };
}

export async function createFlagsQuestion( allCountryData ) {
  const country = allCountryData[Math.floor(Math.random() * allCountryData.length)];

  const answers = [country];

  const Component = <FlagQus flag={country.flags.png}/>

  return {answers, Component };
}

const allQuestions = [createCapitalQuestion,createLanguageQuestion,createFlagsQuestion]

export default allQuestions;