import { useState } from "react";
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";

function Home() {

  const router = useRouter();

  const handleYear = ()=>{
    setYear(true)
  }
    return ( 
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className="absolute mt-4 flex flex-col w-96">
            <Image src="/assets/ch_img.png" width="60" height="40" className="ml-3"></Image>
            <div className="font-medium text-xl ml-4 text-white">CH MEMORIAL </div><div className="font-medium text-md -mt-1 ml-4 text-white">ONLINE LIBRARY</div>
            <div className="font-bold text-3xl ml-4 mt-2">GEC_LEARN</div>  
          </div>
          <Image src="/assets/main_bg.png" width="650" height="400"></Image>
          <button className={styles.button_17} onClick={() => router.push("/FirstYear")}>1st YEAR</button>
          <div className="mt-6">Other years coming soon.....</div>
          
          <Footer/>
        </div>
      </div>
      
    );

}

export default Home;