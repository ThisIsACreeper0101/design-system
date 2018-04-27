import Component from '@ember/component';

export default Component.extend({
	attributeBindings: ['disabled', 'href'],
	classNames: 'wds-button',
	classNameBindings: ['secondary:wds-is-secondary'],
	tagName: 'button',
	disabled: false,

	init() {
		this._super(...arguments);

		if (this.get('href')) {
			this.set('tagName', 'a');
		}
	}
});