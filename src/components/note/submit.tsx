import { FormButton } from '../shared/form-button';

export function SubmitButton({ text }: { text: string }) {
  return (
    <div className="sticky bottom-4 mt-4 flex justify-end">
      <FormButton variant="primary">{text}</FormButton>
    </div>
  );
}
