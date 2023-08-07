export interface Invite {
  id: number;
  project: {
    id: number;
    name: string;
  };
  userEmail: string;
  creationDate: Date;
}