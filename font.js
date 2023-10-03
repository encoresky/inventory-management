import { DM_Sans, Lato} from 'next/font/google'
 
export const DMSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100','300',"400",'500','700','900'],
  variable: '--font-DM-Sans',
})
 
export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100','300','400','700','900'],
  variable: '--font-Lato',
})