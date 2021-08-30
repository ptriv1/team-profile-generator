const Engineer = require('../lib/engineer');
const engineer = require('../lib/engineer');

describe("Engineer", () => {
    test("Can instantiate Engineer instance", () => {
        const e = new Engineer();
        expect(typeof e).toBe("object");
    });

    test("Can get role via getRole()", () => {
        const value = "Engineer";
        const e = new Engineer(value);
        expect(e.getRole()).toBe(value);
    });
});