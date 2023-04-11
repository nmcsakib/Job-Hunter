import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const assignments = [
    {
        name: 'A 1',
        mark: 60
    },
    {
        name: 'A 2',
        mark: 60
    },
    {
        name: 'A 3',
        mark: 57
    },
    {
        name: 'A 4',
        mark: 60
    },
    {
        name: 'A 5',
        mark: 56
    },
    {
        name: 'A 6',
        mark: 60
    },
    {
        name: 'A 7',
        mark: 60
    },
    {
        name: 'A 8',
        mark: 60
    },
];
const Statistics = () => {
    return (
        <div >
            <h1 className="font-bold text-3xl md:text-5xl my-A e text-center underline">Assignment Marks</h1>
            <div style={{ width: '90%', margin: "50px auto", height: 280 }} >
                <ResponsiveContainer>
                <AreaChart
                    data={assignments}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                        <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="mark" stroke="#8884d8" dot="#9873FF" fill="#7E90FE" />
                </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;