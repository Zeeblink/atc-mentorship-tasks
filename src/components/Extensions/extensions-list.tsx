import { useState } from 'react';
import { extensionsData } from '../../../lib/data';
import ExtensionCard from './extensions-card';
import type { Extension } from '../../../lib/types';

interface ExtensionsListProps {
  theme: 'light' | 'dark';
}

const Extensions = ({ theme }: ExtensionsListProps) => {

  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all'); // State to manage the filter of the extensions
  const [extensions, setExtensions] = useState<Extension[]>(extensionsData); // State to manage the list of extensions
  

  // Function to handle filter extensions using "filter" high order array method
  const filteredExtensions = extensions.filter((extension) => { // Use the 'extensions' state here
    if (filter === 'all') return true;
    if (filter === 'active') return extension.active;
    if (filter === 'inactive') return !extension.active;
    return true;
  })

  // Funtion to toggle extension on/off using "map" high order array method
  const toggleExtension = (id: number) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((ext) => (ext.id === id ? { ...ext, active: !ext.active } : ext)),
    )
  }

  return (
    <>
      <div className='mb-6 flex flex-col md:flex-row items-center  justify-center md:justify-between gap-4'>
        <h2 className={`text-4xl lg:text-3xl font-bold ${theme === 'light' ? 'text-neutral-900' : 'text-white'}`}>Extensions List</h2>
        <div className="flex gap-2">

          {/* This button sets the filter state to all */}
          <button
            className={`px-4 py-2 cursor-pointer rounded-full font-medium ${filter === "all"
              ? "bg-red-400 text-white"
              : theme === "light"
                ? "bg-neutral-0 text-neutral-900 border border-neutral-100 shadow-sm"
                : "bg-neutral-800 border-neutral-600 text-white"
              }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          {/* This button sets the filter state to active */}
          <button
            className={`px-4 py-2 cursor-pointer rounded-full font-medium ${filter === "active"
              ? "bg-red-400 text-white"
              : theme === "light"
                ? "bg-neutral-0 text-neutral-900 border border-neutral-100 shadow-sm"
                : "bg-neutral-800 border-neutral-600 text-white"
              }`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          {/* This button sets the filter state to inactive */}
          <button
            className={`px-4 py-2 cursor-pointer rounded-full font-medium ${filter === "inactive"
              ? "bg-red-400 text-white"
              : theme === "light"
                ? "bg-neutral-0 text-neutral-900 border border-neutral-100 shadow-sm"
                : "bg-neutral-800 border-neutral-600 text-white"
              }`}
            onClick={() => setFilter("inactive")}
          >
            Inactive
          </button>
        </div>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredExtensions.map((extension) => (
          <ExtensionCard
           extension={extension}
           key={extension.id}
           theme={theme}
           onToggle={() => toggleExtension(extension.id)} // Pass the toggle function to the ExtensionCard component
           // This function is called when the toggle button is clicked in the ExtensionCard component
          />
        ))}
      </div>
    </>
  );
};

export default Extensions;
