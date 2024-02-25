import howHealthy from '../index'

test('checks to see if its healthy', () => {
	let received = 'healthy';
	let input = {name: 'Маг', health: 90};
	expect(received).toBe(howHealthy(input));
})

test('checks to see if its wounded', () => {
	let received = 'wounded';
	let input = {name: 'Маг', health: 30};
	expect(received).toBe(howHealthy(input));
})

test('checks to see if its critical', () => {
	let received = 'critical';
	let input = {name: 'Маг', health: 10};
	expect(received).toBe(howHealthy(input));
})