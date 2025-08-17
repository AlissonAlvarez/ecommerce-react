import styled from 'styled-components'
import img from '../../assets/images/Logo.svg'

const Section = styled.section`
    position:relative;
    display: flex;
    align-items: center;   
`

const Img = styled.div`
    img{
        width: 200px;
    }            
`
function Logo() {
    return (
        <Section>
            <Img>
                <img src={img} alt='Logo' />
            </Img>
        </Section>
    )
}

export default Logo