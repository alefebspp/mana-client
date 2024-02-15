import ChurchEventsTable from '@/components/Tables/ChurchEventsTable'
import { getChurchsEvents } from '@/services/churchs'
import { cookies } from 'next/headers'

export default async function ChurchEvents() {
  const selectedChurch = cookies().get('@selected-church-id')?.value

  const response = await getChurchsEvents(selectedChurch || '')

  return <ChurchEventsTable events={response.data} />
}
