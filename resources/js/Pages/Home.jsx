import React from 'react'
import { Head, Link } from '@inertiajs/react'

export default function Home() {
  return (
    <>
        <Head>
            <title>Page d'accueil</title>
        </Head>
        <h1>Bienvenue sur ma page d'accueil</h1>
        <Link href={route('about')}>Page about</Link>
    </>
  )
}
