import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
const Working = () => {
  return (
    <>
      <div className="bg-[#F4F7FC] h-full w-full mt-36 p-8 sm:p-12 lg:p-20">
        <div className="text-center mb-12">
          <h3 className="font-bold text-3xl mb-4">Our Working Process</h3>
          <p className="text-xl text-gray-600">
            We’re here to provide the services to boost the efficiency and productivity of your business.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-5xl"
          >
            <CarouselContent>
              {[{
                title: "Exploration and Surveying",
                image: "/working/ExplorationandSurveying.jpg",
              },
              {
                title: "Drilling and Extraction",
                image: "/working/extraction.jpeg",
              },
              {
                title: "Refining and Processing",
                image: "/working/RefiningandProcessing.jpeg",
              },
              {
                title: "Research and Innovation",
                image: "/working/ResearchandInnovation.jpg",
              },
              ].map((item, index) => (
                <CarouselItem key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                  <div className="p-6">
                    <Card className="h-full bg-white rounded-xl shadow-lg">
                      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={500}
                          height={500}
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                        <span className="text-2xl font-semibold text-black mb-4">{item.title}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-between mt-4">
              <CarouselPrevious className="bg-blue-600 text-white rounded-full p-2" />
              <CarouselNext className="bg-blue-600 text-white rounded-full p-2" />
            </div>
          </Carousel>
        </div>
      </div>


    </>
  )
}

export default Working
