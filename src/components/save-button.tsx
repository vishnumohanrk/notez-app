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
        className="button bg-indigo-700 transition-colors focus:ring-indigo-700 focus-visible:bg-indigo-800 hover:bg-indigo-800"
      >
        {text}
      </button>
    </div>
  );
}
