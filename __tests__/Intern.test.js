const Intern = require('../lib/intern');
const intern = require('../lib/intern');

describe("Intern", () => {
    test("Can instantiate Intern object", () => {
        const e = new Intern();
        expect(typeof e).toBe("object");
    });

    test("Can get role via getRole()", () => {
        const value = "Intern";
        const e = new Intern(value);
        expect(e.getRole()).toBe(value);
    });
});
