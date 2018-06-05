import {empty} from '@ember/object/computed';
import {inject as service} from '@ember/service';

import Component from '@ember/component';

export default Component.extend({
	fetch: service(),

	classNames: 'wds-global-navigation',
	classNameBindings: [
		'searchIsActive:wds-search-is-active',
		'searchIsAlwaysVisible:wds-search-is-always-visible',
		'model.partner_slot:wds-has-partner-slot'
	],

	searchIsActive: false,

	searchIsAlwaysVisible: empty('model.fandom_overview'),

	init() {
		this._super(...arguments);

		this.set('fetch.servicesDomain', this.get('model.services_domain'));
	},

	actions: {
		activateSearch() {
			this.set('searchIsActive', true);
		},

		deactivateSearch() {
			this.set('searchIsActive', false);
		},

		onSearchQueryChanged(query) {
			return [
					{
						text: `${query} One`,
						uri: '#'
					},
					{
						text: `${query} Two`,
						uri: '#'
					},
					{
						text: `${query} Three`,
						uri: '#'
					}
				];
		}
	}
});
