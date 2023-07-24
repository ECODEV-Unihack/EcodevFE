export interface CampaignProp {
  id: number
  name: string
  location: string
  distance: number
  startDate: string
  endDate?: string
  image: string
  isSlide?: boolean
  isNew?: boolean
  club?: string
}

export type CampaignProps = CampaignProp[]