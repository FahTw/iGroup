import Logo from './Logo'
import Button from './Button'

const Navbar = () => {
  return (
    <nav>
        <div className='flex items-center justify-between p-6 shadow-lg'>
            <Logo />
            <Button href='/'>Login</Button>
        </div>
    </nav>
  )
}
export default Navbar