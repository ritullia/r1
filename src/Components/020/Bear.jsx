import { Link, Outlet } from 'react-router-dom';

function Bear() {
    return (
        <>
            <h1>Bear cave</h1>
            <div className="links">
                <Link to="big">Very big</Link>
                <Link to="small">Very small</Link>
            </div>
            <div className="kvc kv c1">
                <Outlet></Outlet>
            </div>
        </>
    );
}

export default Bear;
