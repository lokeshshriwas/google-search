import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";

export default function Home() {
  return (
    <main className="bg-stone-900 text-white h-screen">
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/330px-Google_2015_logo.svg.png"
          alt="Google logo"
          width={300}
          height={100}
          className="m-auto"
        />
        <HomeSearch />
      </div>
    </main>
  );
}
