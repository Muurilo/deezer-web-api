const getType = require("jest-get-type");
var Deezer = require("../../src/index.js");

describe("Deezer", () => {
    it("Should have functions attached", async () => {
        const DeezerClient = new Deezer();

        Object.entries(DeezerClient).map((e) => {
            Object.entries(e[1]).map((e) => {
                expect(getType(e[1])).toBe("function");
            });
        });
    });
});
