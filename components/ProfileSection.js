import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";

export default function profileSection() {
    return (
        <section className="py-28" id="profile">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Profile</SectionTitle>
                <SectionText>About me briefly</SectionText>
                <div className="flex lg:items-center md:items-start flex-wrap mx-auto xl:w-9/12 mt-10">
                    <div className="md:w-5/12 w-full px-10 mb-10 md:mb-0">
                        <img src="Profile.jpg" className="w-full" alt="Foto Profile" />
                    </div>
                    <div className="md:w-7/12 w-full px-10">
                        <div>
                            <p className="text-lg leading-relaxed">
                                Hello, I am <span className="font-bold">Rizky Fauzi</span>,
                                <br/>
                                Student at Polytechnic IDN & mentor at Pemuda Coding Academy.
                                Currently learning Javascript & React Js. And teaching about web programming.
                                <br/>
                                Also doing research in Web Technology, physics, Cognitive Science and UI/UX Design.
                                Founder of Pemuda Coding Academy, online learning with live mentoring
                                <br/>
                                A passionate software engineer who love to solved problems realted to technology and someone who love to make somethings with technology. I love to collaboration with each others and love to share my little bit experience to each others
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
