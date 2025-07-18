import { ChangeEvent } from "react";
interface SearchBarProps {
  className?: string;
  query: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

const SearchBar = ({
  className = "",
  query,
  onChange,
  onSubmit,
}: SearchBarProps) => {
  return (
    <div className={`${className}`}>
      <input
        value={query}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onSubmit) {
            onSubmit();
          }
        }}
        className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
        placeholder="Search for advocate"
      />
    </div>
  );
};

export default SearchBar;
