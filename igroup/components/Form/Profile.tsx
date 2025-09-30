import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
const Profile = () => {
    return (
        <div>
            <form>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="firstname" className="font-medium">
                            Firstname
                        </label>
                        <Input
                            id="firstname"
                            placeholder="คนใช้ตัวอย่น"
                            className="bg-white border-[#e4e4e7] text-[#1a1a1a] placeholder:text-[#b1b1b1]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lastname" className="font-medium">
                            Lastname
                        </label>
                        <Input
                            id="lastname"
                            placeholder="กลุ่มนี้รับสมัครคนมากมายหลายท่า"
                            className="bg-white border-[#e4e4e7] placeholder:text-[#b1b1b1]"
                        />
                    </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="username" className="font-medium">
                            Username
                        </label>
                        <Input id="username" defaultValue="it66070032" className="bg-white border-[#e4e4e7] text-[#1a1a1a]" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="font-medium">
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
                <div className="space-y-2">
                    <label htmlFor="new-password" className="font-medium">
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
                    <label htmlFor="confirm-password" className="font-medium">
                        Confirm Password
                    </label>
                    <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Password"
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