import { IRoom } from "../chat";
import { SocketEventsEnum } from "./events";

export interface IGeneralEvent {
  eventType: SocketEventsEnum;
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
