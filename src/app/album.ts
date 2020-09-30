import { Track } from "./track";

export interface IAlbum {
  name : string,
  releaseDate: string,
  coverImage: string,
  tracks: ITrack[]
}
