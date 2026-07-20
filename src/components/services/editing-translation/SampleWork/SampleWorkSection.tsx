import SampleWorkHeader from "./SampleWorkHeader";
import SampleDocument from "./SampleDocument";

export default function SampleWorkSection() {
  return (
    <section className="border-t border-slate-100 pt-12">
      <SampleWorkHeader />
      <SampleDocument />
    </section>
  );
}
