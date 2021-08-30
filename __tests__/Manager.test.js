const Manager = require('../lib/manager');

describe("Manager", () => {
    test("Can instantiate Manager instance", () => {
        const e = new Manager();
        expect(typeof e).toBe("object");
    });

    test("Can get role via getRole()", () => {
        const value = "Manager";
        const e = new Manager(value);
        expect(e.getRole()).toBe(value);
    });
});