import { Phone, Mail, Clock } from "lucide-react";

const TopInfoBar = () => {
  return (
    <div className="bg-mydark font-poppins text-lightbg py-2 md:py-3 px-4 md:px-8 sticky top-0 z-50 border-b border-gray-600">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 text-xs">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 w-full md:w-auto">
          <a
            href="tel:+1-123-123-123"
            className="hover:text-blue-200 transition-colors flex items-center gap-1"
          >
            <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span className="text-lightbg font-normal text-[14px] md:text-[16px]">
              <span className="hidden md:inline">Call Us: </span>
              +1 (123) 123-123
            </span>
          </a>

          <a
            href="mailto:highlandhillsdental@rogers.com"
            className="hover:text-blue-200 transition-colors hidden sm:flex items-center gap-1"
          >
            <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span className="text-lightbg font-normal text-[14px] md:text-[16px]">
              <span className="hidden md:inline">Email Us: </span>
              highlandhillsdental@rogers.com
            </span>
          </a>
        </div>

        {/* Appointment Badge */}
        <div className="flex items-center justify-center gap-1 bg-lightblue px-3 md:px-4 py-1.5 md:py-2 rounded-full w-full sm:w-auto">
          <Clock className="h-3.5 w-3.5 md:h-4 md:w-4" />
          <span className="font-medium text-[12px] md:text-[14px] whitespace-nowrap">
            Evening & Weekend Appointments Available
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
