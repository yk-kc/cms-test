import { client } from '@/libs/client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import StatusLabel from '@/components/StatusLabel'

export default function Home() {
  const [productsData, setProductsData] = useState<Product[]>([])
  useEffect(() => {
    fetch('https://cms-test002.microcms.io/api/v1/test', {
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_CMS_API_KEY!,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.contents)
        setProductsData(res.contents)
      })
  }, [])
  return (
    <div className={styles.container}>
      <h1>ハチミツ商品一覧</h1>
      <ul>
        {productsData.map((product) => (
          <li key={product.id} className={styles.listItem}>
            <a href={product.link} target='_blank' className={styles.flexItem}>
              <Image
                src={product.thumbnail.url}
                width={product.thumbnail.width}
                height={product.thumbnail.height}
                alt={product.name}
                className={styles.thumbnail}
              />
              <div className={styles.infoContainer}>
                <div>
                  <p className={styles.name}>{product.name}</p>
                  <p className={styles.price}>
                    {Number(product.price).toLocaleString()}円
                  </p>
                  <p>{product.intro}</p>
                </div>
                <StatusLabel status={product.status[0]} />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
