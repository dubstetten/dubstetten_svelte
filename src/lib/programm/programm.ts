//Import Images for automatic image optimization
import lionsDen from "$lib/assets/img/lions_den_icon.jpeg?width=320;480;640;768&format=webp;avif;jpg";
import danubianDub from "$lib/assets/img/danubian_icon.jpeg?width=320;480;640;768&format=webp;avif;jpg";
import wickedAndBonny from "$lib/assets/img/wckd-nd-bnny.png?width=320;480;640;768&format=webp;avif;jpg";

export type ProgrammItem = {
  title?: string;
  description?: string;
  startsAt?: string;
  slug?: string;
  thumbnail?: string[];
  longDesciption?: string;
};

export const programm: ProgrammItem[] = [
  {
    startsAt: "You, Now, Here",
  },
  {
    startsAt: "February 2023",
    title: "Early Dub Tickets",
    description:
      "Book early and save 30% on your ticket! Limited to 100 tickets.",
  },
  {
    startsAt: "May 2023",
    title: "Final Lineup",
    description:
      "Book early and save 30% on your ticket! Limited to 100 tickets.",
  },
  {
    title: "Great Dub Opening 2023",
    startsAt: "Fr. 21. July 2023 - 14 Uhr",
  },
  {
    title: "Lion`s Den",
    description: "Lion`s Den dubs your Brain out",
    startsAt: "Fr. 21. July 2023 - 20 Uhr",
    slug: "lions-den",
    thumbnail: lionsDen,
    longDesciption: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
  },
  {
    title: "Wicked and Bonny",
    description: "Lion`s Den dubs your Brain out",
    startsAt: "Fr. 21. July 2023 - 22 Uhr",
    thumbnail: wickedAndBonny,
  },
  {
    title: "Danubian Dub",
    description: "Danubian Dub dubs your Brain out",
    startsAt: "Sa. 22. July 2023 - 00 Uhr",
    slug: "danubian-dub",
    thumbnail: danubianDub,
  },
  {
    title: "Danubian Dub",
    description: "Danubian Dub dubs your Brain out",
    startsAt: "Sa. 22. July 2023 - 00 Uhr",
    slug: "danubian-dub",
    thumbnail: danubianDub,
  },
  {
    startsAt: "@Sunrise",
    title: "Sunrice Acro Joga",
    description: "Sun & Fun",
  },
  {
    startsAt: "8:00 - 10:00",
    title: "Workshop",
    description: "Joga",
  },
  {
    startsAt: "16:00 - 18:00",
    title: "Workshop",
    description: "Soundsystem",
  },
  {
    title: "Lion`s Den",
    description: "Lion`s Den dubs your Brain out",
    startsAt: "Sa. 22. July 2023 - 20 Uhr",
    slug: "lions-den",
    thumbnail: lionsDen,
  },
  {
    title: "Wicked and Bonny",
    description: "Lion`s Den dubs your Brain out",
    startsAt: "Sa. 22. July 2023 - 22 Uhr",
    thumbnail: wickedAndBonny,
  },
  {
    title: "Danubian Dub",
    description: "Danubian Dub dubs your Brain out",
    startsAt: "So. 23. July 2023 - 00 Uhr",
    slug: "danubian-dub",
    thumbnail: danubianDub,
  },
  {
    startsAt: "Wait for Dubstetten 2024",
  },
];
