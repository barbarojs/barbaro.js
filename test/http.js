import {http} from '../src/libs';

/*global sinon,expect*/

describe('Http', () => {
	let scratch;

	before(() => {});

	beforeEach(() => {});

	after(() => {});

	describe('request', () => {
		it('should interpolate', () => {
			let request = new http('/test/:id');
			let {URI, options} = request.prepare('GET', {
				id: 123,
				other: 1
			});
			console.log(URI);
			expect(URI).to.equal('/test/123?other=1');
		});

	});
});
