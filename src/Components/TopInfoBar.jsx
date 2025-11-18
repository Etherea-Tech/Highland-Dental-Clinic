import { Phone, Mail, Clock } from "lucide-react";

const TopInfoBar = () => {
  return (
    <div className="bg-mydark font-poppins text-lightbg py-3 px-8 sticky top-0 z-50 border-b border-gray-600">
      <div className="flex items-center justify-between gap-4 text-xs">
        {/* Contact Info */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+1-123-123-123"
            className="hover:text-blue-200 transition-colors flex items-center gap-1"
          >
            <Phone className="h-4 w-4" />
            <span className="text-lightbg font-normal text-[16px]">
              Call Us:
            </span>
            <a
              href="tel:+1-123-123-123"
              className="hover:text-blue-200 text-lightbg font-normal text-[16px]  transition-colors whitespace-nowrap"
            >
              +1 (123) 123-123
            </a>
          </a>

          <a
            href="mailto:highlandhillsdental@rogers.com"
            className="hover:text-blue-200 transition-colors flex items-center gap-1"
          >
            <Mail className="h-4 w-4" />
            <span className="text-lightbg font-normal text-[16px]">
              Email Us:
            </span>
            <a
              href="mailto:highlandhillsdental@rogers.com"
              className="hover:text-blue-200 transition-colors truncate max-w-[180px] sm:max-w-none text-[16px]"
              title="highlandhillsdental@rogers.com"
            >
              <span className="hidden sm:inline ">
                highlandhillsdental@rogers.com
              </span>
            </a>
          </a>
        </div>

        {/* Appointment Badge */}
        <div className="flex items-center gap-1 bg-lightblue px-2 py-2 rounded-full">
          <Clock className="h-4 w-4" />
          <span className="font-medium text-[16px] whitespace-nowrap">
            Evening & Weekend Appointment Available
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
