import axios from "axios"
import { useEffect, useState } from "react"

const Show = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/student/")
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [setData])

    return (
        <div className="h-screen flex justify-center items-center">
            <table>
                <tr>
                    <th className="border border-black p-2 text-center">Name</th>
                    <th className="border border-black p-2 text-center">Username</th>
                    <th className="border border-black p-2 text-center">Email</th>
                    <th className="border border-black p-2 text-center">Action</th>
                </tr>
                {
                    data.map((res: any) => (
                        <tr key={res.id}>
                            <td className="border border-black p-2 text-center">{res.name}</td>
                            <td className="border border-black p-2 text-center">{res.username}</td>
                            <td className="border border-black p-2 text-center">{res.email}</td>
                            <td className="border border-black p-2 text-center">
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default Show