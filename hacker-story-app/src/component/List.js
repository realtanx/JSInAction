export default function List({ listData, onRemoveItem }) {

    return (
        <ul>
            {
                listData.map((item) => {
                    return <ListItem item={item} onRemoveItem={onRemoveItem} />
                })
            }
        </ul>
    )
}

function ListItem({ item, onRemoveItem }) {

    function handleRemoveItem() {
        onRemoveItem(item)
    }

    return (
        <>
            <li key={item.objectId}>{item.title}</li>
            <button onClick={handleRemoveItem}>Delete</button>
        </>
    )

}