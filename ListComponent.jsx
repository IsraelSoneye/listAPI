import useFetch from "./usefetch";

const ListComponent = () => {

    const {items, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/comments');

    return ( 
        <div className="item-list">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            <h2>List of Commenters</h2>
            <ul>
                {items && (
                    items.map(item => (
                    <li key={item.id}>
                        <div><b>Name:</b> {item.name}</div>
                        <p><b>Email:</b> {item.email}</p>
                    </li>
                    ))
                )}
            </ul>
        </div>
     );
}
 
export default ListComponent;