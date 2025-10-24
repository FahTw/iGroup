import Logo from './Logo'
import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface MenuItem {
  label: string;
  href: string;
}

const Navbar = () => {
  const linkUrl: MenuItem[] = [
    { label: 'Profile', href: '/profile' },
    { label: 'Manage Group', href: '/managegroup' },
    // logout route
    { label: 'Logout', href: '/ogin' },
  ]
  return (
    <nav>
      <div className='flex items-center justify-between px-8 py-4 shadow-lg'>
        <h1 className="text-xl">
          <Logo />
        </h1>
        {/* <Button href='/'>Login</Button> */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline"><User /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {
                linkUrl.map((item) => (
                  <DropdownMenuItem asChild key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownMenuItem>
                ))
              }
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </nav>
  )
}
export default Navbar