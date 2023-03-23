// Jest tests for the t9.js module
//
// Run the tests with the command:
// npm test
//

const t9 = require('../t9');

describe('t9', () => {
  // Dictonary of foods you would find sold in a grocery store
  const dictionary = [
    'Fudge Cookies',
    'Tortilla Chips',
    'Peanut Butter',
    'Peanut Butter Cups',
    'Watermelon',
    'Red Velvet Cake',
    'Peanut Butter and Jelly',
    'Chicken Nuggets',
    'Chicken Noodle Soup',
    'Chicken Pot Pie',
    'Beef Stew',
    'Beef Jerky',
    'Tacos',
    'Burritos',
    'Taco Salad',
    'Dinner Rolls',
    'Bread',
    'Breadsticks',
    'Pasta',
    'Pasta Salad',
    'Pasta Sauce',
    'Tostada Shell',
    'Caramel Puffs',
    'Carrots',
    'Pancake',
  ];

  test('should return an object with a getWords method', () => {
    const t9Obj = t9(dictionary);
    expect(typeof t9Obj).toBe('object');
    expect(typeof t9Obj.getWords).toBe('function');
  });

  test('should return an empty array when no words match the input', () => {
    const t9Obj = t9(dictionary);
    expect(t9Obj.getWords('1')).toEqual([]);
  });

  test('should return an empty array when 0 is passed in', () => {
    const t9Obj = t9(dictionary);
    expect(t9Obj.getWords('0')).toEqual([]);
  });

  test('should return an array of words that match the input off by one', () => {
    const t9Obj = t9(dictionary);
    expect(t9Obj.getWords('384')).toEqual([]);
  });

  test('should return an array of words that match Chic', () => {
    const t9Obj = t9(dictionary);
    expect(t9Obj.getWords('2442')).toEqual([
      'Chicken Nuggets',
      'Chicken Noodle Soup',
      'Chicken Pot Pie',
    ]);
  });

  test('should return an array of words that match Tort', () => {
    const t9Obj = t9(dictionary);
    expect(t9Obj.getWords('8678')).toEqual(['Tortilla Chips', 'Tostada Shell']);
  });

  test('should return an array of words that match red', () => {
    const t9Obj = t9(dictionary);
    expect(t9Obj.getWords('733')).toEqual(['Red Velvet Cake']);
  });

  test('should return an array of words that match Cake', () => {
    const t9Obj = t9(dictionary);
    expect(t9Obj.getWords('225')).toEqual(['Red Velvet Cake', 'Pancake']);
  });
});
