interface IRoom {
    uuid: string;
    title: string;
    description: string;
    lastMessage?: Omit<IMessage, "roomUUID">;
}
interface IMessage {
    uuid: string;
    roomUUID: string;
    authorID: string;
    authorName: string;
    message: string;
}
export { IRoom, IMessage };
