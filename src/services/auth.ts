const DEMO_USER = {
    email: 'fsouzasrs@gmail.com',
    password: 'Marcos14600',
};

export function validateLogin(
    email: string,
    password: string
) : boolean {
    return email === DEMO_USER.email && password === DEMO_USER.password;
}
