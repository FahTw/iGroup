import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Logo from "../Navbar/Logo"
import { inter } from '@/lib/fonts'
import { User, Phone, Mail, Lock } from "lucide-react"

const LoginCard = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: handle login logic here
    console.log("Form submitted")
  }

  return (
    <div className={inter.className}>
      <Card className="font-sans w-full shadow-xl px-10 py-5 min-w-[450px]">
        <div className="text-center">
          <CardHeader>
            <CardTitle className="text-3xl">
              <Logo />
            </CardTitle>
            <CardDescription className="text-[#B1B1B1]">Please Login in to your account</CardDescription>
        </CardHeader>
        </div>

        <form>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm text-[#71717A]" htmlFor="username">
                Username
              </label>
              <div className="flex items-center relative">
                < User className="absolute left-3 text-[#B1B1B1] w-[16px]" />
                <Input
                  id="username"
                  name="username"
                  type="text"
                  autoCapitalize="none"
                  placeholder="Enter your username"
                  required
                  className="px-10 max-w-350  border-[#E4E4E7] focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

            </div>

            <div className="grid gap-2">
              <label className="text-sm  text-[#71717A]" htmlFor="password">
                Password
              </label>
              <div className="flex items-center relative">
                <Lock className="absolute left-3 text-[#B1B1B1] w-[16px]" />
                <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                className="px-10 max-w-350 border-[#E4E4E7] focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

            </div>
          </CardContent>

          <CardFooter className="flex flex-col items-center ">
            <button
              type="submit"
              className="w-[13rem] rounded-md bg-blue-700 p-2 text-white hover:bg-blue-800 transition-colors"
            >
               เข้าสู่ระบบ
            </button>
            <p className="text-gray-400 text-sm py-5">มีบัญชีแล้วหรือยัง</p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default LoginCard
