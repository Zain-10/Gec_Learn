import React from 'react'
import styles from "../styles/Home.module.css"
import Image from 'next/image'

export default function Footer() {
  return (
    <div className={styles.footer_main}>
        <div>
          <div className="text-white flex justify-center text-sm ml-4">An initiative by :</div>
          <div className="flex justify-center font-bold text-xl text-white ml-2 mt-1">MSF GEC</div>
        </div>
        <div>
          <div className="text-white flex justify-center text-sm pr-4 text-center font-semibold">Suggestions and <br/>Contributions :</div>
          <a href="http://wa.me/918139841238"><Image src="/assets/whatsapp.png" width="30" height="20" className="ml-12 mt-1"></Image></a>
        </div>
    </div>
  )
}
