import { useEffect, useState } from 'react'
import { request } from '../api'
// Параметри path суроғаи API-ро қабул мекунад (метавонад, масалан, "/users" ё "/products" бошад).
export default function useFetch(path) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    request(path)
    // : Агар дархост муваффақ шавад, маълумоти омадаро (result) танҳо дар сурате ба data менависад, ки active === true бошад.
      .then((result) => active && setData(result))
      // Агар хатогӣ дида шавад, онро ба error менависад.
      .catch((err) => active && setError(err))
      // Новобаста аз он ки дархост муваффақ шуд ё хатогӣ дошт, боргирӣ тамом мешавад ва loading = false мегардад.
      .finally(() => active && setLoading(false))
      // Агар компонент нобуд шавад (unmount) ё path тағйир ёбад, ин функсия иҷро шуда, active-ро false мекунад.
    return () => {
      active = false
    }
  }, [path])

  return { data, loading, error }
}
