import { LucideAreaChart, LucideArrowUpDown, LucideChevronUp, LucideFilter, LucideRadioTower, LucideScanEye, LucideSlidersHorizontal } from "lucide-react"
import { Link as ScrollLink } from 'react-scroll'
import Advantage from "../components/Advantage"
import Card from "../components/Card"
import Description from "../components/Description"
import Navbar from "../components/Navbar"
import Question from "../components/Question"
import Spotlight from "../components/Spotlight"

export default function Home() {
    const cards = [
        {title: "Dynamic graph", description: "Effortlessly navigate your dataset with just a few clicks. Instantly compute and visualize key statistics like marker distribution, density, FSTs, and Tajima’s D across custom chromosome intervals for any sample subset.", icon : <LucideAreaChart/>},
        {title: "Advanced filtering", description: "Streamline your analysis with our intuitive interface. Filter by marker types, ploidy levels, missing data, heterozygosity, MAF, genes, and more. Easily annotate and enrich your data, create up to ten distinct groups, and discriminate between markers—all on the fly, with no bioinformatics expertise required.", icon : <LucideFilter/>},
        {title: "Easy in and out", description: "Import and export effortlessly across multiple formats including VCF, HAPMAP, Flapjack, DartSeq, and Intertek. Transition smoothly to subsequent analyses with options like FASTA, GFF3, BED, PHYLIP, and Nexus. Enjoy enhanced performance with automatic compression or opt for server storage for convenient remote access.", icon : <LucideArrowUpDown/>},
        {title: "Visualization tools", description: "Unlock the full potential of your data with embedded third-party applications like Flapjack-bytes and the Integrated Genome Viewer (IGV). Explore your data visually with powerful, user-friendly tools built right into the application.", icon : <LucideScanEye/>},
        {title: "Tailor Your Experience", description: "Operate GIGWA seamlessly either on a server or locally on your own computer. Manage access with database-specific permissions. Customize your homepage to fit your needs and integrate seamlessly with other information portals.", icon : <LucideSlidersHorizontal/>},
        {title: "Connect and Extend", description: "Upon upload, your data is instantly accessible through standardized Application Programming Interfaces (APIs) such as BrAPI and GA4GH. Enhancing connectivity with community tools like Flapjack.", icon : <LucideRadioTower/>},
    ]

    const advantages = [
        "Data types (SNP, InDels)",
        "Supports haploid, diploid, polyploid, phased",
        "Metadata enrichment (experimental design, phenotypic data)",
        "Functional annotations (gene, chromosome position)",
        "Imports formats (VCF, Hapmap, Plink, Flapjack, Intertek)",
        "Exports formats (VCF, Hapmap, Plink, Flapjack, PLINK, DARwin)",
        "Real time filters",
        "API Compatible",
        "Available on Windows, Linux & MacOS",
        "Online server",
        "Local machine",
        "Scalability of billions of genotypes",
        "Discriminate markers between groups",
        "Authentication and Single-Sign-On compatibility"
    ]

    const partners = [
        "partners/ibp.png", "partners/icarda.png", "partners/cirad.png", "partners/ebs.png", "partners/alliance.png", "partners/ird.png", "partners/cgiar.png", "partners/usda.png"
    ]

    const halfLength = Math.ceil(partners.length / 2);
    const partnersLeftHalf = partners.slice(0, halfLength);
    const partnersRightHalf = partners.slice(halfLength);

    const faqs = [
        {
            question: "Is Gigwa available for free ?",
            answer: "Gigwa is an open-source software, and is available for free under the Affero GNU General Public License v3.0. You can download it from the GitHub repository."
        },
        {
            question: "What does the acronym 'Gigwa' stand for, and how does it reflect the application's purpose ?",
            answer: "Gigwa stands for 'Genotype Investigator for Genome-Wide Analyses'. The name reflects the application's purpose, which is to provide a comprehensive tool for managing and analyzing genotyping data."
        },
        {
            question: "Can Gigwa be used on different operating systems, and is it web-based ?",
            answer: "Gigwa is a multi-platform application, and is compatible with Windows, Mac, and Linux operating systems. It is not web-based, and must be installed on your local machine."
        },
        {
            question: "What is the maximum genotyping data size that Gigwa can effectively handle ?",
            answer: "Gigwa is designed to handle large-scale genotyping data, and can scale to billions of genotypes. As an example of its capabilities, Gigwa can handle and filter the 3000 rice genomes but it will depend on your server specifications."
        },
        {
            question: "What types of data formats can be used to feed the MongoDB database in Gigwa ?",
            answer: "Gigwa supports a variety of data formats, including VCF, Hapmap, Plink, Flapjack, and Intertek. These formats can be imported into the MongoDB database for analysis and visualization."
        }
    ]
    
    return (
            <div id="main" className="relative flex flex-col gap-32 justify-center items-center p-4 md:p-16">
                <Navbar />
                <section className="flex flex-col gap-12 w-full md:w-4/5 pt-32 md:p-0">
                    <div className="flex flex-col items-center gap-8">
                    <div className="w-1/3 rounded-md bg-white p-2 flex justify-center">
	                    <img src="logo.png" alt="gigwa" className="w-3/4" />
	                </div>
                    <h6>The ultimate tool to to manage high-density genotyping data</h6>
                    </div>
                    <div className="px-8 py-32">
                        <div className="grid gap-8 items-start justify-center relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-light-primary rounded-lg blur opacity-75"></div>
                                <img src="app.svg" alt="app" className="relative rounded-lg leading-none flex items-center  w-full" />
                        </div>
                    </div>
                </section>

                <section id="features" className="flex flex-col items-center justify-center gap-12 md:gap-24 w-full md:w-10/12 pt-32 md:pt-60 md:pb-20">
                    <div className="flex gap-3 justify-center whitespace-nowrap">
                        <h2>Main</h2><h2 className="text-primary">features:</h2>
                    </div>
                    <Spotlight className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 group" data-spotlight>
                        {cards.map((card, index) => (
                            <Card key={index} title={card.title} description={card.description} icon={card.icon} />
                        ))}
                    </Spotlight>
                </section>

                <section className="flex flex-col items-center justify-center gap-12 md:gap-24 w-full md:w-9/12 pt-32 md:pt-60 md:pb-20">
                    <div className="flex flex-col md:flex-row md:gap-16">
                        <div className="flex flex-col gap-8 md:w-1/2">
                            <h3>Easily manage, share, explore, visualize NGS genotyping data.</h3>
                            <Description number={1} title="Multi-platform" description="Offers a seamless experience across Windows, Mac, and Linux, ensuring accessibility and consistency for users on different operating systems."/> 
                            <Description number={2} title="Technologies" description="Gigwa utilizes cutting-edge technologies, including Java for cross-platform compatibility, MongoDB for efficient data management, and Docker for streamlined deployment. These technologies form the foundation of Gigwa, delivering a modern and reliable bioinformatics solution."/> 
                        </div>
                        <div className="flex flex-col gap-8 md:w-1/2">
                            <Description number={3} title="Open Source" description="Offers a seamless experience across Windows, Mac, and Linux, ensuring accessibility and consistency for users on different operating systems."/> 
                            <Description number={4} title="Big data" description="Filter in real time large volume of geneotyping data."/> 
                        </div>
                    </div>
                </section>

                <section id="download" className="flex flex-col items-center justify-center gap-12 md:gap-24 w-full md:w-10/12 pt-32 md:pt-60 md:pb-20">
                    <div className="flex flex-col lg:flex-row gap-3 justify-center">
                        <h2 className="whitespace-nowrap text-center">One application, </h2><div className="flex gap-3 justify-center"><h2 className="text-primary">many</h2><h2>advantages</h2></div>
                    </div>
                    <Advantage version="1.0" advantages={advantages} />
                </section>
            
                <section id="partners" className="flex flex-col items-center justify-center gap-12 md:gap-24 w-full md:w-10/12 pt-32 md:pt-60 md:pb-20">
                    <h2>Partners</h2>
                    <div className="p-16 flex flex-col md:flex-row gap-8 md:gap-32 bg-light-secondary1 rounded-2xl w-full justify-center">
                        <div className="flex flex-col gap-8">
                            {partnersLeftHalf.map((partner, index) => (
                                <img key={index} src={partner} alt={"partner" + index} className="max-h-20 object-contain" />
                            ))}
                        </div>
                        <div className="flex flex-col gap-8">
                            {partnersRightHalf.map((partner, index) => (
                                <img key={index} src={partner} alt={"partner" + index} className=" max-h-20 object-contain"/>
                            ))}
                        </div>
                    </div>
                </section>
            
                <section id="faq" className="flex flex-col items-center justify-center gap-12 md:gap-24 w-full md:w-10/12 pt-32 md:pt-60 md:pb-20 ">
                    <div className="flex flex-col lg:flex-row gap-3 justify-center">
                        <div className="flex gap-3 justify-center">
                            <h2 className="whitespace-nowrap"> We've got </h2>
                            <h2 className="text-primary">answers</h2>
                        </div>
                        <h2 className="whitespace-nowrap text-center">to your question</h2>
                    </div>
                    <div className="w-full px-4">
                        <div className="w-full rounded-2xl bg-light-secondary1 p-2">
                            {faqs.map((faq, index) => (
                                <Question key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </section>
            
                <section id="contact" className="flex flex-col items-center justify-center gap-12 md:gap-24 w-full md:w-3/5 py-32 md:py-80">
                    <div className="flex flex-col lg:flex-row gap-3 justify-center">
                        <h2 className="whitespace-nowrap">Any other questions ?</h2>
                        <h2 className="text-primary text-center whitespace-nowrap">Contact us !</h2>
                    </div>
                    
                    <a href="mailto:gigwa@cirad.fr" className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-primary before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300 text-4xl">
                        gigwa@cirad.fr
                    </a>
                </section>
            
                <ScrollLink activeClass="active" smooth spy to="main" className="fixed bottom-8 right-8 cursor-pointer hidden md:block rounded-full bg-primary p-2">
                    <LucideChevronUp className="h-12 w-12"/>
                </ScrollLink>
            </div>
    )
}