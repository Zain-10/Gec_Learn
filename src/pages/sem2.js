import React from 'react'
import { Dropdown } from "@nextui-org/react";
import styles from "../styles/Home.module.css"
import Footer from '@/components/footer';
import Image from 'next/image'

export default function Sem2() {
  return (
    <div>
      <div className={styles.main_container}>
        <div className={styles.container}>
            <div className="flex">
                <div className="mt-7 mr-2 text-red-600 font-extrabold text-3xl">YouTube</div>
                <div className={styles.heading_main}>Playlists</div>
            </div>

            <Dropdown >
              <Dropdown.Button shadow color="" textColor="secondary">
               VECTOR CALCULUS
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/playlist?list=PL7lBkW4pLsIJYAjp-I4n8EYrvDVQnz2UE" target='_blank' rel="noreferrer">RVS MATHS ACADEMY</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://www.youtube.com/playlist?list=PLZKuc5xrMu7cJUrcTBWDtEolQ57ZAlEhz" target='_blank' rel="noreferrer">BTECH MATHEMATICS</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                ENGINEERING PHYSICS
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/playlist?list=PLLdgF9L8fzPm6DEBDrQlDDTaq9YPUGDKu" target='_blank' rel="noreferrer">MODULE 1</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/playlist?list=PLLdgF9L8fzPmxCraOx3LHpFyKjMsRgfZy" target='_blank' rel="noreferrer">MODULE 2</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtu.be/6VAz5muYYFM" target='_blank'>MODULE 3</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/playlist?list=PLLdgF9L8fzPlRf1Egvb3HfKaM_efm33NS" target='_blank' rel="noreferrer">MODULE 4</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtu.be/pHihpNtflC8" target='_blank' rel="noreferrer">MODULE 5</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                ENGINEERING CHEMISTRY
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/playlist?list=PLZVhX6SybwSRech_3yZ1eeDIpKMUdTnuY" target='_blank' rel="noreferrer">MODULE 1</a>
                </Dropdown.Item>
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/playlist?list=PLbufGhEnWbUZxtyaeV5shAzLlYAAZK5gW" target='_blank' rel="noreferrer">MODULE 2</a>
                </Dropdown.Item>
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/playlist?list=PLbufGhEnWbUYfCJA0Ph1usB8piRfNO5i9" target='_blank' rel="noreferrer">MODULE 3</a>
                </Dropdown.Item>
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/playlist?list=PLbufGhEnWbUY3xiN7tPf-66FBtuZA6vkZ" target='_blank' rel="noreferrer">MODULE 4</a>
                </Dropdown.Item>
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtu.be/mFC1xM7VyWQ" target='_blank' rel="noreferrer">MODULE 5 PART A</a>
                </Dropdown.Item>
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtu.be/CjbggAb5gh4" target='_blank' rel="noreferrer">MODULE 5 PART B</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                ENGINEERING MECHANICS
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/LETSDISCUSS1" target='_blank' rel="noreferrer">LET S DISCUSS</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                ENGINEERING GRAPHICS
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UCJqt0z8fJviKtQU0EylY_xQ" target='_blank' rel="noreferrer">ENGINEERING GRAPHICS BY NITHIN</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://www.youtube.com/playlist?list=PL1NN6oSi0QHb-UJSZULD7X1bQjlq1WYHM" target='_blank' rel="noreferrer">TECH SAGACATY</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UC2bMBiAKrOkxZcS9ErDHJjw" target='_blank' rel="noreferrer">GRAPHICS ZONE 2021</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                BASICS OF CIVIL AND MECHANICAL
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/VISHNUSHAJIKANNETH" target='_blank' rel="noreferrer">IGNITED VISHNU SHAJI KANEETH</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UC7cLFGuJ9nocb-aYH-jOr0Q" target='_blank' rel="noreferrer">MECH CIV</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/NehaShanBtechLectures" target='_blank' rel="noreferrer">STUDY WITH NEHA SHAN (BCE)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UCpZc3h96dUesE_JjX9hN6zA" target='_blank' rel="noreferrer">COURTEOUS CONCEPTS</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                BASICS OF ELECTRICAL AND ELECTRONICS
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/ShastraTechnicalInstitute" target='_blank' rel="noreferrer">SHASTRA TECHNICAL INSTITUTE (BEC)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UC7cOwgD4GPyzoJHItVXiRYQ" target='_blank' rel="noreferrer">KTU ECE CLASS ROOM (BEE)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UCy0fLJ_x2C9LKi9vIqbMOAA" target='_blank' rel="noreferrer">SREENATH VADASSERY(BEE)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UClorWwmi7GhAt4W9I2z04gA" target='_blank' rel="noreferrer">FASEEN (BEE)</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                PROGRAMMING IN C
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/playlist?list=PL-2kJQOjdItC9ZKo8lanPAdI-ScaJYQQn" target='_blank' rel="noreferrer">JISU JACOB</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className={styles.dropdowns}>
            <Dropdown>
              <Dropdown.Button shadow color="" textColor="secondary">
                PROFESSIONAL COMMUNICATION
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/playlist?list=PL2YNNMqXo7dvo4u-eQP2QEQVsnS2p2NjA" target='_blank' rel="noreferrer">PRINCY ANN THOMAS</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
            
            <Footer/>
        </div>
      </div>
    </div>
  )
}
