import { useState } from 'react';
import arrow from '../../assets/icons/arrow-home.svg';




export function ButtonStart() {
  const [scroll, setScroll] = useState(0);

  function handleScroll() {
    setScroll(window.scrollY)
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <a href='#home' alt="" className={
      scroll >= 500 ? 'fixed bg-orange rounded-full py-3 px-4 right-4 bottom-20 translate-y-full leading-none visible opacity-1 transition-all'
      : 'fixed bg-orange invisible rounded-full py-3 px-4 right-4 bottom-20 translate-y-0 leading-none opacity-0 transition-all'
    }>
      <img src={arrow} alt=""/>
    </a>
  )
}