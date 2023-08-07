import { Invite } from "../types/IInvite";

export const fakeInvites: Invite[] = [
  {
    id: 1,
    project: {
      id: 1,
      name: 'Project A',
    },
    userEmail: 'user1@example.com',
    creationDate: new Date('2023-08-01T10:00:00Z'),
  },
  {
    id: 2,
    project: {
      id: 2,
      name: 'Project B',
    },
    userEmail: 'user2@example.com',
    creationDate: new Date('2023-08-02T14:30:00Z'),
  },
  {
    id: 3,
    project: {
      id: 3,
      name: 'Project C',
    },
    userEmail: 'user3@example.com',
    creationDate: new Date('2023-08-02T14:30:00Z'),
  },
  {
    id: 4,
    project: {
      id: 5,
      name: 'Project D',
    },
    userEmail: 'user4@example.com',
    creationDate: new Date('2023-08-02T14:30:00Z'),
  },
  {
    id: 5,
    project: {
      id: 2,
      name: 'Project E',
    },
    userEmail: 'user5@example.com',
    creationDate: new Date('2023-08-02T14:30:00Z'),
  },
];