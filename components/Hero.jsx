"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Image from "next/image";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//import DevImg from "./DevImg";
// input your dev pics..
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text*/}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Learn Forex Trading from
            </div>
            <h1 className="h1 mb-4">Everthing Forexpro Academy</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Are you currently thinking of starting your journey into becoming
              a pro trader. We got you covered. We Teach both beginners and
              intermediate Traders how to become a pro trader.
            </p>
            {/*Button sections*/}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Us Today
                  <Send size={18} />
                </Button>
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[30px] hover:text-primary transition-all"
            />
          </div>
          {/* images*/}
          <div className="hidden md:flex relative">
            <div
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark
            h-[500px] w-[500px] bg-no-repeat absolute -top-1 -right-2
            flex flex-col items-center justify-center
            "
            >
              <Image src="/trader.png" alt="img1" height={100} width={100} />
            </div>
          </div>
        </div>
        {/* icons */}
        <div
          className="hidden md:flex absolute left-2/4 bottom-44 
        xl:bottom-12 animate-bounce"
        >
          {" "}
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
