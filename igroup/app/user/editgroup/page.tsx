import Editgroup from "@/components/Form/Editgroup"
import HeroSection from "@/components/HeroSection/HeroSection"
import MemberCard  from "@/components/Card/Member"
const page = () => {
  return (
    <div>
        <HeroSection 
            title="Editgroup"
        />
        <Editgroup />
        <MemberCard />
    </div>
  )
}
export default page