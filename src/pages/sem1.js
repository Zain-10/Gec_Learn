import React from 'react'
import { Dropdown } from "@nextui-org/react";
import styles from "../styles/Home.module.css"
import Footer from '@/components/footer';
import Image from 'next/image'

export default function Sem1() {
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
                LINEAR ALGEBRA AND CALCULUS
              </Dropdown.Button>
              <Dropdown.Menu color="primary" aria-label="Actions" textColor="primary">
                <Dropdown.Item
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/RVSMathsAcademy" target='_blank'>RVS MATHS ACADEMY</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/BTechMathematics" target='_blank'>BTECH MATHEMATICS</a>
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
                  <a href="https://youtube.com/c/SajeevMohan" target='_blank'>SAJEEV MOHAN 4 PHYSICS </a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UC97ibScoiBRlM1fahAmZW4g" target='_blank'>TARGET KTU</a>
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
                  <a href="https://youtube.com/channel/UChqeXU2cm5byUJlWtkUIJXQ" target='_blank'>ANJANA GOPINADH</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UCptJp4seC8ScP2vxqYoWEXQ" target='_blank'>CHEMISTRY TOPPER</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UCXhr4X9u8FN6J55vWyqd2TQ" target='_blank'>SIMPLE LEARNING ACADEMY</a>
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
                  <a href="https://youtube.com/c/LETSDISCUSS1" target='_blank'>LET S DISCUSS</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UCei-KPCET7sFlvKGeGdPLig" target='_blank'>LEARN WITH JOSY VAIDYAN</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/KrishnenduSivadas" target='_blank'>KRISHNENDHU SIVADAS</a>
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
                  <a href="https://youtube.com/channel/UCJqt0z8fJviKtQU0EylY_xQ" target='_blank'>ENGINEERING GRAPHICS BY NITHIN</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/TechSagacity" target='_blank'>TECH SAGACATY</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UC2bMBiAKrOkxZcS9ErDHJjw" target='_blank'>GRAPHICS ZONE 2021</a>
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
                  <a href="https://youtube.com/c/VISHNUSHAJIKANNETH" target='_blank'>IGNITED VISHNU SHAJI KANEETH</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UC7cLFGuJ9nocb-aYH-jOr0Q" target='_blank'>MECH CIV</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/c/NehaShanBtechLectures" target='_blank'>STUDY WITH NEHA SHAN (BCE)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UCpZc3h96dUesE_JjX9hN6zA" target='_blank'>COURTEOUS CONCEPTS</a>
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
                  <a href="https://youtube.com/c/ShastraTechnicalInstitute" target='_blank'>SHASTRA TECHNICAL INSTITUTE (BEC)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UC7cOwgD4GPyzoJHItVXiRYQ" target='_blank'>KTU ECE CLASS ROOM (BEE)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UCy0fLJ_x2C9LKi9vIqbMOAA" target='_blank'>SREENATH VADASSERY(BEE)</a>
                </Dropdown.Item>
                <Dropdown.Item
                  css={{marginTop : 10}}
                  key="new"
                  icon={<Image src={'/assets/IconYoutube.png'} width="27" height="25"></Image>}
                >
                  <a href="https://youtube.com/channel/UClorWwmi7GhAt4W9I2z04gA" target='_blank'>FASEEN (BEE)</a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>

            <Footer />
        </div>
      </div> 
    </div>
  )
}
