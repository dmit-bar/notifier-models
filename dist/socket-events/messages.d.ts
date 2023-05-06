import { IRoom } from "../chat";
import { SocketEventTypesEnum } from "./eventTypes";
export interface IGeneralEvent {
    type: SocketEventTypesEnum;
}
export interface IUserMeta {
    login: string;
}
export interface INotifyNewConnectionRq extends IGeneralEvent {
    payload: IUserMeta;
}
export interface INotifyNewConnectionRs {
    payload: IRoom[];
}
