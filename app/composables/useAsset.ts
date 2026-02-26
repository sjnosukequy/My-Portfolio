export default function (url: string) {
  const config = useRuntimeConfig()
  const normalized = url.startsWith('/') ? url : `/${url}`

  if (import.meta.dev) {
    return normalized
  }

  return `${config.app.baseURL.replace(/\/$/, '')}${normalized}`
}