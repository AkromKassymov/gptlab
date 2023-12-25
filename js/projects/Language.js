import { textsEn } from './texts.js';
import { textsRu } from './texts.js';
import { textsKz } from './texts.js';

const languages = ['en', 'ru'];
const buttons = languages.map((language) => {
  return { element: document.getElementById(language), language: language };
});
const currentLanguage = localStorage.getItem('language') || 'en';

const setLanguage = (language) => {
  let spans = document.getElementsByTagName('span');
  spans = Array.from(spans).filter((span) => !span.className);
  const texts =
    language === 'en' ? textsEn : language === 'kz' ? textsKz : textsRu;
  spans.forEach((span, index) => {
    span.innerHTML = texts[index];
  });

  localStorage.setItem('language', language);
};

buttons.forEach((button) => {
  button.element.addEventListener('click', () => {
    setLanguage(button.language);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLanguage);
});
