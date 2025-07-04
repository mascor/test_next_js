import { useEffect, useState } from 'react'

export default function Home() {
  const [dati, setDati] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/dati')
      const json = await res.json()
      const lista = Object.entries(json).map(([id, val]) => ({ id, ...val }))
      setDati(lista)
    }
    fetchData()
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Dati Firebase</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Temperatura</th>
            <th>Umidità</th>
            <th>Suolo</th>
          </tr>
        </thead>
        <tbody>
          {dati.map((d) => (
            <tr key={d.id}>
              <td>{d.timestamp}</td>
              <td>{d.temperatura}</td>
              <td>{d.umidita}</td>
              <td>{d.suolo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}