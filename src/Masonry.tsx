import {MasonryItem} from "./types";
import {FC, PropsWithChildren, useMemo} from "react";
import {MasonryTile} from "./MasonryTile";

type MasonryProps = PropsWithChildren<{
  items: MasonryItem[]
  columns?: number
}>

const getShortestColumnIndex = (data: MasonryItem[][]) => {
  const [first, ...rest] = data
  let minColHeight = first.reduce((acc, {height }) => acc + height, 0)
  let index = 0
  rest.forEach((col, i) => {
    const colHeight = col.reduce((acc, {height }) => acc + height, 0)
    if (colHeight < minColHeight) {
      index = i + 1
      minColHeight = colHeight
    }
  })
  return index
}

const offset = 34

export const Masonry: FC<MasonryProps> = ({ items, columns = 4 }) => {
  const masonryColumns = useMemo(() => {
    const columnData: MasonryItem[][] = Array(columns).fill(0).map(() => [])
    items.forEach((item) => {
      const shortest = getShortestColumnIndex(columnData)
      columnData[shortest].push(item)
    })
    return columnData
  }, [items, columns])

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {masonryColumns.map((col, i) => (
        <div style={{ marginLeft: i > 0 ? offset : 0 }}>
          {col.map((item) => (
            <div style={{ marginTop: offset }}>
              <MasonryTile {...item} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
