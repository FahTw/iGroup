import React from "react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type FileItem = {
  id: string
  title: string
  owner: string
  date: string
}

type LinkItem = {
  id: string
  title: string
  href: string
  owner: string
  date: string
}

const mockFiles: FileItem[] = [
  {
    id: "f1",
    title: "ไฟล์เอกสารสำคัญนำเสนอ",
    owner: "it66070032",
    date: "15:44 21/12/2025",
  },
  {
    id: "f2",
    title: "presentation-doc.docx",
    owner: "it66070032",
    date: "15:44 21/12/2025",
  },
]

const mockLinks: LinkItem[] = [
  {
    id: "l1",
    title: "สั่งเก็บข้อมูล Research",
    href: "https://research.com/research",
    owner: "it66070032",
    date: "15:44 21/12/2025",
  },
  {
    id: "l2",
    title: "ลิ้งค์เก็บข้อมูล Research",
    href: "https://research.com/research",
    owner: "it66070032",
    date: "15:44 21/12/2025",
  },
  {
    id: "l3",
    title: "ลิ้งค์เก็บข้อมูล Research",
    href: "https://research.com/research",
    owner: "it66070032",
    date: "15:44 21/12/2025",
  },
]

const StatCard: React.FC<{ label: string; value: number; color?: string }> = ({ label, value, color = "bg-gray-200" }) => {
  return (
    <div className={`rounded-lg p-6 ${color} text-white min-w-[140px]`}>
      <div className="text-sm opacity-90">{label}</div>
      <div className="text-2xl font-bold mt-2">{value}</div>
    </div>
  )
}

const ItemCard: React.FC<{
  title: string
  owner: string
  date: string
  variant?: "file" | "link"
  href?: string
}> = ({ title, owner, date, variant = "file", href }) => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex items-start justify-between p-4">
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
            <span className="text-xs">{owner}</span>
            <span className="mx-1">•</span>
            <span className="text-xs">{date}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">ลบ</span>
          {variant === "file" ? (
            <Button size="sm" variant="default">ดาวน์โหลด</Button>
          ) : (
            <Link href={href ?? "#"} className="inline-block">
              <Button size="sm" variant="default">ไปยังลิ้งค์</Button>
            </Link>
          )}
        </div>
      </CardHeader>
    </Card>
  )
}

const Archeived: React.FC = () => {
  const files = mockFiles
  const links = mockLinks

  return (
    <div className="max-w-6xl mx-auto px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Archived <span className="ml-2">📦</span></h1>
        <div className="flex items-center gap-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard label="Files" value={files.length} color="bg-red-500" />
        <StatCard label="Links" value={links.length} color="bg-blue-600" />
        <StatCard label="All" value={files.length + links.length} color="bg-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Files</h2>
          <div className="flex flex-col gap-4">
            {files.map((f) => (
              <ItemCard key={f.id} title={f.title} owner={f.owner} date={f.date} variant="file" />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Links</h2>
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <ItemCard key={l.id} title={l.title} owner={l.owner} date={l.date} variant="link" href={l.href} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Archeived