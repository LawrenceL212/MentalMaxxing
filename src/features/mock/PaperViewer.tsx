import { useEffect, useState } from 'react'
import { getFile } from '../../lib/files'
import Icon from '../../ui/Icon'

/** Shows a paper or mark scheme the student attached (kept on this device only). Falls back to an "open" link where the browser cannot embed PDFs. */
export default function PaperViewer({ fileKey, title, className = '' }: { fileKey: string; title: string; className?: string }) {
  const [url, setUrl] = useState<string | null>(null)
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    let made: string | null = null
    let alive = true
    getFile(fileKey)
      .then((f) => {
        if (!alive) return
        if (!f) return setMissing(true)
        made = URL.createObjectURL(f)
        setUrl(made)
      })
      .catch(() => alive && setMissing(true))
    return () => {
      alive = false
      if (made) URL.revokeObjectURL(made)
    }
  }, [fileKey])

  if (missing) return <p className="surface p-4 text-sm font-bold">That file is not on this device. Attach it again from the mock setup.</p>
  if (!url) return <p className="surface p-4 text-sm font-bold">Loading {title}...</p>
  return (
    <div className={`surface grid grid-rows-[auto_1fr] gap-2 overflow-hidden p-2 ${className}`}>
      <div className="flex items-center justify-between gap-2 px-1">
        <b className="label">{title}</b>
        <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold underline"><Icon name="link" size={14} />Open full screen</a>
      </div>
      <iframe src={url} title={title} className="size-full min-h-0 rounded-xl bg-white" />
    </div>
  )
}
