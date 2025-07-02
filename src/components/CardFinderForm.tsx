
import { EnhancedCardFinderForm } from './EnhancedCardFinderForm';

interface CardFinderFormProps {
  onBack: () => void;
}

export const CardFinderForm = ({ onBack }: CardFinderFormProps) => {
  return <EnhancedCardFinderForm onBack={onBack} />;
};
