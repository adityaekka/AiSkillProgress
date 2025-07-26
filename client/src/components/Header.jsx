import { profile } from "../assets/icons/icons";
const Header = () => {
  return (
    <header className="w-full bg-transparent px-6 py-4 flex justify-between items-center">
      <div className="text-4xl font-bold text-[#fc93ad]">SkillForge</div>

      <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
        <img
          src={profile}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
