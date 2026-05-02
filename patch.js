const fs = require('fs');
const file = 'src/Components/Services/General/ToothColouredRestorations.jsx';
let content = fs.readFileSync(file, 'utf8');

const target = `        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-lightblue/10 text-lightblue mb-6"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-myblack dark:text-lightbg mb-6 leading-tight transition-colors"
          >
            Tooth Coloured Restorations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-mydark dark:text-lightbg/70 font-light leading-relaxed transition-colors"
          >
            At Highland Hills Dental Centre, we offer advanced tooth-colored restorations that blend seamlessly with your natural teeth, providing both aesthetic appeal and functional durability.
          </motion.p>
        </div>`;

const replacement = `        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-lightblue/10 text-lightblue mb-6"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-myblack dark:text-lightbg mb-6 leading-tight transition-colors"
            >
              Tooth-Coloured <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-blue-400">Restorations</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-mydark dark:text-lightbg/70 font-light leading-relaxed transition-colors"
            >
              At Highland Hills Dental Centre, we offer advanced tooth-colored restorations that blend seamlessly with your natural teeth, providing both aesthetic appeal and functional durability.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group border border-gray-100 dark:border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fea5f6c8d0bd?q=80&w=1200&auto=format&fit=crop" 
                alt="Tooth Coloured Restorations" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-lightblue/20 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lightblue/20 dark:bg-lightblue/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-2xl pointer-events-none"></div>
          </motion.div>
        </div>`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(file, content);
  console.log('Successfully patched ToothColouredRestorations.jsx');
} else {
  console.log('Target string not found in ToothColouredRestorations.jsx');
}
