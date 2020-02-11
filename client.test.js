
const { getRequest } = require('./client');

const testUrl = 'http://localhost:3000/api'

const unauthorized = 'Unauthorized'
const correctResponse = 'GET'

const emptyUser = {username: "", password: ""}
const correctUser = {username: "username", password: "password"}
const userWithoutUsername = {username: "", password: "password"}
const userWithoutPassword = {username: "username", password: ""}


test('Get request to ' + testUrl +' ... ', async () => {
	const data = await getRequest(testUrl, emptyUser);
	expect(data).toBe(unauthorized);
});

test('Get request to ' + testUrl +' ... ', async () => {
	const data = await getRequest(testUrl, userWithoutUsername);
	expect(data).toBe(unauthorized);
});

test('Get request to ' + testUrl +' ... ', async () => {
	const data = await getRequest(testUrl, userWithoutPassword);
	expect(data).toBe(unauthorized);
});

test('Get request to ' + testUrl +' ... ', async () => {
	const data = await getRequest(testUrl, correctUser);
	expect(data.method).toBe(correctResponse);
});