import { Phone, Mail, Clock } from 'lucide-react';

const TopInfoBar = () => {
  return (
    <div className="bg-[#4a597a] text-white py-3 px-2 sticky top-0 z-50 border-b border-gray-600">
      <div className="flex items-center justify-between gap-2 text-xs">
        {/* Contact Info */}
        <div className="flex items-center gap-3">
          <a 
            href="tel:+1-123-123-123" 
            className="hover:text-blue-200 transition-colors flex items-center gap-1"
          >
            <Phone className="h-3 w-3" />
            <span>Call Us:</span>
            <a 
              href="tel:+1-123-123-123" 
              className="hover:text-blue-200 transition-colors whitespace-nowrap"
            >
              +1 (123) 123-123
            </a>
          </a>
          
          <a 
            href="mailto:highlandhillsdental@rogers.com" 
            className="hover:text-blue-200 transition-colors flex items-center gap-1"
          >
            <Mail className="h-3 w-3" />
            <span>Email Us:</span>
                        <a 
              href="mailto:highlandhillsdental@rogers.com" 
              className="hover:text-blue-200 transition-colors truncate max-w-[180px] sm:max-w-none"
              title="highlandhillsdental@rogers.com"
            >
              <span className="hidden sm:inline capitalize">highlandhillsdental@rogers.com</span>
            </a>

          </a>
        </div>

        {/* Appointment Badge */}
        <div className="flex items-center gap-1 bg-[#4c9cb5] px-2 py-1 rounded-full">
          <Clock className="h-3 w-3" />
          <span className="font-semibold whitespace-nowrap">
        Evening & Weekend Appointment available
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;