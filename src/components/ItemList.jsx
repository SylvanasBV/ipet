import { Item } from "./Item"

export const ItemList = ({list}) =>(
        <>
            {!list.length && "Loading"}
            {list.map(item => (
                <Item item={item}/>
            ))}
        </>
    )