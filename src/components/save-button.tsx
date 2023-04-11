type SaveButtonProps = {
  text: string;
  onClick: () => void;
};

export function SaveButton({ onClick, text }: SaveButtonProps) {
  return (
    <div className="sticky bottom-0 flex justify-end pb-4">
      <button
        type="button"
        onClick={onClick}
        className="button bg-indigo-800 focus:ring-indigo-800"
      >
        {text}
      </button>
    </div>
  );
}
