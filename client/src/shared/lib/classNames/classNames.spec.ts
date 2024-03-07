import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
	test('with only first params ', () => {
		expect(classNames('someClass')).toBe('someClass');
	});

	test('with only first params ', () => {
		const expectResult = 'someClass class1 class2';
		expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expectResult);
	});

	test('with only first params ', () => {
		const expectResult = 'someClass class1 class2 hovered';
		expect(
			classNames('someClass', { hovered: true, hide: false }, ['class1', 'class2'])
		).toBe(expectResult);
	});
});
