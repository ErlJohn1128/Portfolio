import React, { useState } from 'react';

import EmailIcon from "../assets/icons/mailgun.svg";
import MessengerIcon from "../assets/icons/messenger.svg";
import DiscordIcon from "../assets/icons/discord.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";

interface Contact {
    name: string;
    value: string;
    action: string;
    onClick: () => void;
    icon: string;
}

export default function Contact(): React.ReactElement {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string, label: string): void => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
    };

    const contactArray: Contact[] = [
        {
            name: 'EMAIL',
            value: 'erljohn004@gmail.com',
            action: 'SEND EMAIL',
            onClick: () => {
                window.location.href = 'mailto:erljohn004@gmail.com';
            },
            icon: EmailIcon
        },
        {
            name: 'MESSENGER',
            value: 'm.me/lovehannie1128', 
            action: 'OPEN CHAT',
            onClick: () => {
                window.open('https://m.me/lovehannie1128', '_blank');
            },
            icon: MessengerIcon
        },
        {
            name: 'DISCORD',
            value: 'hanieismylove',
            action: copied === 'DISCORD' ? 'COPIED!' : 'COPY TAG',
            onClick: () => {
                copyToClipboard('hanieismylove', 'DISCORD');
            },
            icon: DiscordIcon
        },
        {
            name: 'LINKEDIN',
            value: 'linkedin.com/in/earl-john-bozar-009708387/', 
            action: 'VISIT PROFILE',
            onClick: () => {
                window.open('https://linkedin.com/in/earl-john-bozar-009708387/', '_blank');
            },
            icon: LinkedinIcon
        }
    ];

    return (
        <section id="contact"
        className="min-h-screen px-8 flex flex-col justify-center items-center font-mono"
        >
            <div className="mx-auto w-full max-w-5xl flex flex-col justify-start">
                <p className="mb-3 font-mono text-[10px] lg:text-sm text-white/40 self-start">
                    04 / CONTACT
                </p>

                <h2 className="font-mono text-lg lg:text-4xl font-bold tracking-tight text-white self-start">
                    Get in touch
                </h2>

                <p className="mt-4 font-mono text-[10px] lg:text-lg text-white/70 max-w-2xl">
                    Feel free to reach out for collaborations, opportunities, or for a chat.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full">
                
                {contactArray.map((item) => (
                    <div key={item.name}
                    className="p-6 rounded-lg border border-black shadow-[0_5px_10px_rgba(255,255,255,0.15)] bg-slate-900/60 backdrop-blur-sm flex items-center justify-between transition-all hover:shadow-[0_5px_15px_rgba(255,255,255,0.3)] hover:border-white/20"
                    >
                        <div className="flex items-center space-x-4 min-w-0 pr-4">
                            <div className="p-1 rounded-md bg-white border border-white/10 shrink-0">
                                {item.icon && (
                                    <img 
                                        src={item.icon}
                                        className="h-4 w-4 lg:h-5 lg:w-5 opacity-80"
                                    />
                                )}
                            </div>
                            <div className="min-w-0">
                                <p className="font-mono text-[10px] lg:text-xs text-white/40 tracking-wider">
                                    {item.name}
                                </p>
                                <p className="font-mono text-[10px] lg:text-sm text-white/80 truncate mt-0.5">
                                    {item.value}
                                </p>
                            </div>
                    </div>

                    <button
                        onClick={item.onClick}
                        className="shrink-0 px-2 lg:px-4 py-1 lg:py-2 text-[8px] lg:text-xs font-mono text-white/90 bg-white/10 hover:bg-white hover:text-black rounded border border-white/20 transition-all duration-200"
                    >
                        {item.action}
                    </button>
                    </div>
                ))}
                </div>
      </div>
    </section>
  );
}