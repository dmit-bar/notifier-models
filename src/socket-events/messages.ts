import { IMessage, IRoom } from "../chat";
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

export interface IGetMsgListRq {
  payload: { roomUUID: string };
}

export interface IGetMsgListRs {
  payload: IMessage[];
}

export interface INewMessageRq {
  payload: Omit<IMessage, "uuid" | "authorName">;
}

export interface INewMessageRs {
  payload: IMessage;
}
