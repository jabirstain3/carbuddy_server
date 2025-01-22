
export type TUser = {
    username: string,
    role: 'SuperAdmin | Admin | User',
    status: 'Active | blocked',
    email: string,
    password: string,
}