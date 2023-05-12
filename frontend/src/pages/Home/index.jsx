import React from 'react';

import { Navbar } from '../../components/Navbar'

import person1 from '../../assets/images/person-1.svg';
import person2 from '../../assets/images/person-2.svg';
import person3 from '../../assets/images/person-3.svg';
import comment1 from '../../assets/images/comment-1.svg';
import comment2 from '../../assets/images/comment-2.svg';
import laboInstrutores from '../../assets/images/labo-instrutores.svg';
import AlineAndArthur from '../../assets/images/aline-and-arthur.svg';
import EmilyAndLucas from '../../assets/images/emily-and-lucas.svg';

export function Home() {

  return(

    <div className='bg-background'>
      <div className='container mx-auto'>
        <Navbar />

        <section className='px-5 pt-[3.1875rem]'>
          <div className='flex-col items-center gap-[9.125rem] md:flex md:flex-row'>
            <img src={person1} alt="" />

            <div className='text-center text-white'>
              <h1 className='text-3xl mb-[8.1875rem]'>Bem-vindo(a) ao <span className='text-orange'>LaboTech</span>!</h1>

              <p className='flex flex-col text-center text-lg'>
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
            <p className='text-white text-center text-2xl mb-[3.5625rem]'>
              Um app para melhorar seu <br/>
              bem-estar durante o trabalho!
            </p>
          </div>
        </section>

          <section className='px-5 pt-[3.4375rem]'>
            <div className='flex gap-36'>
              <div>
                <img src={comment1} alt="" />
                <img src={comment2} alt="" className='ml-80'/>
              </div>

              <img src={person2} alt="" />
            </div>
          </section>

          <section className='px-5 pt-36'>
            <h2 className='text-orange text-5xl text-center mb-[4.8125rem]'>Exercícios personalizados</h2>
            <div className='flex-col items-center gap-[9.125rem] md:flex md:flex-row'>
              <img src={person3} alt="" />

              <div className='text-center text-white text-lg flex flex-col gap-16'>  
                  <p>
                    Nós disponibilizaremos <span className='text-orange'>inúmeros</span><br/>
                    <span className='text-orange'>exercícios</span> que irão suprir as suas<br/>
                    mais diversas necessidades!<br/>
                  </p>

                  <p>
                  <span className='text-orange'>Dores na coluna</span> por ficar sentado<br/>
                    o dia inteiro numa <span className='text-orange'>posição desconfortável?</span><br/>
                    Não se preocupe! A gente cuida disso!<br/>
                  </p>

                  <p>
                  <span className='text-orange'>Dores no pescoço</span>? Não seja por isso!<br/>
                    Nós cuidaremos disso também!
                  </p>
              </div>
            </div>
          </section>

            <section className='px-5 pt-36'>
              <h2 className='text-orange text-5xl text-center mb-[4.8125rem]'>Exercícios personalizados</h2>
              <div className='flex-col items-center justify-center gap-48 md:flex md:flex-row'>
                <div className='text-center text-white text-lg flex flex-col gap-16'>  
                    <p>
                      Conheça a nossa equipe de <span className='text-orange'>LaboInstrutores</span>!<br/>
                    </p>

                    <p>
                    São eles quem vão te <span className='text-orange'>guiar por todos os<br/>
                    seus exercícios.</span>!<br/>
                    </p>

                    <p>
                    Eles estão te esperando de braços abertos.<br/>
                    Junte-se agora a eles na <span className='text-orange'>LaboTech</span>!
                    </p>
                </div>

                <img src={laboInstrutores} alt="" />
              </div>
            </section>

            <section className='px-36 pt-56'>
                <div>
                  <img src= {AlineAndArthur} alt="" />
                </div>
            </section>

            <section className='px-36 pt-80 pb-[16.625rem]'>
              <div className='flex justify-between items-center'>
                <img src={EmilyAndLucas} alt="" />
              </div>
            </section>

            <footer className='h-56'>

            </footer>

      </div>
    </div>
  )
}