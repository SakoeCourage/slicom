import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "app/app/components/ui/dropdown";
import IconifyIcon from "../ui/Iconsbutton";

const optionThemes = {
    "danger": "#ef4444",
    "primary": "#f97316",
    "secondary": "#3b82f6",
    "success": "#22c55e",
    "neutral": "#4b5563",
}

interface ITableoption {
    optionName: string,
    icon: string,
    theme?: keyof typeof optionThemes
    onOptionSelected: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

/**
 * 
 * For Table use only 
 * 
 */
const Moreoptions = ({ options }: { options: ITableoption[] }) => {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger>
                <IconifyIcon
                    fontSize="2rem"
                    className="text-gray-500 active:text-green-500 focus:text-green-500 "
                    icon="solar:menu-dots-square-linear"
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col bg-white z-50">
                {options?.map((option, i) => {
                    return <DropdownMenuItem onClick={(e) => { e.preventDefault(); option.onOptionSelected(e) }} key={i} className={`cursor-pointer flex items-center gap-1 py-1 hover:bg-gray-50/50 ${(i == 0 || i < (options.length - 1)) && 'border-b'}`}>
                        <IconifyIcon
                            fontSize="1rem"
                            style={{ color: option.theme ? optionThemes[option?.theme] : optionThemes.neutral }}
                            icon={option.icon}

                        />
                        <span className=" font-medium" style={{ color: option.theme ? optionThemes[option?.theme] : optionThemes.neutral }} >{option.optionName}</span>
                    </DropdownMenuItem>
                })}
            </DropdownMenuContent>

        </DropdownMenu>
    );
};

export default Moreoptions