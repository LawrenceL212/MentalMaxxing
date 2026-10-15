/** Knowledge-organiser files (PDF or image). Stored on this device only (IndexedDB): they are too big to sync. */
const DB = 'mentalmaxxing-files'
const STORE = 'files'
export const MAX_FILE_BYTES = 15 * 1024 * 1024

const open = () =>
  new Promise<IDBDatabase>((resolve, reject) => {
    const req = indexedDB.open(DB, 1)
    req.onupgradeneeded = () => req.result.createObjectStore(STORE)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })

const run = async <T,>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> => {
  const db = await open()
  return new Promise<T>((resolve, reject) => {
    const req = fn(db.transaction(STORE, mode).objectStore(STORE))
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

export const putFile = (key: string, file: File) => run('readwrite', (s) => s.put(file, key))
export const getFile = (key: string) => run<File | undefined>('readonly', (s) => s.get(key))
export const deleteFile = (key: string) => run('readwrite', (s) => s.delete(key))
