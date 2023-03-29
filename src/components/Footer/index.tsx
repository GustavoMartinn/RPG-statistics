import { FC, useRef } from "react";
import { addStatistics } from "../../service/database";
import { AddButton, Container, FieldInput } from "./styles";

interface FooterProps {
  getData: () => void;
}

const Footer: FC<FooterProps> = ({
  getData,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAddField = () => {
    const field = inputRef.current?.value

    if (!field) return

    try {
      addStatistics({ field, value: '' })
      getData()
      inputRef.current.value = ''
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <FieldInput type="text" placeholder="Adicionar novo campo" ref={inputRef} />
      <AddButton onClick={handleAddField}>
        <span>+</span>
      </AddButton>
    </Container>
  )
}

export default Footer;