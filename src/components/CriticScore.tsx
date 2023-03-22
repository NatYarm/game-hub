import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <Badge
      variant="outline"
      colorScheme={color}
      fontSize="12px"
      paddingX={1.5}
      paddingY={0.5}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
