import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Section7 = ({
  idVision,
  idMission,
}: {
  idVision: string;
  idMission: string;
}) => {
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  const isVisionInView = useInView(visionRef, { once: true });
  const isMissionInView = useInView(missionRef, { once: true });

  return (
    <>
      <hr className="h-[.1px] border-0 bg-primary opacity-20 " />
      <motion.div
        ref={visionRef}
        initial={{ opacity: 0, y: 120 }}
        animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.6, ease: "easeOut" }}
        id={idVision}
        className="block pb-[30px] text-center md:flex md:justify-between md:gap-8 md:text-start"
      >
        <div className="pt-10 text-center md:pl-[115px]">
          <p className="text-[32px] font-medium md:text-[48px] md:leading-[120%]">
            Vision
          </p>
        </div>
        <div className="mt-10 flex-col gap-4 text-start text-[16px] font-[300] md:mr-[100px] md:flex md:max-w-[683px] md:text-[18px]">
          <p>
            At Cortensor, we aim to democratize AI through a decentralized,
            community-powered network—delivering the critical last mile of AI
            access and integration.
          </p>
          <p>
            We’re building a robust inferencing infrastructure using community
            and commodity hardware, distributing workloads across diverse
            devices for cost-effective, accessible AI without relying solely on
            high-end GPUs. By leveraging open-source models, we promote
            inclusive access and collaborative innovation.
          </p>
          <p>
            Our long-term vision extends beyond inference to synthetic data
            generation and generalized AI task management. Through a multi-layer
            blockchain, we ensure privacy, incentivize contributions, and enable
            shared revenue.
          </p>
          <p>
            Cortensor envisions a world where AI is seamlessly integrated into
            everyday life—open-source, community-governed, and as powerful as
            platforms like OpenAI and HuggingFace, built to accelerate
            innovation through collective effort.
          </p>
        </div>
      </motion.div>

      <hr className="h-[.1px] border-0 bg-primary opacity-20 " />

      <motion.div
        ref={missionRef}
        initial={{ opacity: 0, y: 120 }}
        animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.6, ease: "easeOut" }}
        id={idMission}
        className="block pb-[30px] text-center md:flex md:justify-between md:gap-8 md:text-start"
      >
        <div className="pt-10 text-center md:pl-[115px]">
          <p className="text-[32px] font-medium md:text-[48px] md:leading-[120%]">
            Mission
          </p>
        </div>
        <div className="mt-10 flex-col gap-4 text-start text-[16px] font-[300] md:mr-[100px] md:flex md:max-w-[683px] md:text-[18px]">
          <p>
            At Cortensor, our mission is to build a decentralized AI
            infrastructure that makes advanced AI accessible and affordable for
            all.
          </p>
          <p>
            We emphasize community collaboration, open-source models, and
            inclusivity—uniting AI professionals and practitioners through
            proper incentives to drive innovation.
          </p>
          <p>
            As a blockchain-powered alternative to traditional platforms,
            Cortensor aims to make AI a universally available resource,
            revolutionizing delivery and ensuring equitable access, real-world
            integration, and shared success.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Section7;
