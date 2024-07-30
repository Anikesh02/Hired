import React from 'react'
import heroImg01 from '../assets/images/hero-img06.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
// import icon4 from '../assets/images/adaptive.jpeg'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useUser } from '../UserContext'
import DoctorList from '../components/Course/CourseList'
import EffectiveCard from '../components/EffectiveCard/EffectiveCard'
import Testimonial from '../components/Testimonials/Testimonial'
import { auth, getParameters } from '../firebase.js'


const Home = () => {

  const { user, updateUser } = useUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, photoURL, email } = user;

        getParameters(user.uid).then((data) => {
          updateUser({ uid, name: displayName, photoURL, email, age: data.age, gender: data.gender, role: data.role });
        });
      } else {
        updateUser(null);
      }
    });
    return () => unsubscribe();
  }, [updateUser]);

  console.log(user);
  console.log(user?.name);


  return (
    <>

      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Hero Content  */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px] md:leading-[70px]'>Hello, {user?.name ? user.name : 'User'}.</h1>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px] md:leading-[70px]'>We help you to achieve your dream jobs and great life.</h1>
                <p className='text__para'>
                At Hired, we believe in a better model for the job search experience, one that prioritizes the needs of job seekers and employers alike. Our mission is to provide a higher level of quality and service in recruitment that is both effective and affordable. </p>
                <Link to='/doctors'><button className='btn'>Explore Now</button></Link>

              </div>

              {/* Hero Counter  */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30k+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Companies</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>1500+</h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Courses</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>User's Satisfaction</p>
                </div>
              </div>



            </div>
            {/* Hero Content  */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className='w-full' src={heroImg01} alt="" />
              </div>
              {/* <div className='mt-[30px]'>
                <img src={heroImg02} alt="" className='w-full mb-[30px]' />
                <img src={heroImg03} alt="" className='w-full' />


              </div> */}
            </div>

          </div>
        </div>
      </section>
      {/* Hero Content end*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className='heading text-center'>Our Features</h2>
            <p className='text__para text-center'>World-class packages for freshers. Our Service offers unmatched, expert teachers care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

            <div className='py-[30px] px-5'>
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Course</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">World-class packages for freshers. Our Service offers unmatched, expert teachers care.</p>

                <Link to='/services' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Learn from courses</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">World-class packages for freshers. Our Service offers unmatched, expert teachers care.</p>

                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Apply for Job</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">World-class packages for freshers. Our Service offers unmatched, expert teachers care.</p>

                <Link to='/appointment' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <About /> */}


      {/* Feature Section  */}
      <section>
        <div className="container">
        <EffectiveCard/>
        </div>
      </section>
      {/* Feature Section End */}

      {/* Great Doctors  */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Top Courses</h2>
            <p className="text__para text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates aspernatur ex, amet.</p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* Great Doctors End */}

      {/* FAQ Section 
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className='w-1/2 hidden md:block'><img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className='heading'>Most Questions by our beloved Students</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section> */}
      {/* FAQ Section End */}

      {/* testimonial  */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our visitor's say</h2>
            <p className="text__para text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates aspernatur ex, amet.</p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/* testimonial end */}







    </>
  )
}

export default Home