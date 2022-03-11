import Link from 'next/link'

export default function Home() {
  return (
    <div>
       <div>
          <Link href="/Oficina">
              <a>
                Oficina
              </a>
          </Link>
       </div>
       <div>
         Deposito
       </div>
      {/* <UltimosMovimientos>

      </UltimosMovimientos> */}
       Mondongo
    </div>
  )
}
