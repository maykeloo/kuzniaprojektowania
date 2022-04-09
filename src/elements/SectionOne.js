import styled from "styled-components";
import {device} from './Body'
import Typewriter from 'typewriter-effect';

//ASSETS
import kuznia from '../assets/kuzniablue.svg'

export const SectionOneWrapper = styled.section`
    width: 100vw;
    background: white;
    padding: 10rem 0;
`

export const SectionOneContent = styled.div`
    width: 85%;
    margin: 0 auto;
`

export const Title = styled.span`
    font-size: 1.6rem;
    display: block;
    font-weight: 200;
`

export const OfferBox = styled.div`
    width: 100%;
    position: relative;

    .Typewriter {
    position: absolute;
    right: 0;
    top: 40%;
    transform: translateX(45%);
    color: var(--blue);
    font-size: 8rem;
    font-weight: 700;
    line-height: 10rem;
    }
`
export const LeftBox = styled.div`
    width: 50%;

    @media ${device.tablet} {
        width: 100%;
    }
`

export const OfferTitle = styled.h2`
    color: var(--blue);
    font-size: 4rem;
    margin-top: 1rem;
`

export const OffetTextBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const TextOneBox = styled.div`
    display: flex;
    gap: 2rem;
`
export const TextOne = styled.span`
    color: #ADADAD;
`
export const SubText = styled.span`
    display: block;
    margin-top: 1rem;
    width: 70%;
    color: black;
`

export const LabelsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 60%;
    margin-top: 2rem;

    @media ${device.tablet} {
        width: 100%;
    }
`

export const Label = styled.div`
    padding: 0.5rem 2rem;
    background-color: rgba(36, 57, 133, 0.7);
    color: white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`

export const Kuznia = styled(Typewriter)``