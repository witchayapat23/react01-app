import { useEffect, useState } from "react";

function Users() {
    const [users, setUser] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.org/users")
            .then(res => res.json()
                .then(data => setUser(data)))
    }, [])

    const listUser = users.map((u) => (
        <tr key={u.id} className="border-b">
            <td className="px-5 py-5 text-sm">{u.id}</td>
            <td className="px-5 py-5 text-sm">{u.firstname}</td>
            <td className="px-5 py-5 text-sm">{u.email}</td>
            <td className="px-5 py-5 text-sm">{u.birthDate}</td>
            <td className="px-5 py-5 text-sm">{u.address.street}</td>
        </tr>
    ))
    return (
        <>
            <h1 className="text-red-300 font-blod">แสดงรายชื่อผู้ใช้งาน</h1>
            <table className="min-w-full">
                <thead >
                    <tr>
                        <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">ID</th>
                        <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Name</th>
                        <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Email</th>
                        <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">birthDate</th>
                        <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">street</th>
                    </tr>
                </thead>
                <tbody>{listUser}</tbody>
            </table>
        </>
    );
}

export default Users;