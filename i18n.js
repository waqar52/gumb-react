const NextI18Next = require('next-i18next').default;
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');
let ReactPostprocessor = require('i18next-react-postprocessor');

if (typeof window !== 'undefined') {
    ReactPostprocessor = require('i18next-react-postprocessor');
    ReactPostprocessor = new ReactPostprocessor.default();
} else if (typeof window === 'undefined') {
    ReactPostprocessor = new ReactPostprocessor();
}

module.exports = new NextI18Next({
    defaultLanguage: 'de-CH',
    otherLanguages: ['en-US'],
    fallbackLng: 'de-CH',
    // localeSubpaths,
    keySeparator: '.',
    debug: false,
    defaultNS: 'common',
    localeStructure: '{{lng}}/{{ns}}',
    shallowRender: true,
    postProcess: ['reactPostprocessor'],
    use: [ReactPostprocessor],
    localePath: path.resolve('./public/locales')
});