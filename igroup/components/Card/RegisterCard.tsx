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
import Link from "next/link"

const RegisterCard = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: handle Register logic here
    console.log("Form submitted")
  }

  return (
    <div className={inter.className}>
      <Card className="font-sans w-full max-w-sm lg:w-[450px] lg:h-[601px] shadow-xl">
        <div className="text-center">
          <CardHeader>
            <CardTitle className="text-3xl">
              <Logo />
            </CardTitle>
            <CardDescription>Please Register in to your account</CardDescription>
        </CardHeader>
        </div>

        <form>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="username">
                Username
              </label>
              <div className="flex items-center relative">
                < User className="absolute left-3 " />
                <Input
                  id="username"
                  name="username"
                  type="text"
                  autoCapitalize="none"
                  placeholder="username"
                  required
                  className="px-10"
                />
              </div>

            </div>
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <div className="flex items-center relative">
                <Lock className="absolute left-3" />
                <Input
                id="phone"
                name="phone"
                type="text"
                placeholder="Phone number"
                required
                className="px-10"
                />
              </div>

            </div>
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <div className="flex items-center relative">
                <Lock className="absolute left-3" />
                <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                required
                className="px-10"
                />
              </div>

            </div>
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="password">
                Confirm Password
              </label>
              <div className="flex items-center relative">
                <Phone className="absolute left-3" />
                <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                required
                className="px-10"
                />
              </div>

            </div>
          </CardContent>

          <CardFooter className="flex flex-col items-center ">
            <button
              type="submit"
              className="w-[13rem] rounded-md bg-blue-700 p-2 text-white hover:bg-blue-800 transition-colors"
            >
               สมัครสมาชิก
            </button>
            <div className="flex gap-2 items-center">
                <p className="text-gray-400 text-sm py-5">มีบัญชีแล้วหรือยัง?</p>
                <Link className="text-blue-600" href="/login">เข้าสู่ระบบ</Link>
            </div>

          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default RegisterCard
