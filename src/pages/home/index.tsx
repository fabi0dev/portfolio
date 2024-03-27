import { Header } from "../../components";
import { About, Experience, Footer, Motto, Profile } from "./sections";
import "./styles.scss";

export default function Home() {
  return (
    <>
      <div className="bg-slate-900">
        <Header />

        <Profile />
        <About />

        <Experience />

        <Motto />
        <Footer />
      </div>
    </>
  );
}
