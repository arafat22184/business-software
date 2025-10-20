import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import carousel4 from "../assets/carousel4.png";

const CarouselCard = () => {
  const carouselData = [
    {
      img: carousel1,
      id: 1,
      title: "$215,925  |  $30,000 Entry Fee",
    },
    {
      img: carousel2,
      id: 2,
      title: "$215,925  |  $30,000 Entry Fee",
    },
    {
      img: carousel3,
      id: 3,
      title: "$215,925  |  $30,000 Entry Fee",
    },
    {
      img: carousel4,
      id: 4,
      title: "$215,925  |  $30,000 Entry Fee",
    },
  ];
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="max-w-7xl mx-auto my-5"
    >
      <CarouselContent>
        {carouselData.map((carousel) => (
          <CarouselItem key={carousel.id} className="md:basis-1/2 lg:basis-1/3">
            <Card className={"bg-slate-100"}>
              <CardContent className="flex flex-col">
                <div className="w-full">
                  <img
                    src={carousel.img}
                    alt="carousel"
                    className="w-full object-center object-cover"
                  />
                </div>
                <br />
                <h1>{carousel.title}</h1>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselCard;
