import SectionTitle from './SectionTitle';
import SectionText from './SectionText'
import SkillCard from './SkillCard';

export default function SectionSkill() {
    return (
        <section className="py-20 bg-primaryGray" id='Skill'>
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Skill</SectionTitle>
                <SectionText>Some of my abilities</SectionText>
                <div className='flex flex-wrap -mx-4 mt-20'>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/javascript.svg"
                            level="advanced"
                            name="Javascript"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/react.svg"
                            level="advanced"
                            name="React Js"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/nextjs-icon.svg"
                            level="advanced"
                            name="Next Js"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/nodejs-icon.svg"
                            level="advanced"
                            name="Node"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/laravel.svg"
                            level="advanced"
                            name="laravel"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/python.svg"
                            level="Beginner"
                            name="Python"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/sass.svg"
                            level="advanced"
                            name="Sass/Sccs"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/tailwindcss-icon.svg"
                            level="advanced"
                            name="Tailwindcss"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/bootstrap.svg"
                            level="advanced"
                            name="Bootstrap 5"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/typescript.svg"
                            level="Beginner"
                            name="Typesscript"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/gulp.svg"
                            level="Beginner"
                            name="Gulp Js"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/mongodb.svg"
                            level="Beginner"
                            name="Mongodb"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/mysql.svg"
                            level="Beginner"
                            name="Mysql"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/dart.svg"
                            level="Beginner"
                            name="Dart"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-6 pb-8">
                        <SkillCard
                            image="/skills/php.svg"
                            level="Advanced"
                            name="PHP"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}
