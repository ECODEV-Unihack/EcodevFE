import React from 'react'
import SlideShow from './SlideShow'
import CampaignCarousel from './SlideShow/CampaignCarousel'
import ClubCarousel from './SlideShow/ClubCarousel'
import CampaignList from './List/CampaignList'
import { campaigns } from 'data/data'
import ContactSec from './ContactSec'
import PartnerSec from './PartnerSec'

export default function Main() {
  return (
    <div>
      <SlideShow />
      <CampaignCarousel />
      <ClubCarousel />
      <CampaignList campaigns={campaigns} itemsPerPage={6} />
      <ContactSec />
      <PartnerSec />
    </div>
  )
}
