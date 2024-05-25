import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featureImg from '../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="feature-item  text-white pt-8 my-16 ">
            <SectionTitle subHeading={'check it out'} heading={'Feature Item'}></SectionTitle>
            <div className="flex flex-col md:flex-row items-center py-20 pt-12 px-36">
                <div >
                    <img src={featureImg} alt="" />
                </div>
                <div className="md:ml-10 space-y-2">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem impedit quaerat neque inventore natus. Ad tempora doloribus, similique fugiat consequatur amet repudiandae magnam saepe, voluptatem recusandae omnis laborum id error quidem nostrum est provident rem! Tempore quisquam expedita perspiciatis iste quos veniam nostrum odit necessitatibus! Aliquam accusamus sed minus ex!</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;