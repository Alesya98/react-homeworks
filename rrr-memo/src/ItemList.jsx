import { memo, useMemo } from "react";

const ItemList = ({items, search}) => {
    console.log('render list')

    const filterItem = useMemo (() => {
        console.log('filter')
        return items.filter(item => item.toLowerCase().includes(search.toLowerCase()))
    }, [items, search])
    return (
    <>
    <ul>
        {filterItem.map(item => (<li key={item}>{item}</li>) )}
    </ul>
    
    </>
    )
}

export default memo(ItemList);