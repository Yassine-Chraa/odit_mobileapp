export interface IMember {
  id: number;
  role: 'ADMIN' | 'MEMBER';
  userId: number;
  firstName: string;
  lastName: string;
}
