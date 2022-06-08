import Head from 'next/head'
import Image from 'next/image'
import { Query, useQuery } from 'react-query'
import { useGetExample } from '../hooks/todos'
import styles from '../styles/Home.module.css'


const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = res.json()
  return data;
}
export default function Home() {
  // const query = useQuery('todos', getTodos)
  // const { data } = useQuery('todos', getTodos);
  const {data} = useGetExample()
  console.log(data);
  return (
    <div className={styles.container}>
      <ul>
          {data.map((index) => {
            <li> {index.title}</li>
          })}
      </ul>
    </div>
  )
}
