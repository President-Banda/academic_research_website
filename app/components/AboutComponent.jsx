import Image from 'next/image'
import placeholderImage from '../../public/images/placeholder-photo.webp';
import Link from 'next/link';

import AcademicCapDark from '../icons/academic_cap_dark';
import World from '../icons/world';
import MailIcon from '../icons/mail';
import TickIcon from '../icons/tick_icon';
import Misc from '../icons/misc';

const AboutComponent = () => {
  return (
    <div className="sm:grid-flow-row md:grid md:grid-cols-5">
        <div className="grid justify-center items-center bg-[#FBFFFB] rounded-lg p-2 md:h-32">
            <Image
            src={placeholderImage}
            alt="seo kim"
            quality={10}
            placeholder="blur"
            width={200}
            height={200}
            // sizes={"100vw"}
            className=' object-contain rounded-xl mb-5 sm:flex'
            />
            <span className='sm:text-base text-xl font-inter'>Seongyoon Kim</span>
            <span className='sm:text-base font-nunito font-light'>
                Senior Cloud Engineer, Gamer
            </span>

            <div className='justify-center md:justify-start flex font-nunito font-normal text-blue-400 mt-5'>
                <MailIcon />    
                <Link href="mailto:ibenyxkg@duck.com" className='ml-2'>Mail</Link>
            </div>
        </div>

        <div className="grid col-span-3 rounded-lg p-2 font-nunito">
            <div>
                <h1 className='text-xl md:text-2xl font-medium m-2'>
                About Me: <span className='font-normal'>Cloud Architect by Day, Gamer by Night</span>
                </h1>

                <p className=' leading-loose text-justify mb-5 p-2 text-slate-700'>
                    I'm a passionate individual with two distinct sides: a cloud engineer building scalable solutions by day and 
                    a dedicated gamer exploring virtual worlds by night. This unique combination fuels my creativity and drives 
                    me to constantly push boundaries in both realms.
                </p>
            </div>


            <div>
                <h2 className='text-xl font-medium m-2'>
                <span>Cloud Engineering:</span>
                </h2>
                <p className=' leading-loose text-justify mb-5 p-2 text-slate-700'>
                    Over 5 years of experience designing, deploying, and managing cloud infrastructure on platforms like AWS, Azure, and GCP.
                    Expertise in automation tools like Terraform, Ansible, and CloudFormation, streamlining infrastructure provisioning and management.
                    Security-conscious approach, ensuring robust and compliant cloud environments.
                    Thriving on challenges and finding innovative solutions to complex cloud problems.
                </p>
            </div>


            <div>
                <h2 className='text-xl font-medium m-2'>
                <span>Gaming:</span>
                </h2>
                <p className=' leading-loose text-justify mb-5 p-2 text-slate-700'>
                    Veteran gamer with a deep understanding of various game genres and mechanics.
                    Active in the gaming community, participating in online discussions, tournaments, and events.
                    Creative problem solver, applying strategic thinking and resource management skills honed in gaming to real-world challenges.
                    Passionate about fostering a positive and inclusive gaming environment for all.

    This unique blend of technical expertise and gaming passion fuels my drive to create innovative solutions and contribute meaningfully to both the cloud and gaming communities. I'm constantly learning, exploring, and pushing boundaries, always striving to make a positive impact.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div>
                    <h2 className='flex flex-row text-xl font-medium m-2'>
                        <AcademicCapDark />
                        <span className='ml-2'>Education</span>
                    </h2>

                    <ul className="list-none">
                        <li className='text-slate-700 p-2'>
                            <div className="flex">
                                <TickIcon /> &nbsp;
                                PhD in Philosophy, 2021 - Present
                            </div>
                            <span className='text-sm'>University of Michigan</span>
                        </li>

                        <li className='text-slate-700 p-2'>
                            <div className="flex">
                                <TickIcon /> &nbsp;
                                PhD in Philosophy, 2021 - Present
                            </div>
                            <span className='text-sm'>University of Michigan</span>
                        </li>

                        <li className='text-slate-700 p-2'>
                            <div className="flex">
                                <TickIcon /> &nbsp;
                                PhD in Philosophy, 2021 - Present
                            </div>
                            <span className='text-sm'>University of Michigan</span>
                        </li>
                    </ul>

                </div>

                <div>
                    <h2 className='flex flex-row text-xl font-medium m-2'>
                        <World />
                        <span className='ml-2'>Interests</span>
                    </h2>

                    <ul className="list-nome">
                        <li className='text-slate-700 flex p-2'>
                            <Misc />
                            Gaming
                        </li>
                        <li className='text-slate-700 flex p-2'>
                            <Misc />
                            Sports
                        </li>
                        <li className='text-slate-700 flex p-2'>
                            <Misc />
                            Gym
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutComponent