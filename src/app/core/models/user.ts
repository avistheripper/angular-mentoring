export interface UserModel {
    token?: string;
    login: string;
    password?: string;
}

export interface UserResponse {
        id: number;
        fakeToken: string;
        name: {
          first: string;
          last: string;
              };
        login: string;
        password: string;
}
