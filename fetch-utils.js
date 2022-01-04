const SUPABASE_URL = '';
const SUPABASE_KEY = '';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signIn(email, password) {
    const response = await client.auth.signIn({
        email,
        password
    });

    return response.user;
}

export async function signUp(email, password) {
    const response = await client.auth.signUp({
        email,
        password
    });

    return response.user;
}

export async function signOut() {
    await client.auth.signOut();

    return window.location.href = '../';
}

export async function getUser() {

    return client.auth.session();
}

export async function redirect() {
    if (await getUser()) {
        location.replace('./main');
    }
}

export async function checkAuth() {
    const user = await getUser();
    if (!user) {
        location.replace('../');
    }
}