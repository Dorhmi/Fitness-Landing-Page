import Htext from "@/shared/Htext"
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/16/solid"
import Benefit from "./Benefit"
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import ActionButton from "@/shared/ActionButton"
import { motion } from "framer-motion"
import { BenefitType } from "@/shared/types"




const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className=" h-6 w-6"/>,
        title:"State of the Art Facilities",
        description: 
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    },
}

type Props = {
    setSelectedPage: (value:string) => void
}

const Benefits = ({setSelectedPage} :Props) => {
return (
    <section id="benefits" className=" bg-gray-20 py-20">
        {/* All section */}
        <motion.div 
        className=" w-5/6 mx-auto"
        onViewportEnter={()=>setSelectedPage('benefits')}
        >
            {/* Header */}
            <motion.div 
            className=" md:w-3/6"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: { opacity: 0, x: -50},
                visible: {opacity:1, x: 0},
            }}
            >
                <Htext>MORE THAN JUST A GYM.</Htext>
                <p className=" text-sm my-5">
                We provide world class fitness equipment, trainers and classes to
                get you to your ultimate fitness goals with ease. We provide true
                care into each and every member.
                </p>
            </motion.div>
            {/* Benefits */}
            <motion.div 
            className=" md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit: BenefitType , index) => (
                    <Benefit key={index} {...benefit} setSelectedPage={setSelectedPage} />
                ))}
            </motion.div>
            {/* img and description */}
            <div className=" mt-16 md:flex items-center justify-between ">
                {/* img */}
                <img className=" mx-auto " src={BenefitsPageGraphic} alt="BenefitsPageGraphic" />
                {/* description */}
                <div className=" ml-8 mt-16">
                    {/* title */}
                    <div className=" relative z-10 ">
                        <div className=" before:absolute before:content-abstractwaves before:z-[-1] before:-top-[75px] before:-left-[60px]">
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once : true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity:0, x: 50},
                                visible: {opacity:1, x: 0},
                            }}
                            >
                                <Htext>
                                MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                <span className=" text-primary-500">FIT</span>.
                                </Htext>
                            </motion.div>
                        </div>
                        {/* desc */}
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{
                            hidden: {opacity:0, x: 50},
                            visible: {opacity:1, x: 0},
                        }}
                        >
                        <p className=" my-5">
                            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                            egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                            fames vitae vitae quis. Quis amet vulputate tincidunt at in
                            nulla nec. Consequat sed facilisis dui sit egestas ultrices
                            tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                            Felis orci diam odio.
                        </p>
                        <p className=" mb-8">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </p>
                        </motion.div>
                    </div>
                    {/* Action button */}
                    <div className=" mt-14 relative z-10">
                        <div className=" before:absolute before:content-sparkles before:-bottom-[73px] before:left-[126px] before:z-[-1]">
                            <ActionButton setSelectedPage={setSelectedPage}> Join Now </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
)
}

export default Benefits