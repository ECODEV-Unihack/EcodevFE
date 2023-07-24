import React from 'react'
import Campaign from 'components/Campaign'
import ReactPaginate from 'react-paginate'
import { CampaignProps } from '../../../../src/@types/CampaignProp.type'
import styles from './CampaignList.module.scss'

interface CampaignListProps {
  campaigns: CampaignProps
  itemsPerPage: number
}

const CampaignList: React.FC<CampaignListProps> = ({ campaigns, itemsPerPage }) => {
  const numPages = Math.ceil(campaigns.length / itemsPerPage)
  const [currentPage, setCurrentPage] = React.useState(0)

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage)
  }

  const getPageItems = () => {
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return campaigns.slice(startIndex, endIndex)
  }

  return (
    <div className='bg-accent-2'>
      <div className='pt-5 pb-4 text-center text-3xl font-bold text-primary'>Những chiến dịch ở gần bạn</div>
      <div className='mx-auto grid max-w-[73.5%] grid-cols-1 gap-4 md:grid-cols-3'>
        {getPageItems().map((campaign) => (
          <Campaign {...campaign} />
        ))}
      </div>
      <div className='styles.paginationList mt-4 pb-4'>
        {numPages > 1 && (
          <ReactPaginate
            pageCount={numPages}
            onPageChange={(selectedPage) => handlePageChange(selectedPage.selected)}
            containerClassName='pagination flex flex-row justify-center flex-nowrap space-x-2'
            previousLabel={''}
            nextLabel={''}
            activeClassName={styles.paginationItemActive}
            pageClassName='pagination-item bg-white p-2 cursor-pointer rounded-full text-xl font-bold'
          />
        )}
      </div>
    </div>
  )
}

export default CampaignList
