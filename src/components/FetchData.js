import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = () => {
    const [data, setData] = useState([]);
    const [isReversed, setIsReversed] = useState(false);

    const host = "https://63ecef2abe929df00cb58085.mockapi.io/todoapp";

    const getData = async () => {
        try {
            const response = await axios.get(host);
            setData(response.data);
        } catch (error) {
            console.error("Error " + error);
        }
    };

    const handleReverse = async () => {
        await getData(); // Refetch the latest data
        setIsReversed(!isReversed);
    };

    useEffect(() => {
        getData();
    }, []);

    const displayedData = isReversed ? [...data].reverse() : data;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Data</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 border">City</th>
                            <th className="px-4 py-2 border">Company</th>
                            <th className="px-4 py-2 border">Email</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData.map((item, index) => (
                            <tr key={index} className="text-center border-t hover:bg-gray-100">
                                <td className="px-4 py-2 border">{item.city}</td>
                                <td className="px-4 py-2 border">{item.company}</td>
                                <td className="px-4 py-2 border">{item.email}</td>
                                <td className="px-4 py-2 border">{item.name}</td>
                                <td className="px-4 py-2 border">{item.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 text-center">
                <button
                    onClick={handleReverse}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"
                >
                    Reverse Order
                </button>
            </div>
        </div>
    );
};

export default FetchData;
