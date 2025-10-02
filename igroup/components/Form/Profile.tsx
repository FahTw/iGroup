import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
const Profile = () => {
    return (
        <div className="flex items-center justify-center gap-16">
            <div>
                <Image src={"/Images/circle-user.png"} alt="Profile" width={200} height={200} className="mx-auto mb-4" />
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
                        <Input id="username" defaultValue="it66070032" className="bg-white border-[#e4e4e7] text-[#1a1a1a]" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="font-medium block mb-">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            defaultValue="it66070032@it.kmitl.ac.th"
                            className="bg-white border-[#e4e4e7] text-[#1a1a1a]"
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