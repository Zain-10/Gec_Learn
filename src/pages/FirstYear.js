import React from 'react'
import { useRouter } from "next/navigation";
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import Footer from '@/components/footer';

export default function FirstYear() {

    const router = useRouter();

  return (
    <div>
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className="absolute -ml-52 mt-9 font-bold text-2xl">1st Year</div>
          <div className="mt-3">
            <Image src="/assets/bg-image.jpg" width="360" height="200" className="rounded-3xl shadow-xl"></Image>
          </div>
          <button className={styles.button_17} onClick={() => router.push("/sem1")}>1st SEM</button>
          <button className={styles.button_17} onClick={() => router.push("/sem2")}>2nd SEM</button>
          
          <div className='flex'>
            <a href="https://drive.google.com/drive/folders/1IzNm8RcGVR-5oFiuo7K3yF4LrWvvWrQj" target='_blank' rel="noreferrer">
              <div className='ml-14 mr-6'>
                <img src="/assets/note.png" width="50" height="50" className=""></img>
                <div className='mt-1 font-bold'>Notes</div>
              </div>
            </a>
            <a href="https://drive.google.com/drive/folders/1DYByzXTrCpzKxCfnG1QJoF4cFHXtiU6y" target='_blank' rel="noreferrer">
              <div className='mr-5'>
                <img src="/assets/qp.png" width="55" height="55" className="mx-4"></img>
                <div className='font-bold text-center'>Question<div className='-mt-1'>Papers</div></div>
              </div>
            </a>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}
