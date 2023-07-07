export interface IRoom {
    uuid: string;
    title: string;
    description: string;
    members: IRoomMember[];
    messages?: Omit<IMessage, "roomUUID">[];
    draftMessage?: string;
}
export interface IMessage {
    uuid: string;
    roomUUID: string;
    authorID: string;
    authorName: string;
    message: string;
    timestamp: Date;
}
export interface IRoomMember {
    userUID: string;
    role: string;
}
