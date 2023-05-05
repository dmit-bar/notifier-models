import { IRoom } from "../chat";
import { SocketEventsEnum } from "./events";
interface IGeneralEvent {
    eventType: SocketEventsEnum;
}
interface IUserMeta {
    login: string;
}
interface INotifyNewConnectionRq extends IGeneralEvent {
    payload: IUserMeta;
}
interface INotifyNewConnectionRs {
    payload: IRoom[];
}
export type { INotifyNewConnectionRq, INotifyNewConnectionRs };
