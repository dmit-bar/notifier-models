export interface IRoom {
    uuid: string;
    title: string;
    description: string;
    members: IRoomMember[];
    lastMessage?: Omit<IMessage, "roomUUID">;
}
export interface IMessage {
    uuid: string;
    roomUUID: string;
    authorID: string;
    authorName: string;
    message: string;
}
export interface IRoomMember {
    login: string;
    role: string;
}
