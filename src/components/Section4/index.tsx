import SeamlessIntegrations from "@assets/img-section4/seamless-integrations.svg";

export default function Section4({ id }: { id: string }) {
  return (
    <div id={id} className="z-20 flex flex-col gap-5 border-b border-t border-[#26262A0F] bg-white p-5 pb-8 pt-6 md:mt-0 md:flex-row md:justify-between md:gap-12 md:rounded-3xl md:border md:p-8 md:pb-7">
      <div className="flex w-full items-center z-20">
        <div className="rounded-[24px] overflow-hidden mix-blend-luminosity grayscale filter w-full">
          <img
            src={SeamlessIntegrations}
            alt="image"
            className="w-full h-auto block"
          />
        </div>
    </div>
      <div className="z-20 flex w-full items-start justify-center md:mt-[26px] md:pl-16">
        <div className="max-w-auto flex flex-col gap-5  md:max-w-[560px] md:gap-6">
          <h1 className="text-normal font-[400] !leading-[120%] text-primary md:text-5xl">
            Seamless Integrations Across Platforms
          </h1>
          <div className="flex flex-col gap-4 md:max-w-[550px]">
            <p className="text-[16px] leading-[140%] md:text-[18px] font-[400] md:max-w-[500px]">
              Cortensor offers robust integration capabilities, bridging Web2
              and Web3 ecosystems with a comprehensive open-source approach.
            </p>
            <ul className="flex list-disc flex-col gap-4 pl-3 font-[400] marker:text-[24px] text-[16px] md:text-[18px]">
              <li>
                Web2: REST API, WebSocket, client SDKs for seamless AI service
                integration (OpenAI, etc.).
              </li>
              <li>
                Web3: Web3 SDKs, smart contract integration for AI in
                blockchain.
              </li>
              <li>
                Open-Source: Supports diverse AI models for flexible, accessible
                solutions.
              </li>
            </ul>
            <p className="text-[16px] font-thin leading-[140%] md:text-[18px]">
              Our framework makes AI accessible across varied tech stacks,
              empowering use in both traditional and decentralized environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

