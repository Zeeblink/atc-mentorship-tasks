"use client"

import type { Extension } from '../../../lib/types';

interface ExtensionCardProps {
    extension: Extension;
    theme: 'light' | 'dark';
    onToggle: () => void;
}

export default function ExtensionCard({ extension, theme, onToggle }: ExtensionCardProps) {

    return (
        <div className={`${theme === 'light' ? 'bg-white' : 'bg-[#1F2937]'} shadow-sm rounded-xl p-5 border border-gray-600`}>
            <div className="flex gap-4 mb-10">
                <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img src={extension.icon} alt={extension.name} />
                </div>
                <div className='flex-1'>
                    <h3 className={`text-lg font-semibold ${theme === 'light' ? 'text-[#172554]' : 'text-white'}`}>
                        {extension.name}
                    </h3>
                    <p className={`text-sm ${theme === 'light' ? 'text-[#64748b]' : 'text-gray-400'}`}>
                        {extension.description}
                    </p>
                </div>
            </div>
            <div className='mt-auto pt-2 flex items-center justify-between'>
                <button className={`${theme === 'light' ? 'bg-white border-gray-600 text-[#475569] hover:bg-[#f8fafc]'
                    : 'bg-transparent border-gray-700 text-white hover:bg-gray-800'} border px-4 py-1.5 rounded-2xl text-sm`}>
                    Remove
                </button>
                <div className="relative items-center inline-flex">
                    <input
                        type='checkbox'
                        className='sr-only'
                        checked={extension.active}
                        onChange={onToggle}
                        id={`toggle-${extension.id}`}
                    />
                    <div className={`w-11 h-6 rounded-full transition cursor-pointer
                        ${extension.active ? 'bg-red-400' : theme === 'light' ? 'bg-[#e2e8f0]' : 'bg-gray-700'}`}>

                        <div
                            className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${extension.active ? "translate-x-5" : "translate-x-0"
                                }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}