import { Wrapper } from "../../../components";

export const Motto = () => {
  return (
    <Wrapper name="experience">
      <div className="py-14 bg-slate-950 font-black ">
        <div className=" inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl ">
          <div className="bg-gradient-to-tr from-[#7ffff9] to-[#7d4eff] opacity-30 w-5 h-5"></div>
        </div>

        <div className="text-center text-3xl">THINK TWICE</div>
        <div className="text-center text-5xl">
          CODE <span className="text-sky-500">ONCE</span>!
        </div>
        <div className="text-center text-xs mt-8 font-normal">
          "Pense duas vezes, codifique uma!"
        </div>
      </div>
    </Wrapper>
  );
};
