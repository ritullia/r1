function Posts({ title, index }) {
    return (
        <div>
            <span>
                <div style={{ color: 'red' }}>{title.userId}</div>
                <i
                    style={{
                        borderBottom: index % 2 ? '1px solid red' : 'none',
                    }}
                >
                    {title.title}
                </i>
            </span>
        </div>
    );
}

export default Posts;
