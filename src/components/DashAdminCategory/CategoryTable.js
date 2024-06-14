import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const ThreeDTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-2 border-gray-200 rounded-md">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-100 text-left text-l leading-4 font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-l leading-4 font-medium text-gray-500 uppercase tracking-wider">User Email</th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-l leading-4 font-medium text-gray-500 uppercase tracking-wider">Mobile No</th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-l leading-4 font-medium text-gray-500 uppercase tracking-wider">Adjustment</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">user1</td>
                        <td className="px-6 py-4 whitespace-no-wrap">user1@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-no-wrap">user2</td>
                    <td className="px-6 py-4 whitespace-no-wrap">user2@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-no-wrap">user3</td>
                    <td className="px-6 py-4 whitespace-no-wrap">user3@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-no-wrap">user4</td>
                    <td className="px-6 py-4 whitespace-no-wrap">user4@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-no-wrap">user5</td>
                    <td className="px-6 py-4 whitespace-no-wrap">user5@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-no-wrap">user6</td>
                    <td className="px-6 py-4 whitespace-no-wrap">user6@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-no-wrap">user7</td>
                    <td className="px-6 py-4 whitespace-no-wrap">user7@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-no-wrap">user8</td>
                    <td className="px-6 py-4 whitespace-no-wrap">user8@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-no-wrap">user9</td>
                    <td className="px-6 py-4 whitespace-no-wrap">user9@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 mr-2"><FaTrash /></button>
                            <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600"><FaEdit /></button>
                        </td>
                    </tr>
                    <tr>
                    <td className="px-6 py-4 whitespace-no-wrap">user10</td>
                    <td className="px-6 py-4 whitespace-no-wrap">user10@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
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
