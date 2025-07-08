import React from "react";
import { ArrowRight } from "lucide-react";

interface StickyHeaderProps {
  show: boolean;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ show }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-[#00C1D4] text-white py-3 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
              </div>
              <span className="font-medium">
                Transform Your Job Search Today
              </span>
            </div>
            <a
              href="/signup"
              className="flex items-center space-x-2 px-4 py-2 bg-white text-[#00C1D4] rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
