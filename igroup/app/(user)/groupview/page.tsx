import GroupViewCard from "@/components/Card/GroupViewCard"
import HeroSection from "@/components/HeroSection/HeroSection"
const page = () => {
  return (
    <div>
        <HeroSection 
          title="CLOUD COMPUTING"
          subtitle="เลือกกลุ่มที่ต้องการเข้าร่วมหรือสร้างกลุ่ม"
        />
        < GroupViewCard />
    </div>
  )
}
export default page