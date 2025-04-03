"use client"
import type { Extension } from '../../../lib/types';

interface ExtensionCardProps {
    extension: Extension;
    theme: 'light' | 'dark';
    onToggle: (id: number) => void; // Function to toggle the extension on/off
}

export default function ExtensionCard({ extension, theme, onToggle }: ExtensionCardProps) {
    return (
        <div className={`${theme === 'light' ? 'bg-neutral-0 border-neutral-200' : 'bg-neutral-800 border-neutral-600'} shadow-sm rounded-xl p-5 border`}>
            <div className="flex gap-4 mb-10">
                <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img src={extension.icon} alt={extension.name} />
                </div>
                <div className='flex-1'>
                    <h3 className={`text-lg font-bold mb-1 ${theme === 'light' ? 'text-[#172554]' : 'text-white'}`}>
                        {extension.name}
                    </h3>
                    <p className={`text-base leading-5 ${theme === 'light' ? 'text-neutral-700' : 'text-gray-400'}`}>
                        {extension.description}
                    </p>
                </div>
            </div>
            <div className='mt-auto pt-2 flex items-center justify-between'>
                <button className={`${theme === 'light' ? 'bg-neutral-0 border-neutral-400 text-neutral-700 hover:text-neutral-200'
                    : 'bg-transparent border-neutral-600 text-white hover:text-neutral-800'} hover:bg-red-400 border px-4 py-1.5 rounded-2xl text-sm font-semibold cursor-pointer`}>
                    Remove
                </button>
                <div className="relative items-center inline-flex">
                    <input
                        type='checkbox'
                        className='sr-only'
                        checked={extension.active} // Set the checked state based on the extension's active status
                        onChange={() => onToggle(extension.id)} // Toggle the active state of the extension and call the onToggle function
                        id={`toggle-${extension.id}`}
                    />
                    <div className={`w-11 h-6 rounded-full transition cursor-pointer
                        ${extension.active ? 'bg-red-400' : theme === 'light' ? 'bg-neutral-300' : 'bg-neutral-600'}`}
                        onClick={() => onToggle(extension.id)} // Toggle the active state of the extension and call the onToggle function
                        >

                        <div
                            className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform 
                                ${extension.active ? "translate-x-5" : "translate-x-0"
                                }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}