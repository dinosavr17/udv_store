import { Link } from "react-router-dom"

const LinkPage = () => {
    return (
        <section>
            <h1>Links</h1>
            <br />
            <h2>Public</h2>
            <Link to="/sign-in">Login</Link>
            <Link to="/sign-up">Register</Link>
            <br />
            <h2>Private</h2>
            <Link to="/">Home</Link>
            <Link to="/cart">Editors Page</Link>
            <Link to="/orders">Admin Page</Link>
        </section>
    )
}

export default LinkPage