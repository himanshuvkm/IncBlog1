"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchFormReset = ({ onReset }: { onReset: () => void }) => {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={onReset}
      className="absolute right-12 h-8 w-8 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors duration-200"
      aria-label="Clear search"
    >
      <X className="h-4 w-4" />
    </Button>
  );
};

export default SearchFormReset;
