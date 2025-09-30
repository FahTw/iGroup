import Profile from "@/components/Form/Profile"
import HeroSection from "@/components/HeroSection/HeroSection"
const page = () => {
  return (
    <div>
        <HeroSection 
            title="PROFILE"
            subtitle="แก้ไขข้อมูลส่วนตัว"
        />
        <Profile />
    </div>
  )
}
export default page