type SaveButtonProps = {
  text: string;
  onClick: () => void;
};

export function SaveButton({ onClick, text }: SaveButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-4 right-4 rounded-md bg-indigo-800 px-8 py-2 font-semibold"
    >
      {text}
    </button>
  );
}
