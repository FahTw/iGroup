"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

type CardProps = {
    profile: any
}
const Profile = ({ profile }: CardProps) => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const [username, setUsername] = useState('')
    const [imagePath, setImagePath] = useState('')
    const [password, setPassword] = useState('')
    const getProfile = async () => {
        if (!profile) return;
        setFirstname(profile.Profile.first_name)
        setLastname(profile.Profile.last_name)
        setEmail(profile.Profile.email)
        setBio(profile.Profile.bio)
        setUsername(profile.username)
        setImagePath(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${profile.Profile.imagePath}`)
    }
    useEffect(() => {
        getProfile()
    }, [])
    return (
        <div className="flex items-center justify-center gap-16">
            <div>
                <Image unoptimized src={imagePath || "/Images/circle-user.png"} alt="Profile" width={200} height={200} className="mx-auto mb-4 rounded-full aspect-square object-cover" />
                <div className="text-center">
                    <label htmlFor="file" className="block font-medium mb-2">
                        Upload File
                    </label>
                    <input
                        type="file"
                        id="file"
                        className="w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
                    />
                </div>
            </div>
            <form className="w-full lg:w-[689px] lg:h-[367px]">
                <div className="grid grid-cols-2 gap-6 mb-3">
                    <div className="space-y-2">
                        <label htmlFor="firstname" className="font-medium block mb-2">
                            Firstname
                        </label>
                        <Input
                            id="firstname"
                            placeholder="Firstname"
                            defaultValue={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            className="bg-white border-[#e4e4e7] text-[#1a1a1a] placeholder:text-[#b1b1b1]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lastname" className="font-medium block mb-">
                            Lastname
                        </label>
                        <Input
                            id="lastname"
                            placeholder="Lastname"
                            defaultValue={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            className="bg-white border-[#e4e4e7] placeholder:text-[#b1b1b1]"
                        />
                    </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-2 gap-6 mb-3">
                    <div className="space-y-2">
                        <label htmlFor="username" className="font-medium block mb-">
                            Username
                        </label>
                        <Input id="username" placeholder="Username" defaultValue={username} className="bg-white border-[#e4e4e7] text-[#1a1a1a]" disabled />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="font-medium block mb-">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            defaultValue={email}
                            className="bg-white border-[#e4e4e7] text-[#1a1a1a]"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                {/* Password Fields */}
                <div className="space-y-2 mb-3">
                    <label htmlFor="new-password" className="font-medium block mb-">
                        New Password
                    </label>
                    <Input
                        id="new-password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white border-[#e4e4e7] text-[#1a1a1a] placeholder:text-[#b1b1b1]"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="confirm-password" className="font-medium block mb-">
                        Confirm Password
                    </label>
                    <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Comfirm password"
                        className="bg-white border-[#e4e4e7] text-[#1a1a1a] placeholder:text-[#b1b1b1]"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                    <Button
                        type="submit"
                        className="bg-[#0059ff] hover:bg-[#0059ff]/90 text-white px-16 py-3 rounded-md font-medium text-base"
                    >
                        บันทึก
                    </Button>
                </div>

            </form>
        </div>
    )
}
export default Profile