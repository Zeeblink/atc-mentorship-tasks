import { useState } from 'react';
import { extensionsData } from '../../../lib/data';
import ExtensionCard from './extensions-card';
import type { Extension } from '../../../lib/types';

interface ExtensionsListProps {
  theme: 'light' | 'dark';
}

const Extensions = ({ theme }: ExtensionsListProps) => {

  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all'); // State to manage the filter of the extensions
  const [extensions, setExtensions] = useState<Extension[]>(extensionsData); // State to manage the extensions data

  // Function to handle filter extensions using filter high order array method
  // const filteredExtensions = extensions.filter((extension) => {
  //   if (filter === 'all') return true;
  //   if (filter === 'active') return extension.active;
  //   if (filter === 'inactive') return !extension.active;
  //   return true;
  // })

  // Function to handle the toggle of the extensions using map high order array method
  // This function will toggle the active state of the extension when the user clicks on the button
  const toggleExtension = (id: number) => {
    setExtensions(extensions.map((ext) => (ext.id === id ? { ...ext, active: !ext.active } : ext)))
  }

  return (
    <>
      <div className='mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4'>
        <h2 className={`text-2xl font-bold ${theme === 'light' ? 'text-[#172554]' : 'text-white'}`}>Extensions List</h2>
        <div className="flex gap-2">

          {/* This button sets the filter state to all */}
          <button
            className={`px-4 py-2 cursor-pointer rounded-full font-medium ${filter === "all"
              ? "bg-[#e11d48] text-white"
              : theme === "light"
                ? "bg-[#f1f5f9] text-[#475569]"
                : "bg-[#1f2937] text-white"
              }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          {/* This button sets the filter state to active */}
          <button
            className={`px-4 py-2 cursor-pointer rounded-full font-medium ${filter === "active"
              ? "bg-[#e11d48] text-white"
              : theme === "light"
                ? "bg-[#f1f5f9] text-[#475569]"
                : "bg-[#1f2937] text-white"
              }`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          {/* This button sets the filter state to inactive */}
          <button
            className={`px-4 py-2 cursor-pointer rounded-full font-medium ${filter === "inactive"
              ? "bg-[#e11d48] text-white"
              : theme === "light"
                ? "bg-[#f1f5f9] text-[#475569]"
                : "bg-[#1f2937] text-white"
              }`}
            onClick={() => setFilter("inactive")}
          >
            Inactive
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {extensionsData.map((extension) => (
          <ExtensionCard
            extension={extension}
            key={extension.id}
            onToggle={() => toggleExtension(extension.id)}
            theme={theme}
          />
        ))}
      </div>
    </>
  );
};

export default Extensions;