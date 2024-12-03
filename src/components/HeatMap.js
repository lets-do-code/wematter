import React, { useState } from 'react'

const HeatMap = () => {


    const generateRandomNumbers = () => {
        return Array.from({ length: 5 }, () => ({
            values: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1),
        }))
    }
    const [data, setData] = useState(generateRandomNumbers())


    const regenerateHeatmap = () => {
        setData(generateRandomNumbers())
    }
    const getCellColor = (value) => {
        if (value <= 33) return 'bg-green-400';
        if (value <= 66) return 'bg-yellow-400';
        return 'bg-red-400';
    };

    console.log(data)

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Heatmap with Random Numbers</h1>
            <div className="flex justify-center">
                <table className="table-fixed border-collapse border border-gray-300">
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.values.map((value, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={`w-16 h-16 border text-center font-semibold ${getCellColor(value)}`}
                                    >
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 text-center">
                <button
                    onClick={regenerateHeatmap}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"
                >
                    Regenerate Heatmap
                </button>
            </div>
        </div>
    )
}

export default HeatMap