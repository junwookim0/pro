const ProductDisplay = (props) => {
    return (
        <div>
            { /* props값을 하나씩 넣어줘서 가져오는 방법 */}
            { /* props값을 객체로 넣어줘서 가져오는 방법 */}
            <h3>{props.item.name}</h3>
            <ul>
                <li>{props.item.color}</li>
                <li>{props.item.stock}</li>
            </ul>
        </div>
    );
}
export default ProductDisplay;