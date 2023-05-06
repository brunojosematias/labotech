import React from 'react';
import { Navbar } from '../../components/Navbar';

import person1 from '../../assets/images/person-1.svg';

export function Home() {
  return(
    <div className=''>
      <Navbar/>

          <section className='px-5 bg-background pt-[3.1875rem]'>
            <div className='flex-col items-center gap-[9.125rem] md:flex md:flex-row'>
              <img src={person1} alt="" />

              <div className='text-center text-white'>
                <h1 className='text-3xl mb-[8.1875rem]'>Bem-vindo(a) ao <span className='text-orange'>LaboTech</span>!</h1>

                <p className='flex flex-col text-center text-sm'>
                  <span className='mb-5'>
                    Se sente <span className='text-orange'>cansado</span>? <span className='text-orange'>Travado</span>?
                  </span> 

                  Deixe com a gente!<br/>
                  Com as nossas listas de exercícios<br/>
                  personalizados você voltará<br/>
                  a trabalhar com sua capacidade<br/>
                  máxima!
                </p>
              </div>
            </div>

            <h2 className='mt-[4.9375rem] text-orange text-5xl text-center'>O app</h2>

            <div className='flex ml-36 mt-[5.3125rem]'>
              <p className='text-white text-center text-2xl'>
                Um app para melhorar seu <br/>
                bem-estar durante o trabalho!
              </p>
            </div>
          </section>

          <section>
            
          </section>
        </div>
  )
}