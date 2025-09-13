"use client"
import MemberCard from "@/components/MemberCard";

interface Member {
  name: string;
  role: string;
  photo: string;
}

const members: Member[] = [
  { name: "Abdur Rozaq", role: "@rozakqs | 4 Oktober 2010", photo: "https://i.pinimg.com/736x/1b/36/72/1b367299ed593625c53ea3630d55acbf.jpg" },
  { name: "Abiy Khair", role: "@abiykhair | 11 November 2009", photo: "https://i.pinimg.com/736x/1b/36/72/1b367299ed593625c53ea3630d55acbf.jpg" },
  { name: "Aditya juliansyah", role: "@abiykhair | 11 November 2009", photo: "https://i.pinimg.com/736x/1b/36/72/1b367299ed593625c53ea3630d55acbf.jpg" },
  { name: "Al-Qairah Fatharani Pasyah", role: "@_kaiiiraaaa | 8 February 2010", photo: "https://i.pinimg.com/736x/1b/36/72/1b367299ed593625c53ea3630d55acbf.jpg" },
  { name: "Bima", role: "@_kaiiiraaaa | 8 February 2010", photo: "https://i.pinimg.com/736x/1b/36/72/1b367299ed593625c53ea3630d55acbf.jpg" },
];

export default function Home() {
  return (
    <>
      <header className="relative md:py-3">
        <div className="relative">
          <img
            src="/Images/blur.png"
            alt="Background blur"
  className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-1/3 max-w-xs opacity-50 -z-10 pointer-events-none"
          />

          <h2 className="text-3xl text-center md:text-5xl font-bold uppercase">
            Welcome To
          </h2>
          <h1 className="text-5xl text-center md:text-7xl font-bold uppercase">
            Expanthree
          </h1>
          <p className="text-xl text-center mt-2">
            Satukan Langkah, Ukir Sejarah
          </p>
        </div>

        <img
          src="/Images/jumbotron_homepage.png"
          alt="Logo"
          className="mx-auto mt-4 w-full md:max-w-2/3 h-auto"
        />
      </header>

      <div className="flex flex-col items-center">
        <section className="flex flex-col gap-4 w-full items-center">           
            {members.map((member, i) => (
            <MemberCard key={i} {...member} />
            ))}
        </section>
      </div>
    </>
  );
}
