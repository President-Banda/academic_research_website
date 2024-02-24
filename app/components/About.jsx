import Image from 'next/image'
import placeholderImage from '../../public/images/placeholder-photo.webp';
import Link from 'next/link';

const About = () => {
  return (
    <div className="grid grid-cols-5">
        <div className="grid justify-center items-center row-span-3 bg-[#FBFFFB] rounded-lg p-2">
            <Image
            src={placeholderImage}
            alt="seo kim"
            quality={10}
            placeholder="blur"
            width={200}
            height={200}
            // sizes={"100vw"}
            className=' object-contain rounded-xl mb-5'
            />
            <span className='text-xl font-inter'>Seongyoon Kim</span>
            <span className=' font-nunito font-light'>
                Senior Cloud Engineer, Gamer
            </span>

            <span className=' font-nunito font-normal mt-5'>
                <Link href="mailto:ibenyxkg@duck.com">Mail</Link>
            </span>
        </div>

        <div className="grid col-span-3 h-32 rounded-lg p-2 font-nunito">
            <h1 className='text-2xl font-medium m-2'>
                About Me: <span className='font-normal'>Cloud Architect by Day, Gamer by Night</span>
            </h1>

            <p className=' leading-loose text-justify mb-5 p-2'>
                I'm a passionate individual with two distinct sides: a cloud engineer building scalable solutions by day and 
                a dedicated gamer exploring virtual worlds by night. This unique combination fuels my creativity and drives 
                me to constantly push boundaries in both realms.
            </p>


            <h2 className='text-xl font-medium m-2'>
                <span>Cloud Engineering:</span>
            </h2>
            <p className=' leading-loose text-justify mb-5 p-2'>
                Over 5 years of experience designing, deploying, and managing cloud infrastructure on platforms like AWS, Azure, and GCP.
                Expertise in automation tools like Terraform, Ansible, and CloudFormation, streamlining infrastructure provisioning and management.
                Security-conscious approach, ensuring robust and compliant cloud environments.
                Thriving on challenges and finding innovative solutions to complex cloud problems.
            </p>


            <h2 className='text-xl font-medium m-2'>
                <span>Gaming:</span>
            </h2>
            <p className=' leading-loose text-justify mb-5 p-2'>
                Veteran gamer with a deep understanding of various game genres and mechanics.
                Active in the gaming community, participating in online discussions, tournaments, and events.
                Creative problem solver, applying strategic thinking and resource management skills honed in gaming to real-world challenges.
                Passionate about fostering a positive and inclusive gaming environment for all.

This unique blend of technical expertise and gaming passion fuels my drive to create innovative solutions and contribute meaningfully to both the cloud and gaming communities. I'm constantly learning, exploring, and pushing boundaries, always striving to make a positive impact.
            </p>
        </div>
    </div>
  )
}

export default About