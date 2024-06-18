import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const ThreeDTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-2 border-gray-200 rounded-md">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-100 text-left text-l leading-4 font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-l leading-4 font-medium text-gray-500 uppercase tracking-wider">User Mobile</th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-l leading-4 font-medium text-gray-500 uppercase tracking-wider">Rental date</th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-l leading-4 font-medium text-gray-500 uppercase tracking-wider">Rental period</th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-l leading-4 font-medium text-gray-500 uppercase tracking-wider">Pay</th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-l leading-4 font-medium text-gray-500 uppercase tracking-wider">Adjustment</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">kamal elsayed</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">2/5/2024</td>
                        <td className="px-6 py-4 whitespace-no-wrap">2 weeks</td>
                        <td className="px-6 py-4 whitespace-no-wrap">6000</td>
                    
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">mariam omar</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">4/1/2024</td>
                        <td className="px-6 py-4 whitespace-no-wrap">2 weeks</td>
                        <td className="px-6 py-4 whitespace-no-wrap">7000</td>
                    
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">tamer adel</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">3/4/2024</td>
                        <td className="px-6 py-4 whitespace-no-wrap">1 weeks</td>
                        <td className="px-6 py-4 whitespace-no-wrap">5500</td>
                    
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">hazem sherif</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">2/5/2024</td>
                        <td className="px-6 py-4 whitespace-no-wrap">2 weeks</td>
                        <td className="px-6 py-4 whitespace-no-wrap">6000</td>
                    
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">abas mohamed</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">1/4/2024</td>
                        <td className="px-6 py-4 whitespace-no-wrap">3 weeks</td>
                        <td className="px-6 py-4 whitespace-no-wrap">5000</td>
                    
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">farida elsayed</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">2/2/2024</td>
                        <td className="px-6 py-4 whitespace-no-wrap">1 weeks</td>
                        <td className="px-6 py-4 whitespace-no-wrap">4500</td>
                    
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">jana adel</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">6/4/2024</td>
                        <td className="px-6 py-4 whitespace-no-wrap">3 weeks</td>
                        <td className="px-6 py-4 whitespace-no-wrap">5600</td>
                    
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">shaimaa ahmed</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">5/1/2024</td>
                        <td className="px-6 py-4 whitespace-no-wrap">1 weeks</td>
                        <td className="px-6 py-4 whitespace-no-wrap">5500</td>
                    
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">kareem fady</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">3/6/2024</td>
                        <td className="px-6 py-4 whitespace-no-wrap">3 weeks</td>
                        <td className="px-6 py-4 whitespace-no-wrap">2000</td>
                    
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">seif mohamed</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">1/3/2024</td>
                        <td className="px-6 py-4 whitespace-no-wrap">2 weeks</td>
                        <td className="px-6 py-4 whitespace-no-wrap">6000</td>
                    
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ThreeDTable;

