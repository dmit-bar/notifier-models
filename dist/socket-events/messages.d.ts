import { IMessage, IRoom } from "../chat";
import { IUserMeta } from "../users";
export interface INotifyNewConnectionRq {
    payload: IUserMeta;
}
export interface INotifyNewConnectionRs {
    payload: IRoom[];
}
export interface INewMessage {
    payload: IMessage;
}
