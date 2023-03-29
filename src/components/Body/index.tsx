import { FC, useEffect, useState } from "react";
import { deleteStatistics, updateStatistics } from "../../service/database";
import { Field } from "../../types/field";
import { Container, FieldContainer, FieldTitle, RemoveButton, ValueContainer, ValueInput } from "./styles";

interface BodyProps {
  data: Field[];
}

const Body: FC<BodyProps> = ({
  data,
}) => {
  const [dataValues, setDataValues] = useState<Field[]>([]);

  const handleRemove = (id: string) => {
    try {
      deleteStatistics(id);
      const newData = dataValues.filter((item) => item.id !== id);
      setDataValues(newData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = (id: string, value: string) => {
    try {
      updateStatistics(id, value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setDataValues(data);
  }, [data]);
  
  return (
    <Container>
      {dataValues.map((item) => (
        <FieldContainer key={item.id}>
          <FieldTitle>{item.field}</FieldTitle>
          <ValueContainer>
            <ValueInput
              type="text"
              defaultValue={item.value}
              onBlur={(event) => handleSave(item.id, event.target.value)}
            />
            <RemoveButton onClick={() => handleRemove(item.id)}>
              <span>-</span>
            </RemoveButton>
          </ValueContainer>
        </FieldContainer>
      ))}
    </Container>
  )
}

export default Body;