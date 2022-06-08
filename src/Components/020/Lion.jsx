import { Link, Outlet } from 'react-router-dom';

function Lion() {
    return (
        <>
            <h1>Lion of Savana</h1>
            <div className="links">
                <Link to="grass">Grass</Link>
                <Link to="forest">forest</Link>
                <Link to="rain">rain</Link>
            </div>
            <div className="kvc kv c1">
                <Outlet></Outlet>
            </div>
        </>
    );
}

export default Lion;
