const apiUrl = 'http://192.168.1.5:8083/api/';
const apiVersion = 'v1';

const endpoints: any = {
  auth: '/auth',
  users: '/users',
  projects: '/projects',
  rooms: '/rooms',
};

export const getApiUrl = (key: string) => {
  return apiUrl + apiVersion + endpoints[key];
};
