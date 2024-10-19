import { IconLetterL, IconLetterM, IconTypography} from '@tabler/icons-react'
import Link from "next/link";
import NavBar from "./NavBar";
import SwitchTheme from '../switch-theme/SwitchTheme';
import SwitchLang from '../switch-lang/SwitchLang';

export default function Header() {
  return (
  <header className="flex flex-row p-3 px-5">
    <Link href="/" className='flex flex-row m-0'>
      <IconLetterL/>
      <IconLetterM/>
    </Link>
    <NavBar/>
    <SwitchLang/>
    <SwitchTheme/> 
  </header>)
}