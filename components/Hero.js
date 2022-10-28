import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function Hero() {
    return (
        <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20">
            <div className="container mx-auto px-10 2xl:px-0">
                <Navbar />
                <div className="text-center xl:mt-20 lg:mt-10 md:mt-6">
                    <h1 className="text-3xl text-white font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 mx-auto">A front-end developer & IT enthusiast from Indonesia</h1>
                    <p className="text-white text-opacity-60 text-lg 2xl:w-3/12 xl:w-4/12 lg:w-6/12 mx-auto mt-5 leading-loose">Started learning programming since 2020 when the pandemic of COVID-19</p>
                    <Button pill variant="yellow" className="mt-14">Learn</Button>
                </div>
            </div>
        </div>
    )
}
