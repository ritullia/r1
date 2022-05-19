function Users({ user }) {
    return (
        <div className="robots">
            <span>{user.firstName}</span>
            <span>
                <img
                    className="img"
                    src={user.image.slice(0, user.image.indexOf('?'))} //paveiksliuko linko nukirtimas, kai paveiksliuko linkas po png turi ? ir adresa gala kurio nereik
                    alt=""
                />
            </span>
        </div>
    );
}

export default Users;
