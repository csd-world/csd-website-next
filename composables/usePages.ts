import { CustomPageMeta, PageType } from '~~/types'

export default function (type?: PageType) {
  const router = useRouter()
  const allPages = router.options.routes.sort(
    (a, b) => -a.meta.key - +b.meta.key
  )
  return type
    ? allPages
    : allPages.filter((page) => (page.meta as CustomPageMeta).type === type)
}
