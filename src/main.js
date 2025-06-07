import { samples } from './samples.js';

const translations = {
  en: {
    title: 'Code Learning Hub',
    intro: 'Select a language to see a Hello World example.',
    button: 'Translate to Thai'
  },
  th: {
    title: 'ศูนย์เรียนรู้การเขียนโค้ด',
    intro: 'เลือกภาษาเพื่อดูตัวอย่าง Hello World',
    button: 'แปลเป็นภาษาอังกฤษ'
  }
};

const langSelect = document.getElementById('language-select');
const codeExample = document.getElementById('code-example');
const title = document.getElementById('title');
const intro = document.getElementById('intro');
const translateBtn = document.getElementById('translate-btn');

function populateLanguages() {
  Object.keys(samples).forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = key;
    langSelect.appendChild(opt);
  });
}

function updateLanguage() {
  codeExample.textContent = samples[langSelect.value];
}

function setLocale(locale) {
  const t = translations[locale];
  title.textContent = t.title;
  intro.textContent = t.intro;
  translateBtn.textContent = t.button;
  translateBtn.dataset.locale = locale;
}

langSelect.addEventListener('change', updateLanguage);
translateBtn.addEventListener('click', () => {
  const newLocale = translateBtn.dataset.locale === 'en' ? 'th' : 'en';
  setLocale(newLocale);
});

const browserLang = navigator.language.startsWith('th') ? 'th' : 'en';
setLocale(browserLang);
populateLanguages();
langSelect.value = 'python';
updateLanguage();
