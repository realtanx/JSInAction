export default function List({ listData }) {

    return (
        <ul>
            {
                listData.map((item) => {
                    return <li key={item.objectId}>{item.title}</li>
                })
            }
        </ul>
    )
}