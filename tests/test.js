var assert = require("assert");
const f6snypi = require("../main");

test("getJokes returns an array of objects with a content attribute", async () => {
	const result = await f6snypi.jokes().getJokes(0);
	expect(result.data).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ content: expect.anything() }),
		])
	);
});

test("getPages returns an array of objects with a content attribute", async () => {
	const result = await f6snypi.pages().getPages();
	expect(result.data).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ content: expect.any(String) }),
		])
	);
});

test("getTags returns an array of objects with a title attribute", async () => {
	const result = await f6snypi.tags().getTags();
	expect(result.data).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ title: expect.any(String) }),
		])
	);
});

test("getJokeComments returns an array of objects with a content attribute", async () => {
	const result = await f6snypi.comments().getJokeComments(6737);
	expect(result.data).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ content: expect.any(String) }),
		])
	);
});