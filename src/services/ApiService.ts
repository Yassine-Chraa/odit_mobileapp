const apiUrl = 'http://20.79.69.228/api/';
const apiVersion = 'v1';

const endpoints: any = {
  auth: '/auth',
  users: '/users',
  projects: '/projects',
  rooms: '/rooms',
  invitations: '/invitations',
  sections: '/sections',
  tasks: '/tasks'
};

export const getApiUrl = (key: string) => {
  return apiUrl + apiVersion + endpoints[key];
};
