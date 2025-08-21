interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <div className={`${className} bg-gradient-to-br from-primary to-violet-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
      X
    </div>
  );
}
