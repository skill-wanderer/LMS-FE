import type { MaybeRefOrGetter } from 'vue'
import { imageSlotGroups, imageSlots, type ImageSlotGroup } from '~/data/image-slots'

// Every image saved under app/assets/images, keyed by slot name: "learning-paths/hub" -> built URL.
const files = import.meta.glob<string>('../assets/images/**/*.{webp,png,jpg,jpeg,avif}', {
  eager: true,
  import: 'default',
})

const imageUrls = new Map(
  Object.entries(files).map(([path, url]) => [
    path.replace('../assets/images/', '').replace(/\.\w+$/, ''),
    url,
  ]),
)

/**
 * An AI image slot from ~/data/image-slots.
 *
 * `shown` is false when the slot renders nothing, which only happens in
 * production: an empty slot, or one whose group is still missing images, is
 * skipped there. Layouts can use it to drop the space the image would take.
 */
export function useImageSlot(name: MaybeRefOrGetter<string>, group?: MaybeRefOrGetter<ImageSlotGroup | undefined>) {
  const spec = computed(() => imageSlots[toValue(name)])
  const url = computed(() => imageUrls.get(toValue(name)))
  const groupNames = computed(() => {
    const groupName = toValue(group)
    return groupName ? imageSlotGroups[groupName] : []
  })
  const shown = computed(() =>
    import.meta.dev || (!!url.value && groupNames.value.every(slot => imageUrls.has(slot))),
  )

  return { spec, url, groupNames, shown }
}
