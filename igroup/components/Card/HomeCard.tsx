import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";
import { Prompt } from "next/font/google";

const prompt = Prompt({ subsets: ["latin"], weight: "300" });

type CardProps = {
  title: string
  description: string
}

export default function HomeCard({ title = "This is default title", description = "This is default description" }: CardProps) {
  return (
    <Card className="bg-white shadow-md">
        <CardHeader>
            <div className="flex justify-center items-center gap-2 pb-4 border-b border-gray-300 ">
                <Users className="w-5 h-5" />
                <CardTitle className="text-blue-700">{title}</CardTitle>
            </div>
            <CardDescription className={`${prompt.className}`}>{description}</CardDescription>
        </CardHeader>
    </Card>
  )
}