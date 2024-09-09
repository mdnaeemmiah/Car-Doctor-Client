import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row p-4">
                <div className='w-1/2 relative'>
                    <img src={person}
                        className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts}
                        className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 left-44 border-white border-8" />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-3xl font-bold text-orange-700'>About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn  bg-orange-700 text-white mt-4">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;