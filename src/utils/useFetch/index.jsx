import { useState, useEffect } from 'react'

export function useFetch(url) {
   const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  useEffect(() => {
    if (!url || isLoading || data.length) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)
        if (!response.ok || response.status !== 200) {
          const { errorMessage } = await response.json()
          throw new Error(errorMessage)
        } else {
          const data = await response.json()
          setData(data)
        }
        setLoading(false)
      } catch (err) {
        console.log('===API Error====', err)
        setError(true)
        setData({ errorMessage: "Oups il y a une erreur dans l'API" })
      } finally {
        setLoading(false)
      }
      setLoading(false)
    }
    if(!isLoading)fetchData()
  }, [url,isLoading,data.length])

  return { data, isLoading, error }
}
