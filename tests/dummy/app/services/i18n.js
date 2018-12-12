import Service from '@ember/service';
import i18n from 'npm:i18next';
import translationsDe from '../../../../i18n/de/design-system';
import translationsEn from '../../../../i18n/en/design-system';
import translationsEs from '../../../../i18n/es/design-system';
import translationsFi from '../../../../i18n/fi/design-system';
import translationsFr from '../../../../i18n/fr/design-system';
import translationsIt from '../../../../i18n/it/design-system';
import translationsJa from '../../../../i18n/ja/design-system';
import translationsKo from '../../../../i18n/ko/design-system';
import translationsNl from '../../../../i18n/nl/design-system';
import translationsPl from '../../../../i18n/pl/design-system';
import translationsPt from '../../../../i18n/pt/design-system';
import translationsRu from '../../../../i18n/ru/design-system';
import translationsVi from '../../../../i18n/vi/design-system';
import translationsZh from '../../../../i18n/zh/design-system';
import translationsZhHant from '../../../../i18n/zh-hant/design-system';

const allTranslations = {
	de: translationsDe,
	en: translationsEn,
	es: translationsEs,
	fi: translationsFi,
	fr: translationsFr,
	it: translationsIt,
	ja: translationsJa,
	ko: translationsKo,
	nl: translationsNl,
	pl: translationsPl,
	pt: translationsPt,
	ru: translationsRu,
	vi: translationsVi,
	zh: translationsZh,
	'zh-hans': translationsZh,
	'zh-tw': translationsZhHant,
	'zh-hant': translationsZhHant,
	'zh-hk': translationsZhHant
};

export default Service.extend({
	i18nextInstance: null,

	initialize(language) {
		let translations = {};

		[language, language.split('-')[0], 'en'].some((lang) => {
			if (allTranslations[lang]) {
				translations['design-system'] = allTranslations[lang];
				return true;
			}

			return false;
		});

		const i18nextInstance = i18n.createInstance().init({
			fallbackLng: 'en',
			lng: language,
			lowerCaseLng: true,
			defaultNS: 'main',
			interpolation: {
				escapeValue: false,
				prefix: '{',
				suffix: '}'
			},
			resources: {
				[language]: translations
			}
		});

		this.set('i18nextInstance', i18nextInstance);
	},

	t() {
		return this.get('i18nextInstance').t(...arguments);
	}
});
