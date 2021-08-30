const Employee = require('../lib/employee');

describe("Employee", () => {
    test("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof e).toBe("object");
    });

    test("Can set name via constructor arguments", () => {
        const name = "Alice";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    test("Can set id using the constructor", () => {
        const value = 100;
        const e = new Employee("value", value);
        expect(e.id).toBe(value);
    });

    test("Can set email using the constructor", () => {
        const value = "test@test.com";
        const e = new Employee("email", 1, value);
    });

    test("Can get name via getName()", () => {
        const value = "Alice";
        const e = new Employee(value);
        expect(e.getName()).toBe(value);
    });

    test("Can get role via getRole()", () => {
        const value = "Employee";
        const e = new Employee(value);
        expect(e.getRole()).toBe(value);
    });
});