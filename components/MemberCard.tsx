import { motion } from "framer-motion";

interface Member {
  name: string;
  role: string;
  photo: string;
}

export default function MemberCard({ name, role, photo }: Member) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-[#EDDCCE] rounded-xl p-2 md:p-4 flex items-center gap-4 w-full md:max-w-2/3"
    >
      <img
        src={photo}
        alt={name}
        className="w-20 h-20 border ml-3 mr-1 my-3 object-cover rounded-full"
      />
      <div>
        <p className="text-2xl text-gray-500">{role}</p>
        <h3 className="text-4xl font-semibold">{name}</h3>
      </div>
    </motion.div>
  );
}