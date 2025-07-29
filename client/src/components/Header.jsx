import { menu } from "../assets/icons/icons";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-3">
      <div className="text-4xl font-extrabold text-[#FC93AD]">SkillForge</div>
      <div>
        <img src={menu} alt="Profile" className="w-8 h-8" />
      </div>
    </header>
  );
};

export default Header;
