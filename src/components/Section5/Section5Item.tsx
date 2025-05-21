export interface Section5Item {
  id: number;
  name: string;
  img: string;
}

const Section5Item = ({ name, img }: Omit<Section5Item, "id">) => {
  return (
    <>
      <div className="flex h-[52px] items-center gap-5 rounded-[39px] bg-white bg-opacity-20 px-[15.6px] py-[7.8px] backdrop-blur-[14.86px] md:h-[56px] md:justify-center md:gap-10 md:rounded-[42px] md:px-[16.8px] md:py-[8.4px] md:backdrop-blur-[16px]">
        <img src={img} alt={name} />
        {/* <span className="md:hidden block">{name}</span> */}
      </div>
    </>
  );
};

export default Section5Item;
