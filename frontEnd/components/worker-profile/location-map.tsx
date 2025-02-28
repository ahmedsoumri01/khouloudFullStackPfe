"use client"

import { useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader"

interface LocationMapProps {
  latitude: number
  longitude: number
  address: string
}

export function LocationMap({ latitude, longitude, address }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        version: "weekly",
      })

      const { Map } = await loader.importLibrary("maps")
      const { Marker } = await loader.importLibrary("marker")

      const map = new Map(mapRef.current!, {
        center: { lat: latitude, lng: longitude },
        zoom: 15,
        mapId: "YOUR_MAP_ID",
      })

      new Marker({
        map,
        position: { lat: latitude, lng: longitude },
        title: address,
      })
    }

    initMap()
  }, [latitude, longitude, address])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Localisation</h2>
      <div ref={mapRef} className="w-full h-[300px] rounded-lg" />
    </div>
  )
}

