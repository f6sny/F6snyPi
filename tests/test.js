const instance = require('axios').default;
instance.defaults.baseURL = 'https://api.f6sny.com';
const f6snypi = require("../lib/cjs/index");


test("Test Jokes", async () => {
	expect(await f6snypi.jokes().getJokes(0)).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ content: expect.anything() }),
		])
	);

    expect(await f6snypi.jokes().getPendingJokes()).toEqual(
        expect.objectContaining({ content: expect.anything() }),
	);

    expect(await f6snypi.jokes().searchJokesByKeywords('حوطي')).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ content: expect.anything() }),
		])
	);

	expect(await f6snypi.jokes().getJokeByID(6737)).toEqual(
		expect.objectContaining({ content: expect.any(String) }),
	);

    expect(await f6snypi.jokes().getTagJokesBySlug('متزوجين')).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ content: expect.anything() }),
		])
	);

    expect(await f6snypi.jokes().getJokeBySlug('في-نمله-تمططت-اتقطعت-ههههههههههههههههههه')).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ content: expect.anything() }),
		])
	);
});



test("Test globals", async () => {
	expect(await f6snypi.global().getCounters()).toEqual(
			expect.objectContaining({ comments: expect.anything() }),
	);
});

test("Test Pages", async () => {
	expect(await f6snypi.pages().getPages()).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ content: expect.any(String) }),
		])
	);
});

test("Test Tags", async () => {
	expect(await f6snypi.tags().getTags()).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ title: expect.any(String) }),
		])
	);
});

test("Test comments", async () => {
	expect(await f6snypi.comments().getJokeComments(6737)).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ content: expect.any(String) }),
		])
	);

	const response = await f6snypi.comments().getComments();
	const { items } = response ;

	items.forEach(item => {
		expect(item).toEqual(expect.objectContaining({
				content: expect.any(String)
		}));
	});
});

test("Test users", async () => {
	expect(await f6snypi.users().getUserByUsername('visitor')).toEqual(
		expect.arrayContaining([
			expect.objectContaining({ username: expect.any(String) }),
		])
	);
});
