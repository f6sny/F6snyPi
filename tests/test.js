var assert = require("assert");
const f6snypi = require("../main");

test("getJokes returns an array of objects with a content attribute", async () => {
	expect(await f6snypi.jokes().getJokes(0)).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ content: expect.anything() }),
		])
	);
});

test("getPages returns an array of objects with a content attribute", async () => {
	expect(await f6snypi.pages().getPages()).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ content: expect.any(String) }),
		])
	);
});

test("getTags returns an array of objects with a title attribute", async () => {
	expect(await f6snypi.tags().getTags()).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ title: expect.any(String) }),
		])
	);
});

test("getJokeComments returns an array of objects with a content attribute", async () => {
	expect(await f6snypi.comments().getJokeComments(6737)).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ content: expect.any(String) }),
		])
	);
});