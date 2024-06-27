export default function TabButton(props) {
    console.log("Tab button component executing");
    return (
        <li>
            <button onClick={props.onSelect}>{props.children}</button>
        </li>
    );
}