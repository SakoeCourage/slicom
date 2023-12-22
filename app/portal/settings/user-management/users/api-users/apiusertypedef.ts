import { faker } from '@faker-js/faker';

export interface IApiuserScheme {
    username: string,
    institution: string,
    createdAt: string,

}

export const apiUsersList: IApiuserScheme[] = Array.from({ length: 10 }, (_, index) => ({
    username: faker.internet.userName(),
    institution: faker.company.name(),
    createdAt: faker.date.past().toISOString(),
  }));
