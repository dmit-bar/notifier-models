import { IMessage, IRoom } from "../chat";
import { SocketEventTypesEnum } from "./eventTypes";
export interface IGeneralEvent {
    type: SocketEventTypesEnum;
}
export interface IUserMeta {
    userUID: string;
}
export interface INotifyNewConnectionRq extends IGeneralEvent {
    payload: IUserMeta;
}
export interface INotifyNewConnectionRs {
    payload: IRoom[];
}
export interface IGetMsgListRq {
    payload: {
        roomUUID: string;
    };
}
export interface IGetMsgListRs {
    payload: IMessage[];
}
export interface IClientMessage {
    payload: Omit<IMessage, "uuid">;
}
export interface INewMessage {
    payload: IMessage;
}
