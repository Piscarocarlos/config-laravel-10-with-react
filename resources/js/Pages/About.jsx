import React from 'react'
import { Head, Link } from '@inertiajs/react'

export default function About({ name }) {
  return (
    <>
    <Head>
            <title>Page about</title>
    </Head>
        <h1>À propos de {name}</h1>
        <Link href={route('home')}>Aller sur la page d'acceuil</Link>
    </>
  )
}
