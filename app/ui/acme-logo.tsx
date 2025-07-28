import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo({ color }) {
    return (
        <div
            className={`${lusitana.className} flex flex-row items-center leading-none text-${color}`}
        >
            <GlobeAltIcon className="h-8 w-8 rotate-[15deg]" />
            <p className="text-[34px] font-medium">Acme</p>
        </div>
    );
}
