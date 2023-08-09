import { IRoomMember } from "./IRoomMember";

export interface IRoom{
    name: string;
    description: string;
    members: Array<IRoomMember>;
}