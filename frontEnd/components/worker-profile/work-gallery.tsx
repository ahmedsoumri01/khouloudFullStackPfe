"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface WorkItem {
  type: "image" | "video"
  url: string
  thumbnail: string
  title: string
}

interface WorkGalleryProps {
  works: WorkItem[]
}

export function WorkGallery({ works }: WorkGalleryProps) {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Mes réalisations</h2>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">Tout</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="videos">Vidéos</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {works.map((work, index) => (
              <div key={index} className="relative aspect-square cursor-pointer" onClick={() => setSelectedWork(work)}>
                <Image
                  src={work.thumbnail || "/placeholder.svg"}
                  alt={work.title}
                  fill
                  className="object-cover rounded-lg"
                />
                {work.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">▶️</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="images" className="mt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {works
              .filter((work) => work.type === "image")
              .map((work, index) => (
                <div
                  key={index}
                  className="relative aspect-square cursor-pointer"
                  onClick={() => setSelectedWork(work)}
                >
                  <Image
                    src={work.thumbnail || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {works
              .filter((work) => work.type === "video")
              .map((work, index) => (
                <div
                  key={index}
                  className="relative aspect-square cursor-pointer"
                  onClick={() => setSelectedWork(work)}
                >
                  <Image
                    src={work.thumbnail || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">▶️</div>
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="max-w-4xl">
          {selectedWork?.type === "video" ? (
            <video src={selectedWork.url} controls className="w-full rounded-lg" />
          ) : (
            <div className="relative aspect-video">
              <Image src={selectedWork?.url || ""} alt={selectedWork?.title || ""} fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

