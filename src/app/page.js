import Banner from "@/components/banner/Banner";
import ChooseStudios from "@/components/choosestudios/ChooseStudios";
import Featured from "@/components/Featured/Featured";
import HomeStudios from "@/components/HomeStudios/HomeStudios";



export default function Home() {
  return (
         <div>
          <Banner></Banner>
          <Featured></Featured>
          <HomeStudios></HomeStudios>
          <ChooseStudios></ChooseStudios>
         </div>
  );
}
