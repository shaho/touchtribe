import { Video } from "./video";

export interface RootState {
  player: PlayerState;
}
export interface PlayerState {
  videoSelected: string | number;
  videos: Video[];
  offset: number;
}

export interface Action {
  type: string;
  payload: any;
}
