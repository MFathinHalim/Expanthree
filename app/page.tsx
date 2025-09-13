"use client"
import MemberCard from "@/components/MemberCard";
import { motion, useMotionValue, useSpring } from "framer-motion";

function HoverCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // biar gerakan lebih halus, kita kasih spring
  const smoothX = useSpring(x, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { offsetX, offsetY } = e.nativeEvent as MouseEvent & {
      offsetX: number;
      offsetY: number;
    };
    const target = e.currentTarget;
    const { offsetWidth, offsetHeight } = target;

    const moveX = (offsetX / offsetWidth - 0.5) * 40; // max 40px
    const moveY = (offsetY / offsetHeight - 0.5) * 40;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="flex-1 h-50 hover:scale-110 transition-scale duration-300 bg-[#EDDCCE] rounded-lg"
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
}

function HoverFollowCards() {
  return (
    <section className="hidden md:block my-10 w-full md:max-w-2/3">
      <div className="flex flex-col md:flex-row gap-6">
        {[0, 1, 2].map((i) => (
          <HoverCard key={i} />
        ))}
      </div>
    </section>
  );
}

interface Member {
  name: string;
  role: string;
  photo: string;
}

const members: Member[] = [
  { name: "M. Okta Nugraha", role: "Ketua Kelas", photo: "https://i.pinimg.com/736x/1b/36/72/1b367299ed593625c53ea3630d55acbf.jpg" },
  { name: "Yuda Prawira Rajapati", role: "Wakil Ketua Kelas", photo: "https://i.pinimg.com/736x/1b/36/72/1b367299ed593625c53ea3630d55acbf.jpg" },
  { name: "Mufidah Naifah", role: "Bendahara 1", photo: "https://i.pinimg.com/736x/1b/36/72/1b367299ed593625c53ea3630d55acbf.jpg" },
  { name: "Najla Zeta Khairunisa", role: "Bendahara 2", photo: "https://i.pinimg.com/736x/1b/36/72/1b367299ed593625c53ea3630d55acbf.jpg" },
  { name: "Olivia Br Manulang", role: "Sekretaris 1", photo: "https://i.pinimg.com/736x/1b/36/72/1b367299ed593625c53ea3630d55acbf.jpg" },
  { name: "Santri Nafizah Azzahra", role: "Sekretaris 2", photo: "https://i.pinimg.com/736x/1b/36/72/1b367299ed593625c53ea3630d55acbf.jpg" },
];

function ClassStructure() {
  return (
    <section className="my-6 px-4 md:px-0 w-full flex flex-col items-center">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">Struktur Kelas</h2>
      <div className="flex flex-col gap-4 w-full items-center">
        {members.map((member, i) => (
          <MemberCard key={i} {...member} />
        ))}
      </div>
    </section>
  );
}


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
        <section className="my-6 px-4 md:px-0 bg-[#F3E9E1] w-full md:max-w-2/3">
          <h2 className="text-3xl font-bold mb-3">so... what is expanthree?</h2>
          <p className="text-xl leading-relaxed">
            Wali kelas: Laili Rosa S.Pd
            <br />
            <br />
            Expanthree adalah identitas kebersamaan dari kelas 10.3 SMAN 1 Rejang Lebong tahun ajaran 2025/2026. 
            <br/>
            <br />
            Melalui berbagai kegiatan belajar, proyek kelas, hingga momen seru di luar pelajaran, kami membangun cerita dan kenangan yang tak terlupakan sebagai satu keluarga besar. 
            <br/>
            <br />
            Expanthree hadir sebagai bukti semangat kolaboratif dan semaraknya masa putih abu-abu di SMANSA Rejang Lebong.
          </p>
        </section>
        <HoverFollowCards />
        <ClassStructure />

        <a><h1 className="bg-[#EDDCCE] hover:bg-[#FDDCC3] cursor-pointer font-bold p-5 px-8 text-2xl border border-gray-500">Check Out Our Gallery</h1></a>
      </div>
    </>
  );
}
