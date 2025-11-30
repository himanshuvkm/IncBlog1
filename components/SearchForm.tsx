"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import SearchFormReset from "@/components/SearchFormReset";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchForm = ({ query }: { query?: string }) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(query || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchValue.trim();
    router.push(trimmed ? `/?query=${trimmed}` : "/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-2xl mx-auto flex items-center bg-white rounded-full shadow-sm border border-gray-200 focus-within:border-gray-400 focus-within:shadow-md transition-all duration-200"
    >
      {/* Search Icon inside input */}
      <Search className="absolute left-4 text-gray-400 w-5 h-5 pointer-events-none" />

      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search articles by keyword..."
        className="pl-10 pr-12 py-3 w-full border-none focus-visible:ring-0 text-base text-gray-900 placeholder:text-gray-400 rounded-full bg-transparent"
        autoComplete="off"
      />

      {/* Clear Button (X) */}
      {searchValue && <SearchFormReset onReset={() => setSearchValue("")} />}

      <Button
        type="submit"
        size="icon"
        className="absolute right-2 h-8 w-8 rounded-full hover:bg-gary-400 text-white transition-colors duration-200"
      >
        <Search className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default SearchForm;
