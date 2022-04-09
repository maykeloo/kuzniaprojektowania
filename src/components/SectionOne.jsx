import React from 'react'
import { Kuznia, Label, LabelsBox, LeftBox, OfferBox, OfferTitle, SectionOneContent, SectionOneWrapper, SubText, TextOne, TextOneBox, Title } from '../elements/SectionOne'

const SectionOne = () => {

  const labels = ['Stworzę dla Ciebie profesjonalną stronę internetową', 'Przygotuję projekt strony WWW', 'Roczna gwarancja', 'Wszystko od A - Z', 'Bezpłatna wycena indywidualna']

  return (
    <SectionOneWrapper>
      <SectionOneContent>
        <Title>OFERTA</Title>
        <OfferBox>
        <Kuznia
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('Kuźnia <br/> projekt <br/> owania')
              .pauseFor(2500)
              .deleteAll()
              .pauseFor(1500)
              .start();
          }}
        />
        <LeftBox>
          <OfferTitle>
            Strony internetowe 
            <br /> oraz blogi
          </OfferTitle>
          <TextOneBox>
            <TextOne>STRONY WIZYTÓWKOWE</TextOne>
            <TextOne>SPA</TextOne>
            <TextOne>BLOGI</TextOne>
          </TextOneBox>
          <SubText>
          Buduję strony internetowe dla małych i większych biznesów. Od projektu graficznego, przez wdrożenie strony aż przez utrzymywanie jej za ciebie. 
          </SubText>
          <LabelsBox>
            {labels.map(label => <Label key={label}>{label}</Label>)}
          </LabelsBox>
        </LeftBox>
        </OfferBox>
      </SectionOneContent>
    </SectionOneWrapper>
  )
}

export default SectionOne