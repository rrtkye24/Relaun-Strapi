import AuthLogo from './extensions/logo.png';
import MenuLogo from './extensions/logo.png';
import favicon from './extensions/logo.png';
const config = {
  auth: {
    logo : AuthLogo
  },
  menu: {
    logo : MenuLogo
  },
  head: {
    favicon: favicon,
  },
  theme: {
    colors: {
      primary100: '#D4F1F4', //button
      primary200: '#68BBE3', //background
      primary500: '#0E86D4', 
      primary600: '#055C9D', //text
      primary700: '#003060', //border
      danger700: '#b72b1a'
     }
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
