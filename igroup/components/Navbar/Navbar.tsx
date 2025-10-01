import Logo from './Logo'
import Button from './Button'

const Navbar = () => {
  return (
    <nav>
        <div className='flex items-center justify-between px-8 py-4 shadow-lg'>
            <h1 className="text-xl">
              <Logo />
            </h1>
            <Button href='/'>Login</Button>
        </div>
    </nav>
  )
}
export default Navbar