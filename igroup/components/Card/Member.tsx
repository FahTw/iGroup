"use client";

import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const initmembers = [
    { number: 1, name: "ประชาชน" },
    { number: 2, name: "ประชาชน" },
    { number: 3, name: "ประชาชน" },
];

const Member = () => {
    const [members, setMembers] = useState(initmembers);

    const handleDelete = (numberToDelete: number) => {
        setMembers((prev) => prev.filter((m) => m.number !== numberToDelete));
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">สมาชิกในกลุ่ม</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((m) => (
                    <Card
                        key={m.number}
                        className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white hover:shadow-md "
                    >
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <h3 className="text-xl font-medium text-gray-800">#{m.number}</h3>
                                <p className="text-base font-semibold text-gray-700">{m.name}</p>
                            </div>


                            <Button
                                onClick={() => handleDelete(m.number)}
                                className="mt-4 w-full bg-red-600 text-white"
                            >
                                ลบสมาชิก
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>

            {members.length === 0 && (
                <div className="text-center mt-10 text-gray-500 text-sm">
                    ไม่มีสมาชิกในกลุ่มแล้ว
                </div>
            )}
        </div>
    );
};

export default Member;
