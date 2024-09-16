interface headerProps {
    label: string,
}

export const Header = ({label}: headerProps) => {
 return (
    <div className="w-full flex flex-col items-center justify-center gap-y-4">
         <h1 className="font-Dmserif text-4xl">Join Medium</h1>
         <p className="text-muted-foreground text-sm">{label}</p>
    </div>
 )
}