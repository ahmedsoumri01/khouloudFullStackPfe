"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Review {
  id: string
  author: {
    name: string
    image?: string
  }
  rating: number
  comment: string
  date: string
}

interface ReviewsSectionProps {
  reviews: Review[]
}

const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, "Le commentaire doit contenir au moins 10 caractères"),
})

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const [showForm, setShowForm] = useState(false)
  const [selectedRating, setSelectedRating] = useState(0)

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: 0,
      comment: "",
    },
  })

  function onSubmit(values: z.infer<typeof reviewSchema>) {
    console.log(values)
    // Handle review submission
    setShowForm(false)
    form.reset()
  }

  // Add this console.log to check the reviews data
  console.log("Reviews data:", reviews)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Avis clients</h2>
        <Button onClick={() => setShowForm(!showForm)}>{showForm ? "Annuler" : "Laisser un avis"}</Button>
      </div>

      {showForm && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note</FormLabel>
                  <FormControl>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          className="focus:outline-none"
                          onClick={() => {
                            setSelectedRating(rating)
                            field.onChange(rating)
                          }}
                        >
                          <Star
                            className={`h-6 w-6 ${
                              rating <= selectedRating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre commentaire</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Partagez votre expérience..." className="min-h-[100px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Publier l'avis</Button>
          </form>
        </Form>
      )}

      <div className="space-y-4">
        {Array.isArray(reviews) ? (
          reviews.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex items-center gap-4 mb-2">
                <Avatar>
                  <AvatarImage src={review.author.image} alt={review.author.name} />
                  <AvatarFallback>{review.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{review.author.name}</div>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="ml-auto text-sm text-muted-foreground">{review.date}</div>
              </div>
              <p className="text-muted-foreground">{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  )
}

