import SectionTitle from '@/components/SectionTitle';
import { ProjectItem } from '@/modules/home/components/ProjectItem';

import project1 from '../../../public/assets/images/project-1.jpg'
import project2 from '../../../public/assets/images/project-2.jpg'
import project3 from '../../../public/assets/images/project-3.jpg'
import project4 from '../../../public/assets/images/project-4.jpg'
import project5 from '../../../public/assets/images/project-5.jpg'
import Button from '@/components/Button';
import ArrowRight from '../../../public/assets/icons/arrow-right';

const ProjectsSection = () => {
    return (
        <section className="pt-[60px] pb-[60px]">
            <div className="container flex flex-col gap-[60px]">
                <SectionTitle>Our Projects</SectionTitle>
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-wrap gap-[30px]">
                        <ProjectItem
                            image={project1}
                            className="w-[570px]"
                            href="/projects"
                            projectName="Sample Project"
                        />
                        <ProjectItem
                            image={project2}
                            className="w-[570px]"
                            href="/projects"
                            projectName="Sample Project"
                        />
                        <ProjectItem
                            image={project3}
                            className="w-[270px]"
                            href="/projects"
                            projectName="Sample Project"
                            overlayClassName="pl-[20px]"
                        />
                        <ProjectItem
                            image={project4}
                            className="w-[470px]"
                            href="/projects"
                            projectName="Sample Project"
                        />
                        <ProjectItem
                            image={project5}
                            className="w-[370px]"
                            href="/projects"
                            projectName="Sample Project"
                        />
                    </div>
                    <Button variant="dark" className="ml-auto">All Projects <ArrowRight /></Button>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
