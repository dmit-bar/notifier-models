export interface IRoom {
    uuid: string;
    title: string;
    description: string;
    lastMessage?: Omit<IMessage, "roomUUID">;
}
export interface IMessage {
    uuid: string;
    roomUUID: string;
    authorID: string;
    authorName: string;
    message: string;
}
