
function MenuItem({ href, icon, children }) {
    const iconSrc = `/icons/${icon}.svg`;
    return (
        <li>
            <a href={href} className="menu-link">
                <img src={iconSrc} width="16" alt=""></img>
                {children}
            </a>
        </li>
    );
}

export default MenuItem;