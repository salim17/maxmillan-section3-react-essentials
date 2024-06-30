export default function TabButton(props) {
    console.log("Tab button component executing");
    return (
        <li>
            <button className={props.isActive ? 'active' : undefined} onClick={props.onSelect}>{props.children}</button>
        </li>
    );
}