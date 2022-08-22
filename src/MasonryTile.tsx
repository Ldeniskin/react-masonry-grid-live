import {FC, PropsWithChildren} from "react";
import {MasonryItem} from "./types";

type MasonryTileProps = PropsWithChildren<MasonryItem>
export const MasonryTile: FC<MasonryTileProps> = ({ height, url }) => {
  return (
    <img style={{ height, width: 254, objectFit: 'cover' }} src={url} />
  )
}
