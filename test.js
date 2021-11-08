
const sum = require('./sum');
const subtract = require('./subtract');
const cloneArray = require('./cloneArray');
const factory = require('./factory');


// sum test
test('properly adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  
})

// duplicate array test

test('properly clones array', () => {
    const array = [1, 2, 3]

    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)

})

// subtract array test

test('properly subtract two numbers', () => {
    expect(subtract(5, 4)).toBe(1)

})

// factory

test('properly make the construction of a full name', () => {
    expect(factory("Lucas", "Newlands")).toBe("Lucas Newlands")
})