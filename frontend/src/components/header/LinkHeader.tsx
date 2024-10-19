import Link from "next/link";

interface LinkHeaderProps {
  href: string;
  children?: React.ReactNode
}

export default function LinkHeader(props: LinkHeaderProps){
  const { href = "#", children = "Link" } = props
  return (
    <Link href={href} className="hover:text-white border-solid border-2 border-slate-500 p-1 ">
      {children}
    </Link>
  )
}