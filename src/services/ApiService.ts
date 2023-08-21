const apiUrl = 'http://192.168.1.5:8083/api/'; //20.79.69.228
const apiVersion = 'v1';

const endpoints: any = {
  auth: '/auth',
  users: '/users',
  projects: '/projects',
  rooms: '/rooms',
  invitations: '/invitations',
  sections: '/sections',
  tasks: '/tasks',
  userTasks: '/user-tasks',
  upload: '/files',
  refreshToken: '/auth/refresh-token',
  roomMembers: '/room-members'
};

export const getApiUrl = (key: string) => {
  return apiUrl + apiVersion + endpoints[key];
};
