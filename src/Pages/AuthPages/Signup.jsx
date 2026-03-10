import React from 'react'
import Container from '../../Shared/Container'
import Signupgroup from "../../assets/Group 2.png"

const Signup = () => {
  return (
    <section className='signup_main'>
      <Container>
        <div className=''>
          <div className="flex justify-between items-center pb-9 pl-18 pr-35">
            <figure><img src={Signupgroup} alt="Signupgroup" /></figure>
            <div className="p-4.5 rounded-2xl bg-white/10">
              <div className="bg-[linear-gradient(0deg,#101324_0%,#10172D_3%,#101C3A_6%,#112D6C_17%,#11388B_25%,#113C97_30%,#191C25_100%)] p-4.5 rounded-xl">
                <h2 className='text-white text-center font-medium text-[30px]'>Join the Mission</h2>
                <p className='text-[#F3E8FF] text-[20px] font-normal text-center pt-5 pb-7.5'>Create your account and start creating amazing stickers</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Signup