import { section5Data } from "./section5Data";
import Section5Item from "./Section5Item";

export default function Section5() {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex w-max animate-marquee gap-10">
        {[...section5Data, ...section5Data].map((item, index) => (
          <Section5Item key={`${index}-id`} name={item.name} img={item.img} />
        ))}
      </div>
    </div>
  );
}
