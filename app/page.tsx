
import HeroCategoriesDropdown from "@/components/HeroCategoriesDropdown";
import SimpleSlider from "@/components/SimpleSlider";
import NavBar from "@/components/common/Navbar/NavBar";

export default async function Home() {
  const res = await fetch(
    "https://api.shope.com.bd/api/v1/public/hero-categories"
  );
  const data = await res.json();
  return (
    <div className="">
      <NavBar />
      <div className="w-screen bg-red-500 relative h-[380px]">
        <SimpleSlider />
        <div></div>
        <HeroCategoriesDropdown categories={data} />
      </div>
    </div>
  );
}
