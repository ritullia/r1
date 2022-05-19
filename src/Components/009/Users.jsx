function Users({ user }) {
    return (
        <div>
            <span>
                {user.name}
                <i>{user.company.name}</i>
            </span>
        </div>
    );
}

export default Users;
