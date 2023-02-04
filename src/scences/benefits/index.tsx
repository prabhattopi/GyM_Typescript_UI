import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits:Array<BenefitType>=[
  {
    icon:<HomeModernIcon className="h-6 w-6"/>,
    title: "State of the Art Facilities",
    description: "ljof fidjijf djfofdj fjf jdfjdf jdfdf",


  },
  {
    icon:<UserGroupIcon className="h-6 w-6"/>,
    title: "100's of Diverse Classes",
    description: "ljof fidjijf djfofdj fjf jdfjdf jdfdf",


  },
  {
    icon:<AcademicCapIcon className="h-6 w-6"/>,
    title: "Expert and Pro Trainers",
    description: "ljof fidjijf djfofdj fjf jdfjdf jdfdf",


  },
]
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};


const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits"
    className="mx-auto min-h-full w-5/6 py-20"
    >
     <motion.div
      onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
     >
      <div className="md:my-5 md:w-3/5">
       <HText>MORE THAN JUST A GYM.</HText>
       <p className="my-5 text-sm">
        We provide world class fitness equipments, trainers and classes get you to your fitness goals with ease. We provide training care into each and every member.

       </p>
      </div>
      {/* BENEFITS */}
      <div className="md:flex items-center justify-between gap-8 mt-5">
        {benefits.map((benefit:BenefitType)=>(
          <Benefit
          key={benefit.title}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
          setSelectedPage={setSelectedPage}

          />
        ))}
      </div>
     </motion.div>

    </section>
  )
}

export default Benefits