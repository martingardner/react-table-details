/* ordinarily would be in a separate file, but for purposes of assessment is put here */
async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

export { getUsers }