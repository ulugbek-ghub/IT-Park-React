import { Outlet } from "react-router"

const Guest = () => {
    return (
        <div>
            <h1>
                Guest
                <Outlet />
            </h1>
        </div>
    )
}

export default Guest
