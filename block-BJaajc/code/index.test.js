const {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
} = require("./index");

getFullName("arya", "stark");

test("name should be arya stark", () => {
  expect(getFullName("arya", "stark")).toBe("arya stark");
});
test("name should be Jhon Snow", () => {
  expect(getFullName("Jhon", "Snow")).toBe("Jhon Snow");
});
test("name should be Cersi Lanistor", () => {
  expect(getFullName("Cersi", "Lanistor")).toBe("Cersi Lanistor");
});
test("name should not be Tyrion Lanistor", () => {
  expect(getFullName("arya", "stark")).not.toBe("Tyrion Lanistor");
});
test("name should not be arya snow", () => {
  expect(getFullName("arya", "snow")).not.toBe("arya stark");
});
test("name should not be Jhon Stark", () => {
  expect(getFullName("Jhon", "Stark")).not.toBe("Jhon Snow");
});

test("545 is palindrome", () => {
  expect(isPalindrome(545)).toBeTruthy();
});
test("16461 is palindrome", () => {
  expect(isPalindrome(16461)).toBeTruthy();
});
test("555 is palindrome", () => {
  expect(isPalindrome(555)).toBeTruthy();
});
test("54 is not a palindrome", () => {
  expect(isPalindrome(54)).not.toBeTruthy();
});
test("546839 is not a palindrome", () => {
  expect(isPalindrome(546839)).not.toBeTruthy();
});
test("54457 is not a palindrome", () => {
  expect(isPalindrome(54457)).not.toBeTruthy();
});

test("circumference of cirle with radius 3 is 18.84", () => {
  expect(getCircumfrence(3)).toBe("The circumference is 18.84");
});
test("circumference of cirle with radius 9 is 56.52", () => {
  expect(getCircumfrence(9)).toBe("The circumference is 56.52");
});
test("circumference of cirle with radius 1 is 6.28", () => {
  expect(getCircumfrence(1)).toBe("The circumference is 6.28");
});
test("circumference of cirle with radius 3 is not 16.84", () => {
  expect(getCircumfrence(3)).not.toBe("The circumference is 16.84");
});
test("circumference of cirle with radius 9 is not 58.52", () => {
  expect(getCircumfrence(9)).not.toBe("The circumference is 58.52");
});
test("circumference of cirle with radius 1 is not 3.18", () => {
  expect(getCircumfrence(1)).not.toBe("The circumference is 3.18");
});

test("area of cirle with radius 1 is 3.14", () => {
  expect(getArea(1)).toBe("The area is 3.14");
});
test("area of cirle with radius 1 is 28.259999999999998", () => {
  expect(getArea(3)).toBe("The area is 28.259999999999998");
});
test("area of cirle with radius 10 is 314", () => {
  expect(getArea(10)).toBe("The area is 314");
});
test("area of cirle with radius 1 is not 3.4", () => {
  expect(getArea(1)).not.toBe("The area is 3.4");
});
test("area of cirle with radius 4 is not 51.98", () => {
  expect(getArea(4)).not.toBe("The area is 51.98");
});
test("area of cirle with radius 20 is not 1239", () => {
  expect(getArea(20)).not.toBe("The area is 1239");
});
