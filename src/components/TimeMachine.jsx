import React, { useRef, useState } from 'react';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const decades = [
  { value: 'all', label: 'All Eras', period: '' },
  { value: '1920s', label: '1920s', period: 'Silent Era' },
  { value: '1930s', label: '1930s', period: 'Golden Dawn' },
  { value: '1940s', label: '1940s', period: 'War & Drama' },
  { value: '1950s', label: '1950s', period: 'Technicolor' },
  { value: '1960s', label: '1960s', period: 'New Wave' },
  { value: '1970s', label: '1970s', period: 'Auteur Era' },
];

const TimeMachine = () => {
  const scrollRef = useRef(null);
  const [selectedDecade, setSelectedDecade] = useState('all');

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-amber-900/10 via-black to-amber-900/10 border-y border-amber-600/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Clock className="w-8 h-8 text-amber-400" />
            <h2 className="text-4xl font-serif text-amber-400 tracking-wider">TIME MACHINE</h2>
            <Clock className="w-8 h-8 text-amber-400 scale-x-[-1]" />
          </div>
          <p className="text-amber-100 text-lg font-light">Journey Through Cinema's Greatest Decades</p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Decade Selector with scroll controls */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <button onClick={scrollLeft} className="p-2 rounded-full bg-amber-600/20 hover:bg-amber-600/30 transition-colors mr-4">
              <ChevronLeft className="w-6 h-6 text-amber-400" />
            </button>

            <div ref={scrollRef} className="flex space-x-4 overflow-x-auto max-w-4xl no-scrollbar scroll-smooth">
              {decades.map((decade) => (
                <button
                  key={decade.value}
                  onClick={() => setSelectedDecade(decade.value)}
                  className={`relative flex-shrink-0 group ${
                    selectedDecade === decade.value
                      ? 'bg-gradient-to-b from-amber-600 to-amber-700 shadow-lg shadow-amber-600/25'
                      : 'bg-amber-900/20 hover:bg-amber-900/40'
                  } rounded-lg p-6 border-2 ${
                    selectedDecade === decade.value ? 'border-amber-400' : 'border-amber-600/30'
                  } transition-all duration-300 transform hover:scale-105 min-w-[200px]`}
                >
                  <div className="text-center">
                    <div className={`text-2xl font-serif font-bold mb-2 ${
                      selectedDecade === decade.value ? 'text-white' : 'text-amber-400'
                    }`}>
                      {decade.label}
                    </div>
                    {decade.period && (
                      <div className={`text-sm font-light ${
                        selectedDecade === decade.value ? 'text-amber-100' : 'text-amber-600'
                      }`}>
                        {decade.period}
                      </div>
                    )}
                  </div>

                  {/* Corners */}
                  {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos) => (
                    <div
                      key={pos}
                      className={`absolute ${pos} w-3 h-3 ${
                        pos.includes('top')
                          ? pos.includes('left')
                            ? 'border-l-2 border-t-2'
                            : 'border-r-2 border-t-2'
                          : pos.includes('left')
                          ? 'border-l-2 border-b-2'
                          : 'border-r-2 border-b-2'
                      } ${selectedDecade === decade.value ? 'border-amber-200' : 'border-amber-600'} opacity-50`}
                    />
                  ))}
                </button>
              ))}
            </div>

            <button onClick={scrollRight} className="p-2 rounded-full bg-amber-600/20 hover:bg-amber-600/30 transition-colors ml-4">
              <ChevronRight className="w-6 h-6 text-amber-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeMachine;
